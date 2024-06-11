function validateForm() {
   
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const gender = document.getElementById("gender").checked;
    const photo = document.getElementById("photo").value;
    const dob = document.getElementById("dob").value;
    const psw = document.getElementById("psw").value;
    const rpsw = document.getElementById("rpsw").value;
   
   
    
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const addressError = document.getElementById("address-error");
    const genderError = document.getElementById("gender-error");
    const photoError = document.getElementById("photo-error");
    const dobError = document.getElementById("dob-error");
    const pswError = document.getElementById("psw-error");
    const rpswError = document.getElementById("rpsw-error");


     nameError.textContent = "";
     emailError.textContent = "";
     addressError.textContent = "";
     genderError.textContent = "";
     photoError.textContent = "";
     dobError.textContent = "";
     pswError.textContent = "";
     rpswError.textContent = "";
    

    nameError.textContent = "";
    addressError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    subjectError.textContent = "";
    agreeError.textContent = "";

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameError.textContent =
            "Please enter your name properly.";
        isValid = false;
    }

    if (address === "") {
        addressError.textContent =
            "Please enter your address.";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    if (password === "" || password.length < 6) {
        passwordError.textContent =
            "Please enter a password with at least 6 characters.";
        isValid = false;
    }

    if (subject === "") {
        subjectError.textContent =
            "Please select your course.";
        isValid = false;
    }

    if (!agree) {
        agreeError.textContent =
            "Please agree to the above information.";
        isValid = false;
    }

    return isValid;
}