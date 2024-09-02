document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // For simplicity, we'll just log the details to the console
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Clear the form
    document.getElementById('contact-form').reset();

    alert('Message sent successfully!');
});
