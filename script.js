document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const status = params.get('status');
  const id = params.get('id');
  const li = params.get('li');

  let calendarlink = document.getElementById('sendButton');
  calendarlink.href = li;
  
  if (status && id) {
      updateClickUpTask(status, id, "085ea571-d4cf-4b2b-9089-8b4c81c13c19");
  }

  document.getElementById('sendButton').addEventListener('click', () => {
      if (id) {
          updateClickUpTask("Booked", id, "dfb5ea97-3a08-404a-873d-7bda3f31c6e6");
      } else {
          console.error('No id found in URL parameters');
      }
  });
});

async function updateClickUpTask(value, id, fieldId) {
  const apiToken = "pk_68545445_Q7B0D6C389GWWG9WSXXK3KZIZ798CTU3";
  const listId = "901506003115";
  const searchFieldId = "594341c4-c66d-40eb-bb0c-4bfdda75c1ed"; // Field ID where we search for the given ID

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
