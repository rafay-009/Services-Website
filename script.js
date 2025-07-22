document.addEventListener("DOMContentLoaded", function() {
    // Example: Log a message when the page loads
    console.log("Welcome to our website!");

    // Example: Handle newsletter form submission
    const newsletterForm = document.querySelector(".newsletter form");
    newsletterForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const emailInput = newsletterForm.querySelector("input[type='email']");
        alert(`Thank you for subscribing with ${emailInput.value}!`);
        emailInput.value = ""; // Clear the input after submission
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Form validation
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        // Basic validation
        if (!name || !email || !phone || !message) {
            alert("Please fill out all fields.");
            return;
        }

        // Send the form data (this is a placeholder - implement your server-side logic)
        alert(`Thank you, ${name}! Your message has been sent.`);

        // Clear form fields after submission
        contactForm.reset();
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Example: Add event listeners to highlight items on hover
    const items = document.querySelectorAll("#differentiators ul li, .case-study, #awards ul li");

    items.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.backgroundColor = "#e0e0e0";
        });
        item.addEventListener("mouseleave", () => {
            item.style.backgroundColor = "#f9f9f9";
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Handle form submission
    const profileForm = document.getElementById("profile-form");
    profileForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Profile updated successfully!");
    });

    const projectForm = document.getElementById("project-form");
    projectForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Project submitted successfully!");
    });
});
