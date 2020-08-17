const acceptButton = document.querySelector("#accept");
const notification = document.querySelector(".notification");

acceptButton.addEventListener("click", function()
{
  notification.style.display = "none";
});