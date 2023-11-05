function clearErrors() {
    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm() {
    var returnval = true;
    clearErrors();

    var name = document.forms['myForm']["fname"].value;
    if (name.length < 5) {
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length === 0) {
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length > 50) {
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length !== 10) {
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }

    var position = document.forms['myForm']["fposition"].value;
    if (position === "") {
        seterror("position", "*Select a position");
        returnval = false;
    }

    var cv = document.forms['myForm']["fcv"].value;
    if (cv === "") {
        seterror("cv", "*Upload your CV");
        returnval = false;
    }

    var reason = document.forms['myForm']["freason"].value;
    if (reason.length < 100) {
        seterror("reason", "*Provide a reason of at least 100 characters");
        returnval = false;
    }

    return returnval;
}
