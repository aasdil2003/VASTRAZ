document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;

    const contactFormData = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    // Logging for debugging
    console.log("Form data:", contactFormData);

    try {
        localStorage.setItem('contactFormData', JSON.stringify(contactFormData));
        console.log("Data stored successfully in local storage.");
    } catch (error) {
        console.error("Error storing data in local storage:", error);
    }
    // Reset the form
    event.target.reset(); // Reset the form
});


document.getElementById('signupButton').addEventListener('click', function () {
    const newsletterEmail = document.getElementById('newsletterEmail').value;

    if (newsletterEmail) {
        localStorage.setItem('newsletterEmail', newsletterEmail);
        console.log('Thank you for signing up for our newsletter!');
    } else {
        console.log('Please enter a valid email address.');
    }
});
