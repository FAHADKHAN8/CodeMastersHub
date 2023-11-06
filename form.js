
function clearErrors() {
    const errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

function seterror(id, error) {
    const element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm() {
    let returnval = true;
    clearErrors();

    const name = document.forms['myForm']["fname"].value;
    const email = document.forms['myForm']["femail"].value;
    const phone = document.forms['myForm']["fphone"].value;
    const position = document.forms['myForm']["fposition"].value;
    const cv = document.forms['myForm']["fcv"].value;
    const reason = document.forms['myForm']["freason"].value;

    if (name.length < 5) {
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length === 0) {
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    if (email.length > 50) {
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    if (phone.length !== 10) {
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }

    if (position === "") {
        seterror("position", "*Select a position");
        returnval = false;
    }

    if (cv === "") {
        seterror("cv", "*Upload your CV");
        returnval = false;
    }

    if (reason.length < 100) {
        seterror("reason", "*Provide a reason of at least 100 characters");
        returnval = false;
    }

    return returnval;
}
