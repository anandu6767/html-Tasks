// Function to validate the full name input
function validateFullName() {
    const fullName = document.getElementById("full-name");
    const nameError = document.getElementById("name-error");
    nameError.textContent = ""; 
    // Regular expression to check for numeric characters
    const hasNumbers = /\d/;
    if (fullName.value.trim().length < 3) {
        nameError.textContent = "Full Name must be at least 3 characters long.";
        fullName.classList.add("input-error");
        return false;
    } else if (hasNumbers.test(fullName.value.trim())) {
        nameError.textContent = "Full Name cannot contain numbers.";
        fullName.classList.add("input-error");
        return false;
    } else {
        fullName.classList.remove("input-error");
    }
    return true;
}
// Function to validate the date of birth input
function validateDOB() {
    const dob = document.getElementById("dob");
    const dobError = document.getElementById("dob-error");
    dobError.textContent = "";
    // Regular expression to validate the format DD/MM/YYYY
    const dobPattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!dobPattern.test(dob.value.trim())) {
        dobError.textContent = "Please enter a valid date in DD/MM/YYYY format.";
        dob.classList.add("input-error");// Highlight the input field with an error style
        return false;
    }
    // Parse the date and check if it's a future date
    const [day, month, year] = dob.value.trim().split('/');
    const dobDate = new Date(`${year}-${month}-${day}`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (dobDate > today) {
        dobError.textContent = "Date of Birth cannot be a future date.";
        dob.classList.add("input-error");
        return false;
    } else {
        dob.classList.remove("input-error");
    }
    return true;
}
// Function to validate the phone number input
function validatePhone() {
    const phone = document.getElementById("phone");
    const phonePattern = /^[6-9]\d{9}$/;
    const phoneError = document.getElementById("phone-error");
    phoneError.textContent = ""; // Clear any previous error messages
    // Check if the phone number matches the pattern
    if (!phonePattern.test(phone.value.trim())) {
        // If it doesn't match, display an error message and add a red border
        phoneError.textContent = "Please enter a valid phone number"
        phone.classList.add("input-error");
        return false; // Return false indicating validation failure
    } else {
        phone.classList.remove("input-error");
    }
    return true; 
}
// Function to validate the email input
function validateEmail() {
    const email = document.getElementById("email");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const emailError = document.getElementById("email-error");
    emailError.textContent = "";
    if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        email.classList.add("input-error");
        return false;
    } else {
        email.classList.remove("input-error");
    }
    return true;
}
// Function to validate the number of tickets input
function validateTickets() {
    const tickets = document.getElementById("tickets");
    const ticketsError = document.getElementById("tickets-error");
    ticketsError.textContent = ""; 
    // Regular expression to ensure only positive whole numbers are allowed
    const ticketsPattern = /^\d+$/;
    // Check if the input is not a number or less than or equal to 0
    if (!ticketsPattern.test(tickets.value.trim()) || tickets.value.trim() <= 0) {
        ticketsError.textContent = "Please enter a valid number of tickets."; 
        tickets.classList.add("input-error"); 
        return false; 
    } else {
        tickets.classList.remove("input-error");
    }
    return true; // Return true indicating validation success
}
  // Validate gender selection
function validateForm() {
    let isValid = true;
    if (!validateFullName()) isValid = false;
    if (!validateDOB()) isValid = false;
    if (!validatePhone()) isValid = false;
    if (!validateEmail()) isValid = false;
    if (!validateTickets()) isValid = false;
    const genderError = document.getElementById("gender-error");
    const genderMale = document.querySelector('input[name="gender"][value="male"]');
    const genderFemale = document.querySelector('input[name="gender"][value="female"]');
    if (!genderMale.checked && !genderFemale.checked) {
        genderError.textContent = "Please select your gender.";
        isValid = false;
    }
     // Validate source selection
    const sourceError = document.getElementById("source-error");
    const sourceFacebook = document.querySelector('input[name="source"][value="Facebook"]');
    const sourceYoutube = document.querySelector('input[name="source"][value="Youtube"]');
    const sourceInstagram = document.querySelector('input[name="source"][value="Instagram"]');
    const sourceTwitter = document.querySelector('input[name="source"][value="Twitter"]');
    const sourceOthers = document.querySelector('input[name="source"][value="others"]');
    if (!sourceFacebook.checked && !sourceYoutube.checked &&
        !sourceInstagram.checked && !sourceTwitter.checked && !sourceOthers.checked) {
        sourceError.textContent = " cannot be empty.";
        isValid = false;
    }
    //validate payment
    const paymentError = document.getElementById("payment-error");
    const paymentCreditCard = document.querySelector('input[name="payment_method"][value="Credit Card"]');
    const paymentDebitCard = document.querySelector('input[name="payment_method"][value="Debit Card"]');
    const paymentCash = document.querySelector('input[name="payment_method"][value="Cash"]');
    if (!paymentCreditCard.checked && !paymentDebitCard.checked && !paymentCash.checked) {
        paymentError.textContent = "Please select a payment method.";
        isValid = false;
    }
    //agreement checkbox
    const agreementCheckbox = document.querySelector('input[name="agreement"]');
    const agreementError = document.getElementById("agreement-error");
    if (!agreementCheckbox.checked) {
        agreementError.textContent = "You must agree to the terms and conditions.";
        isValid = false; // Set the validation status to false since the checkbox is required
    }
    if (isValid) {
        alert("Validation successful!");
    } else {
        alert("Please correct the errors and try again.");
    }
    return isValid; 
    // Return the overall validation status (true if all fields are valid, false if any field is invalid)
}
