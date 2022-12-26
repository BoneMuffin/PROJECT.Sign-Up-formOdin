// Function to check Whether both passwords
    // is same or not.

function checkPassword(form) {
        password == form.password.value;
        password2 == form.password2.value;

    // If password not entered
        if (password == '')
        alert ("Please enter Password");

        // If confirm password not entered
        else if (password2 == '')
        alert ("Please confirm password");
    
    // If Not same return False.    
    else if (password != password2) {
        alert ("\nPassword did not match: Please try again.")
        return false;
    }
        
    // If same return True.
    else {
        alert("Password Match: Welcome to Santa Puerca!")
        return true;
        }
} 

