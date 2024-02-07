function validateRequiredFields(fields) {
    for (const field of fields) {
        if (!field.value.trim()) {
            return false; 
        }
    }
    return true; 
}


function validateRegistrationForm() {
    const firstNameField = document.getElementById('first-name');
    const lastNameField = document.getElementById('last-name');
    const emailField = document.getElementById('email');
    const phoneField = document.getElementById('phone');
    const dateOfHireField = document.getElementById('date-of-hire');
    const addressField = document.getElementById('address');
    const departmentField = document.getElementById('department');
    const roleField = document.getElementById('role');
    const passwordField = document.getElementById('password');

    
    const requiredFields = [firstNameField, lastNameField, emailField, phoneField, dateOfHireField, addressField, departmentField, roleField, passwordField];
    if (!validateRequiredFields(requiredFields)) {
        alert('Please fill out all required fields.');
        return false;
    }

  
    if (firstNameField.value.length < 3 || lastNameField.value.length < 3) {
        alert('First name and last name must be at least 3 characters long.');
        return false;
    }

   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
        alert('Please enter a valid email address.');
        return false;
    }

    
    const numericPhoneRegex = /^[0-9]+$/;
    const lengthPhoneRegex = /^\d{10}$/;

    if (!numericPhoneRegex.test(phoneField.value)) {
        alert('Please enter only numeric characters for the phone number.');
        return false;
    }

    if (!lengthPhoneRegex.test(phoneField.value)) {
        alert('Please enter a valid 10-digit phone number.');
        return false;
    }

  
    const currentDate = new Date();
    const selectedDate = new Date(dateOfHireField.value);
    if (selectedDate > currentDate) {
        alert('Date of hire cannot be in the future.');
        return false;
    }

    
    const passwordRegex = /^(?=.*[0-9]).{6,}$/;
    if (!passwordRegex.test(passwordField.value)) {
        alert('Password must be at least 6 characters long and contain at least one number.');
        return false;
    }

   
    alert('Registration form submitted successfully!');
    return true;
}


function validateLoginForm() {
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');

    
    const requiredFields = [emailField, passwordField];
    if (!validateRequiredFields(requiredFields)) {
        alert('Please fill out all required fields.');
        return false;
    }

    

    
    alert('Login form submitted successfully!');
    return true;
}
