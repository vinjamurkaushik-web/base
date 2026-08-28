const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError =
        document.getElementById("confirmPasswordError");

    const successMessage = document.getElementById("successMessage");

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    successMessage.textContent = "";

    // Remove previous invalid styles
    document.querySelectorAll("input").forEach(input => {
        input.classList.remove("invalid");
    });

    let isValid = true;

    // Name validation
    if (name.length < 3) {
        nameError.textContent = "Name must contain at least 3 characters.";
        document.getElementById("name").classList.add("invalid");
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        document.getElementById("email").classList.add("invalid");
        isValid = false;
    }

    // Password validation
    if (password.length < 8) {
        passwordError.textContent =
            "Password must contain at least 8 characters.";
        document.getElementById("password").classList.add("invalid");
        isValid = false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        confirmPasswordError.textContent =
            "Passwords do not match.";
        document.getElementById("confirmPassword").classList.add("invalid");
        isValid = false;
    }

    // Final result
    if (isValid) {
        successMessage.textContent =
            "Registration successful!";

        form.reset();
    }
});
