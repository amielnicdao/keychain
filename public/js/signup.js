//On click of "Login" button
$("#submitBtn").on("click", function (event) {
    event.preventDefault();

    var newUser = {
        name: $("#username")
            .val()
            .trim(),
        password: $("#password")
            .val()
            .trim()
    };

    // Send the POST request.
    $.ajax("/signup", {
        type: "POST",
        data: JSON.stringify(newUser),
        dataType: "json",
        contentType: "application/json"
    }).then(function () {
        // Reload the page to get the updated list
        location.reload();
    });
});