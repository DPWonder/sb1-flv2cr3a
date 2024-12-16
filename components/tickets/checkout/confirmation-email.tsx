export const getConfirmationEmailContent = (data: any) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { text-align: center; margin-bottom: 30px; background: linear-gradient(to right, #2563eb, #3b82f6); padding: 20px; color: white; border-radius: 8px; }
    .ticket-info { background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; }
    .qr-code { text-align: center; margin: 20px 0; background: white; padding: 20px; border-radius: 8px; }
    .benefits { background: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0; }
    .cta-button { background: #2563eb; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; display: inline-block; margin: 10px 0; }
    .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Your AgentSummit.io Ticket Confirmation</h1>
      <p>September 15-17, 2024 • San Francisco, CA</p>
    </div>
    
    <p>Dear ${data.name},</p>
    
    <p>Thank you for purchasing your ticket to AgentSummit.io! Your registration is confirmed.</p>
    
    <div class="ticket-info">
      <h2>Ticket Details</h2>
      <p><strong>Ticket Type:</strong> ${data.ticketType}</p>
      <p><strong>Order Number:</strong> ${data.orderId}</p>
      <p><strong>Purchase Date:</strong> ${new Date().toLocaleDateString()}</p>
      <p><strong>Amount Paid:</strong> $${data.amount}</p>
      ${data.quantity > 1 ? `<p><strong>Number of Tickets:</strong> ${data.quantity}</p>` : ''}
    </div>

    <div class="qr-code">
      <img src="${data.qrCodeUrl}" alt="Ticket QR Code" style="max-width: 200px;" />
      <p><strong>Your Unique Check-in Code</strong></p>
      <p>Present this QR code at the registration desk</p>
    </div>

    ${data.ticketType === 'VIP' ? `
    <div class="benefits">
      <h2>Your VIP Benefits</h2>
      <ul>
        <li>Priority seating at keynotes</li>
        <li>Exclusive VIP lounge access</li>
        <li>Private networking sessions</li>
        <li>Speaker dinner invitation</li>
        <li>Premium conference swag</li>
      </ul>
    </div>
    ` : ''}

    ${data.ticketType === 'Team Package' ? `
    <div class="benefits">
      <h2>Your Team Benefits</h2>
      <ul>
        <li>Group seating arrangements</li>
        <li>Team networking session</li>
        <li>Group photo opportunity</li>
        <li>Team meeting room access (subject to availability)</li>
      </ul>
    </div>
    ` : ''}

    <h2>Event Details</h2>
    <p><strong>Date:</strong> September 15-17, 2024</p>
    <p><strong>Location:</strong> San Francisco Convention Center</p>
    <p><strong>Check-in Time:</strong> Opens at 8:00 AM daily</p>
    
    <h2>Next Steps</h2>
    <ul>
      <li>Save your QR code for check-in</li>
      <li>Review the <a href="https://agentsummit.io/agenda">conference schedule</a></li>
      <li>Join our <a href="https://agentsummit.io/community">community channels</a></li>
      <li>Book your <a href="https://agentsummit.io/hotel">hotel accommodation</a></li>
    </ul>

    <p>
      <a href="https://agentsummit.io/agenda" class="cta-button">View Full Schedule</a>
    </p>

    <div class="footer">
      <p>Questions? Contact us at support@agentsummit.io</p>
      <p>Follow us on <a href="#">Twitter</a> • <a href="#">LinkedIn</a> • <a href="#">GitHub</a></p>
    </div>
  </div>
</body>
</html>
`;