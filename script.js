function passwordCheck() {
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("passwordConfirm").value;
    const errormsg = document.getElementById("errorMsg");
    console.log("pass is: " + pass + ", confirm is: " + confirm);
    if (pass != confirm) {
        errormsg.style.visibility = 'visible';
    } else {
        errormsg.style.visibility = 'hidden';
    }
};