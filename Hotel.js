// Function to toggle between sections
function showSection(sectionId) {
    // Hide all sections first
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';

    // Add active class for smooth transition
    setTimeout(() => selectedSection.classList.add('active'), 50);
}

// Dark mode toggle functionality
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Contact form submission handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Show confirmation message for contact form
    document.getElementById('contactConfirmation').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('contactForm').reset();
        document.getElementById('contactConfirmation').classList.add('hidden');
    }, 3000);
});

// Booking form submission handler
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    
    // Collect the booking data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const room = document.getElementById('room').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;

    // Price per night for different rooms
    const roomPrices = {
        "Deluxe Room": 150,
        "Executive Suite": 250,
        "Penthouse Suite": 500 // Added price for Penthouse Suite
    };

    // Calculate total price based on check-in and check-out dates
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    const nightCount = (checkoutDate - checkinDate) / (1000 * 3600 * 24);  // Calculate number of nights
    const totalPrice = roomPrices[room] * nightCount;

    // Display the booking details and bill
    const billSection = document.getElementById('billSection');
    billSection.innerHTML = `
        <h3>Booking Confirmation</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Room Type:</strong> ${room}</p>
        <p><strong>Check-in Date:</strong> ${checkin}</p>
        <p><strong>Check-out Date:</strong> ${checkout}</p>
        <h4>Bill Summary</h4>
        <p><strong>Total Nights:</strong> ${nightCount} night(s)</p>
        <p><strong>Price per Night:</strong> $${roomPrices[room]}</p>
        <p><strong>Total Amount:</strong> $${totalPrice}</p>
    `;
    billSection.style.display = 'block'; // Show the bill section

    // Optionally, reset the form fields after the booking is processed
    document.getElementById('bookingForm').reset();

    // Show an alert to confirm the booking
    alert(`Room successfully booked!\n\nName: ${name}\nRoom: ${room}\nCheck-in: ${checkin}\nCheck-out: ${checkout}\n\nTotal Amount: $${totalPrice}\n\nThank you for booking with us!`);
});



document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Clear previous error messages
    let errors = document.querySelectorAll(".error");
    errors.forEach(error => error.classList.add("hidden"));

    // Check for validation errors
    let hasError = false;

    if (!document.getElementById("contact-name").value) {
        document.querySelector("#contact-name + .error").classList.remove("hidden");
        hasError = true;
    }
    if (!document.getElementById("contact-email").value) {
        document.querySelector("#contact-email + .error").classList.remove("hidden");
        hasError = true;
    }
    if (!document.getElementById("subject").value) {
        document.querySelector("#subject + .error").classList.remove("hidden");
        hasError = true;
    }
    if (!document.getElementById("message").value) {
        document.querySelector("#message + .error").classList.remove("hidden");
        hasError = true;
    }

    if (hasError) return;

    // Show loading
    document.getElementById("loading").classList.remove("hidden");

    // Simulate form submission
    setTimeout(function() {
        // Hide loading
        document.getElementById("loading").classList.add("hidden");

        // Show confirmation message
        document.getElementById("contactConfirmation").classList.remove("hidden");

        // Reset the form after submission
        document.getElementById("contactForm").reset();
    }, 2000); // Simulate submission delay
});

