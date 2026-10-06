// Register button from Event Cards

function registerEvent(eventName) {

    document.getElementById("eventName").value = eventName;

    document.getElementById("register").scrollIntoView({
        behavior: "smooth"
    });
}


// Registration Form

function registerStudent(event) {

    event.preventDefault();

    let name = document.getElementById("studentName").value;

    let email = document.getElementById("email").value;

    let department = document.getElementById("department").value;

    let eventName = document.getElementById("eventName").value;


    if (
        name == "" ||
        email == "" ||
        department == "" ||
        eventName == ""
    ) {

        document.getElementById("registration-message").innerText =
            "Please fill all the fields.";

        return;
    }


    document.getElementById("registration-message").innerText =
        "Registration successful for " +
        name +
        " - " +
        eventName;


    document.querySelector("#register form").reset();
}


// Contact Form

function sendMessage(event) {

    event.preventDefault();

    let name = document.getElementById("contactName").value;

    let email = document.getElementById("contactEmail").value;

    let message = document.getElementById("contactMessage").value;


    if (
        name == "" ||
        email == "" ||
        message == ""
    ) {

        document.getElementById("contact-message").innerText =
            "Please fill all the fields.";

        return;
    }


    document.getElementById("contact-message").innerText =
        "Thank you " + name + "! Your message has been sent.";


    document.querySelector("#contact form").reset();
}