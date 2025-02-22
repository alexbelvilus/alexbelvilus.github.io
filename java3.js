document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevents the default form submission
  
  // Form data
  let formData = new FormData(this);

  // Show loading or success/error messages
  const successMessage = document.querySelector('.success-message');
  const errorMessage = document.querySelector('.error-message');
  
  successMessage.style.display = 'none';
  errorMessage.style.display = 'none';

  // Use fetch API to send the form data to Formspree
  fetch(this.action, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      successMessage.style.display = 'block';
      this.reset(); // Reset form fields after successful submission
    } else {
      throw new Error('Something went wrong. Please try again later.');
    }
  })
  .catch(error => {
    errorMessage.textContent = `Error: ${error.message}`;
    errorMessage.style.display = 'block';
  });
});
