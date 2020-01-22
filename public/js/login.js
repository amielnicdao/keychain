function doThis(event) {
    const userId = event.target.dataset.id
    localStorage.clear();
    localStorage.setItem("id", userId);
  }

  $(document).ready(function () {

    //display all users
    
    $.ajax("/display", {
      type: "GET"
    }).then(function (data) {

      var names = data;
      var len = names.users.length;
      var names_elem = $("#names");

      for (var i = 0; i < len; i++) {
        names_elem.append(
          "<div class='col-4 text-center'> <div class='card border-success mb-3' style='max-width: 18rem;'> <div class='card-body text-success'><h5 class='card-title'>"
          + names.users[i].name + "</h5><p class='card-text'><a onclick='doThis(event)' href='/dashboard' role='button' data-id='" + names.users[i].id + "' class='btn btn-success loginBtn'>Log In!</a></p></div></div>"
        );
      }

      gsap.from(".card", {
        duration: 2,
        scale: 0.5,
        opacity: 0,
        delay: 0.5,
        stagger: 0.2,
        ease: "elastic",
        force3D: true
      });

      document.querySelectorAll(".loginBtn").forEach(function (box) {
        box.addEventListener("click", function () {
          gsap.to(".loginBtn", {
            duration: 0.5,
            opacity: 0,
            y: -100,
            stagger: 0.1,
            ease: "back.in"
          });
        });
      });
    });
  });