function SwapImage(){
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),

        h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
        
        Huntington3Cropped = document.getElementById('Huntington3Cropped');

    // use conditionals to decide which image to show
    if(w < 420 && h < 815)
    {

      Huntington3Cropped.style.backgroundImage = "url('assets/img/General/Huntington3Cropped.jpg')";
    }

    if(w > 420 && h > 815)
    {

      Huntington3Cropped.style.backgroundImage = "url('assets/img/General/Huntington3.jpg')";
    }
}

SwapImage();

$(window).resize(function() {
  SwapImage();
});