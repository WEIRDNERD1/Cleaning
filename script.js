// script.js

document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the form from submitting traditionally

    // Collect form data
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let frequency = document.getElementById('frequency').value;

    // Pre-format message to be sent to WhatsApp
    let message = `Hello, I'd like to book a deep cleaning service. Here are my details:
    - Name: ${name}
    - Email: ${email}
    - Phone: ${phone}
    - Preferred Date: ${date}
    - Preferred Time: ${time}
    - Frequency: ${frequency}`;

    // WhatsApp link format (replace 1234567890 with your business number)
    let whatsappUrl = `https://wa.me/07035361752?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp with pre-filled message
    window.open(whatsappUrl, '_blank');
});
