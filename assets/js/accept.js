// const acceptButton = document.querySelector("#accept");
// const notification = document.querySelector(".notification");

// acceptButton.addEventListener("click", function()
// {
//   notification.style.display = "none";
// });

function TermsAndConditions(){
  days=1;
  myDate = new Date();
  myDate.setTime(myDate.getTime()+(days*24*60*60*1000));
  document.cookie = 'TermsAndConditions=Accepted; expires=' + myDate.toGMTString();
}

var cookie = document.cookie.split(';')
   .map(function(x){ return x.trim().split('='); })
   .filter(function(x){ return x[0]==='TermsAndConditions'; })
   .pop();

if(cookie && cookie[1]==='Accepted') {
   $(".notification").hide();
}

$('#accept').on('click', function(){
   TermsAndConditions();
   $(".notification").hide(); 
   return false;
}); 