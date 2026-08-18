// Get the admission form
const admissionForm = document.getElementById("admissionForm");

// Get confirmation section
const confirmation = document.getElementById("confirmation");

// Get elements where submitted details will be displayed
const applicationId = document.getElementById("applicationId");
const confirmName = document.getElementById("confirmName");
const confirmCourse = document.getElementById("confirmCourse");
const confirmEmail = document.getElementById("confirmEmail");

// Handle form submission
admissionForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get values entered by the student
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;

    // Generate a simple application ID
    const randomNumber =
        Math.floor(1000 + Math.random() * 9000);

    const generatedId =
        "ADM2026-" + randomNumber;

    // Display submitted information
    applicationId.textContent = generatedId;
    confirmName.textContent = name;
    confirmCourse.textContent = course;
    confirmEmail.textContent = email;

    // Show confirmation message
    confirmation.style.display = "block";

    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // Hide the form after submission
    admissionForm.style.display = "none";

});


// Submit another application
document.getElementById("newApplication")
    .addEventListener("click", function() {

        // Clear all form fields
        admissionForm.reset();

        // Hide confirmation message
        confirmation.style.display = "none";

        // Show the form again
        admissionForm.style.display = "block";

        // Scroll back to the form
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });