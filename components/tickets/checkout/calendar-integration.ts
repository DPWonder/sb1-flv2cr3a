// Calendar integration utilities
export function generateCalendarLinks(eventDetails: {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
}) {
  const { title, description, startDate, endDate, location } = eventDetails;
  
  // Format dates for calendar URLs
  const start = new Date(startDate).toISOString().replace(/-|:|\.\d+/g, '');
  const end = new Date(endDate).toISOString().replace(/-|:|\.\d+/g, '');
  
  // Google Calendar link
  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start}/${end}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;
  
  // Outlook link (works for both online and desktop versions)
  const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(title)}&startdt=${startDate}&enddt=${endDate}&body=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;
  
  // iCal data
  const icalData = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${start}
DTEND:${end}
SUMMARY:${title}
DESCRIPTION:${description}
LOCATION:${location}
END:VEVENT
END:VCALENDAR`;

  return {
    google: googleUrl,
    outlook: outlookUrl,
    ical: `data:text/calendar;charset=utf8,${encodeURIComponent(icalData)}`
  };
}