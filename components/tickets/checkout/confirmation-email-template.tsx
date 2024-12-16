import { generateCalendarLinks } from './calendar-integration';

export function getConfirmationEmailTemplate(data: any) {
  const calendarLinks = generateCalendarLinks({
    title: "AgentSummit.io 2024",
    description: "Join us for three days of inspiring keynotes, technical sessions, and networking opportunities in the world of AI agents.",
    startDate: "2024-09-15T09:00:00-07:00",
    endDate: "2024-09-17T17:00:00-07:00",
    location: "San Francisco Convention Center"
  });

  return `
<!DOCTYPE html>
<html>
<!-- Previous styles remain the same -->
<body>
  <div class="container">
    <!-- Previous content remains the same until the Event Details section -->
    
    <div class="event-details">
      <h2>Event Details</h2>
      <p><strong>Date:</strong> September 15-17, 2024</p>
      <p><strong>Location:</strong> San Francisco Convention Center</p>
      <p><strong>Check-in Time:</strong> Opens at 8:00 AM daily</p>
      
      <div class="calendar-buttons">
        <p><strong>Add to Calendar:</strong></p>
        <p>
          <a href="${calendarLinks.google}" target="_blank" class="calendar-button">Google Calendar</a>
          <a href="${calendarLinks.outlook}" target="_blank" class="calendar-button">Outlook</a>
          <a href="${calendarLinks.ical}" download="agentsummit-2024.ics" class="calendar-button">iCal</a>
        </p>
      </div>
    </div>

    <!-- Rest of the email content remains the same -->
  </div>
</body>
</html>`;
}