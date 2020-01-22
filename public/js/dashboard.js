gsap.to("#navbar-brand", { duration: 1, x: 300 });

$(document).ready(function () {
    var userData = new Object();
    const currentId = localStorage.getItem("id")
    $("#inputSubmit").on("click", function (event) {
        event.preventDefault();

        var newWebsite = {
            user_name: $("#inputUserNameAdd")
                .val()
                .trim(),
            password: $("#inputPasswordAdd")
                .val()
                .trim(),
            type: $("#inputWebsiteAdd")
                .val()
                .trim()
        };

        $.ajax("/createAccount/" + currentId, {
            type: "POST",
            data: JSON.stringify(newWebsite),
            dataType: "json",
            contentType: "application/json"
        }).then(function () {
            console.log("created new website");
            location.reload();
        });
    });

    $("#submit").on("click", function (event) {
        event.preventDefault();
        const username = $("#input").val();
        const pass = $("#inputPassword").val();
        const type = $("#hiddenType").val();
        const id = $("#hiddenID").val();
        var updatedAcct = {
            user_name: username,
            password: pass
        }

        $.ajax({
            url: "/dashboard/" + id,
            type: "PUT",
            data: JSON.stringify(updatedAcct),
            dataType: "json",
            contentType: "application/json"
        }).then(function (data) {
            location.reload();
        });
    });

    $.ajax(`/displayOne/?id=${currentId}`, {
        type: "GET",
    }).then(function (data) {
        userData = data;
        var accts = data;
        var len = accts.passwords.length;
        var accts_elem = $("#accounts");
        for (var i = 0; i < userData.passwords.length; i++) {

            var webAccount = $("<a>");
            webAccount.addClass("nav-link");
            webAccount.attr("id", userData.passwords[i].type);
            webAccount.attr("data-toggle", "pill");
            webAccount.attr("role", "tab");
            webAccount.text(userData.passwords[i].type);

            const name = userData.passwords[i].user_name;
            const pass = userData.passwords[i].password;
            const type = userData.passwords[i].type;
            const id = userData.passwords[i].id;
            webAccount.on("click", function () {
                document.getElementById("input").value = name;
                document.getElementById("inputPassword").value = pass;
                document.getElementById("inputSite").value = type;
                document.getElementById("hiddenType").value = type;
                $("#deleteBtn").attr("siteId", id);
                document.getElementById("hiddenID").value = id;
            });

            var deleteButton = $("<img>");
            deleteButton.addClass("delete");
            deleteButton.attr("src", "../images/trash.png");
            deleteButton.attr("siteId", userData.passwords[i].id);
            webAccount.append(deleteButton);
            $("#v-pills-tab").append(webAccount);
        };

    });

    $("#deleteBtn").on("click", function () {
        event.preventDefault();

        var websiteId = $(this).attr("siteId");
        $(this).parent().remove();
        $.ajax({
            url: "/dashboard/" + websiteId,
            type: "DELETE"
        }).then(function (data) {
            location.reload();
        });
    });

    $("#signOut").on("click", function (event) {
        event.preventDefault();
        localStorage.clear();
        window.location.replace("/index");
    });
});