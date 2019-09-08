function formValidation() {
    let name = document.forms["contact-form"]["name"];
    let email = document.forms["contact-form"]["email"];
    let subject = document.forms["contact-form"]["subject"];
    let message = document.forms["contact-form"]["message"];

    if (name.value == "") {
        window.alert("What are you doing, my dear? C'mon! Enter a name.");
        name.focus();
        return false;
    }

    if (email.value == "") {
        window.alert("What are you doing, my dear? C'mon! Enter an e-mail address.");
        email.focus();
        return false;
    }

    if (email.value.indexOf("@", 0) < 0) {
        window.alert("Please dear, enter a valid e-mail address e.g. example@xyz.com");
        email.focus();
        return false;
    }

    if (email.value.indexOf(".", 0) < email.value.indexOf("@", 0)) {
        window.alert("Please dear, enter a valid e-mail address e.g. example@xyz.com");
        email.focus();
        return false;
    }

    if (subject.value == "") {
        window.alert("What are you doing, my dear? C'mon! Enter a subject for your message.");
        subject.focus();
        return false;
    }

    if (message.value == "") {
        window.alert("What are you doing, my dear? C'mon! Enter a message for me.");
        message.focus();
        return false;
    }

    return true;
}