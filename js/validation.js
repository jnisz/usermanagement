function ValidateAll(name, email, address, gender, photo, dob, psw, rpsw) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var letters = /^[A-Za-z]+$/;
    if (!name == null && !email == null && !address==null && !gender == null && !photo == null && !dob == null && !psw == null && !rpsw == null) {
        if (!input.value.match(validRegex)) {
            alert("Invalid email address!");
            document.register1.email.focus();
            return false;

        } 
        else {

            return true;

        }
    }
    else{
        alert("empty feilds");
            return false;
    }

}