document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("form");
    forms.forEach(function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Transmission received! Thank you for supporting KINETIX PH // SDG 9.");
        form.reset();
      });
    });
  });
  