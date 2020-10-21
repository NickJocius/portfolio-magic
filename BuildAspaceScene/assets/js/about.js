"use strict";
/*
* Name: Nick Jocius
* Intermediate Web
* Purpose: about.js for MVC coding07 assignment
* Date: 10/17/2020
*/



// function to test valid email format
function validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// ajax call to send data
function sendData(name, email, comment, rating) {

    $.ajax({
        url: 'Contact/ajaxRequestPost',
        type: 'POST',
        data: { name: name, email: email, rating: rating, comment: comment },
        success: function (val) {
            console.log(val);
            if (val === 'feedback submitted') {
                clearForm();
                let msg = "Successful Submission";
                let successArr = ["Thank you for your submission!", name, email]
                showModal(msg, successArr);

            } else if (val === "error") {
                clearForm();
                let msg = "Submission Error!";
                showModal(msg);
            }
        },
        error: function () {
            clearForm();
            let msg = "Form not Submitted!";
            showModal(msg);

        }
    });

    return;

}

// validation function
function validate() {
    let errors = [];

    //get the strings from the text boxes and trim them
    let name = $('#name').val().trim();
    let email = $('#email').val().trim();
    let rating = $('#rating').val().trim();
    let comment = $('#comment').val().trim();

    //put the trimmed versions back into the form for good user experience (UX)
    $('#name').val(name);
    $('#email').val(email);
    $('#rating').val(rating);
    $('#comment').val(comment);

    let ratingInt = parseInt(rating);

    //test the strings from the form and store the error messages
    if (name === "") {
        errors.push("Name cannot be empty.");
    }

    if (email === "") {
        errors.push("Email cannot be empty.");

    } else if (!validateEmail(email)) {
        errors.push("Not a valid email.");
    }

    if (comment === "") {
        errors.push("Comment cannot be empty.");
    }

    if (rating === "") {
        errors.push("Rating field cannot be empty.");
    }
    if (ratingInt > 10) {
        errors.push("Not a valid rating.");
    }

    if (errors && errors.length === 0) {
        console.log("Calling ajax");
        sendData(name, email, comment, rating);

    } else {
        console.log(errors);
        let msg = "Form Error!";
        showModal(msg, errors);
    }
    return;
}

// clear button function
function clearForm() {
    $('#name').val('');
    $('#email').val('');
    $('#comment').val('');
    $('#rating').val('');
    $('#text').val('');
    $('#clear').trigger('blur');
}

// clear modal errors
function clearModal() {
    $("#myModal").on('hidden.bs.modal', function () {
        $("#msg").empty();
    });
}

// show errors on modal
function showModal(msg, ...errors) {
    $(".modal-title").html(msg);

    $.each(...errors, function (index, err) {
        $("#msg").append(`<li>${err}</li>`)
    });

    $("#myModal").modal("show");
}


$(document).ready(function () {

    // Clear button event handler
    $("#clear").on('click', function () {
        clearForm();
    });

    clearModal();

    // submit button handler
    $("#send").on('click', function () {
        validate();
    });

});
