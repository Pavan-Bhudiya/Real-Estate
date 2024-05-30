function submitFeedback() {
  const feedbackText = document.getElementById("feedbackText").value;
  const confirmationMessage = document.getElementById("confirmationMessage");

  // Check if feedback is provided
  if (feedbackText.trim() !== "") {
    // Simulate sending feedback to the server (replace with actual server-side logic)
    // For now, just display a confirmation message
    confirmationMessage.textContent = "Thank you for your feedback!";

    // Optional: Clear the form after submission
    document.getElementById("feedbackForm").reset();
  } else {
    confirmationMessage.textContent =
      "Please provide feedback before submitting.";
  }
}

// Get references to form elements and messages
const contactForm = document.querySelector(
  'form[action="process_contact_form.php"]'
);
const contactFormMessage = document.getElementById("contact-form-message");
const appointmentForm = document.querySelector(
  'form[action="process_appointment_form.php"]'
);
const appointmentFormMessage = document.getElementById(
  "appointment-form-message"
);

// Add event listeners to forms
contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  // Perform any additional actions if needed (e.g., form validation)
  // Display the confirmation message
  contactFormMessage.style.display = "block";
});

appointmentForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  // Perform any additional actions if needed (e.g., form validation)
  // Display the confirmation message
  appointmentFormMessage.style.display = "block";
});
