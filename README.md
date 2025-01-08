# Appointment Booking Integration with Google Calendar and ClickUp

## Project Overview

This project provides a seamless solution for integrating appointment booking functionality with **Google Calendar** and **ClickUp**. The solution allows users to book appointments via Google Calendar and automatically updates associated fields in ClickUp with relevant details.

### Key Features:
- **Appointment Booking Button**:  
  A user-friendly web page with a button to book appointments via **Google Calendar**.

- **ClickUp Integration**:  
  - Updates a dedicated field in ClickUp with the word `Booked` once an appointment is confirmed.
  - Sends the meeting date to a specific field in the corresponding ClickUp task.

- **Real-Time Synchronization**:  
  Ensures consistency between Google Calendar appointments and ClickUp tasks.

---

## How It Works

1. **Web Page Interface**:  
   - Users access the web page and click the "Book Appointment" button.
   - This opens Google Calendar to select a meeting date and time.

2. **Reverse Connection to ClickUp**:  
   - Upon appointment confirmation:
     - The ClickUp task is updated to include the word `Booked` in a designated field.
     - The selected meeting date is added to a ClickUp task field.

3. **Integration Technologies**:  
   - **Google Calendar API** for appointment management.  
   - **ClickUp API** for task field updates.

---

## Prerequisites

Before running the project, ensure you have the following:
- A **Google Calendar** account with API access enabled.  
- A **ClickUp** workspace with API access enabled.  
- API keys for both Google Calendar and ClickUp.

---

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
