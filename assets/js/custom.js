// /* Write here your custom javascript codes *//

/* Open */
function openNav() {
    document.getElementById("responsiveNavbar").style.height = "100%";
    console.log("hello");
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("responsiveNavbar").style.height = "0%";
  }

  function SwapImage(){
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),

        h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),

        Huntington1Cropped = document.getElementById('Huntington1Cropped');
        Huntington3Cropped = document.getElementById('Huntington3Cropped');

    // use conditionals to decide which image to show
    if(w < 420 && h < 815)
    {
      Huntington1Cropped.style.backgroundImage = "url('assets/img/General/Huntington1Cropped.jpg')";

      Huntington3Cropped.style.backgroundImage = "url('assets/img/General/Huntington3Cropped.jpg')";
    }

    if(w > 420 && h > 815)
    {
      Huntington1Cropped.style.backgroundImage = "url('assets/img/General/Huntington1.jpg')";

      Huntington3Cropped.style.backgroundImage = "url('assets/img/General/Huntington3.jpg')";
    }
}

SwapImage();

$(window).resize(function() {
  SwapImage();
});