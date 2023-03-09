var myCarousel = document.querySelector("#myCarousel");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: true,
  pause: false, //'hover'
  keyboard: true,
  touch: true,
  ride: false,
});

const scrollBtn = document.querySelector(".gototop");
const btnVisibility = () => {
  if (window.scrollY > 400) {
    scrollBtn.style.visibility = "visible";
  } else {
    scrollBtn.style.visibility = "hidden";
  }
};
document.addEventListener("scroll", () => {
  btnVisibility();
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "assets/img/sun.png";
  } else {
    icon.src = "assets/img/moon.png";
  }
};

// var id;
// $("#modalForm").on("show.bs.modal", function (event) {
//   var button = $(event.relatedTarget); //Button that triggered the modal
//   const email = button.data("email"); //need to find the button and get email
//   const nume = button.data("nume"); //need to find the button and get name
//   $(".modal-body #email").val(email);
//   $(".modal-body #name").val(nume);
//   id = button.attr("id");
//   // var datainfo = document.getElementById(id);
//   alert(JSON.stringify(button[0]));
//   // alert(JSON.stringify(datainfo));
// });
// $("#modalForm").on("hidden.bs.modal", function (event) {
//   alert("Modalul s-a inchis");
//   document.getElementById(id).classList.remove("btn-primary");
//   document.getElementById(id).classList.add("btn-success");
// });
var id;
$("#modalForm").on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget); //Button that triggered the modal
      const produs = button.data('name') //need to find the button and get product
      const pret = button.data('price') //need to find the button and get price
      const description = button.data('description');
      $(".modal-header #titleModalLabel").html(produs);
      $(".modal-body #price").html(pret);
      $(".modal-body #description").html(description);
      id = button.attr('id');
      // var datainfo = document.getElementById(id);
      alert(JSON.stringify(button));
      // alert(JSON.stringify(datainfo));


})
$("#modalForm").on('hidden.bs.modal', function (event) {

      // alert('Modalul s-a inchis');
      document.getElementById(id).classList.remove('btn-primary');
      document.getElementById(id).classList.add('btn-info');
})
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
      document.getElementById("navbar_top").classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});

// document.addEventListener("DOMContentLoaded", function(){
//     var myScrollSpy = new bootstrap.ScrollSpy(document.body, {
//         target: "#myNavbar"
//     })
// });

$(document).ready(function () {
  $("body").scrollspy({
    target: "#navbar_top",
  });
});

(function () {
  "use strict";
  const forms = document.querySelectorAll(".requires-validation");
  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
