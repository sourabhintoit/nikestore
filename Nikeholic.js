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


document.getElementById('myButton').addEventListener('click', function() {
    // Your code here
});


$('#myButton').on('click', function() {
    // Your code here
});


// Sample data
var itemsToSave = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item10'];

// Save to local storage
$.each(itemsToSave, function(index, item) {
    localStorage.setItem('item_' + index, item);
});
