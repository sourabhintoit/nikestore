document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("All fields are required");
    } else if (!email.includes('@')) {
        alert("Please enter a valid email address with '@'");
    } else {
        // You can submit the form here if it's valid.
        // For example, you can use AJAX to send the data to your server.
        // Alternatively, set the form's action attribute and submit it normally.
        document.getElementById("contact-form").submit();
    }
};