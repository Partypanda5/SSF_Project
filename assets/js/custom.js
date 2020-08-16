// /* Write here your custom javascript codes *//

const acceptButton = document.querySelector("#accept");
const notification = document.querySelector(".notification");

/* Open */
function openNav() {
    document.getElementById("responsiveNavbar").style.height = "100%";
    console.log("hello");
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("responsiveNavbar").style.height = "0%";
  }

  acceptButton.addEventListener("click", function()
  {
    notification.style.display = "none";
  });