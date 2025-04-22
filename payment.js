document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('payment-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the form from submitting the default way

        // Collect form data
        const formData = {
            fullName: document.getElementById('full-name').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            zipCode: document.getElementById('zip-code').value,
            cardName: document.getElementById('card-name').value,
            cardNumber: document.getElementById('card-number').value,
            expMonth: document.getElementById('exp-month').value,
            expYear: document.getElementById('exp-year').value,
            cvv: document.getElementById('cvv').value
        };

        // Check if the expiry year is greater than 2024
        if (parseInt(formData.expYear) <= 2024) {
            alert('Credit card is expired');
            return;
        }

        // Log form data to the console
        console.log('Form Data:', formData);

        // Store form data in local storage
        localStorage.setItem('billingPaymentData', JSON.stringify(formData));

        // Alert the user
        alert('Your order is placed');

        // Clear all form data
        form.reset();
        localStorage.removeItem('billingPaymentData');

        // Redirect to home page
        window.location.href = 'index.html'; // Replace 'index.html' with the actual home page URL
    });

    // Function to populate form with stored data
    function populateForm() {
        const storedData = localStorage.getItem('billingPaymentData');
        if (storedData) {
            const data = JSON.parse(storedData);

            document.getElementById('full-name').value = data.fullName;
            document.getElementById('email').value = data.email;
            document.getElementById('address').value = data.address;
            document.getElementById('city').value = data.city;
            document.getElementById('state').value = data.state;
            document.getElementById('zip-code').value = data.zipCode;
            document.getElementById('card-name').value = data.cardName;
            document.getElementById('card-number').value = data.cardNumber;
            document.getElementById('exp-month').value = data.expMonth;
            document.getElementById('exp-year').value = data.expYear;
            document.getElementById('cvv').value = data.cvv;
        }
    }

    // Populate the form when the page loads
    populateForm();
});
