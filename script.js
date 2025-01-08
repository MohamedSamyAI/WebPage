document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const status = params.get('status');
  const id = params.get('id');
  const li = params.get('li');

  let calendarlink = document.getElementById('sendButton');
  calendarlink.href = li;
  
  if (status && id) {
      updateClickUpTask(status, id, "");
  }

  document.getElementById('sendButton').addEventListener('click', () => {
      if (id) {
          updateClickUpTask("Booked", id, "");
      } else {
          console.error('No id found in URL parameters');
      }
  });
});

async function updateClickUpTask(value, id, fieldId) {
  const apiToken = "";
  const listId = "";
  const searchFieldId = ""; // Field ID where we search for the given ID

  try {
      const response = await fetch(`https://api.clickup.com/api/v2/list/${listId}/task`, {
          method: 'GET',
          headers: {
              'Authorization': apiToken,
              'Content-Type': 'application/json'
          }
      });

      const data = await response.json();
      const task = data.tasks.find(task => {
          const searchField = task.custom_fields.find(field => field.id === searchFieldId);
          return searchField && searchField.value === id;
      });

      if (task) {
          await fetch(`https://api.clickup.com/api/v2/task/${task.id}/field/${fieldId}`, {
              method: 'POST',
              headers: {
                  'Authorization': apiToken,
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  value: value
              })
          });
          console.log('Field updated successfully');
      } else {
          console.error('Task with the given ID not found');
      }
  } catch (error) {
      console.error('Error updating ClickUp task:', error);
  }
}
