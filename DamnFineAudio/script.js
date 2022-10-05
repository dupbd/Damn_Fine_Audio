//FADE IN
var opacity = 0;
        var intervalID = 0;
        window.onload = fadeIn;
  
        function fadeIn() {
            setInterval(show, 60);
        }
  
        function show() {
            var body = document.getElementById("body");
            opacity = Number(window.getComputedStyle(body)
                             .getPropertyValue("opacity"));
            if (opacity < 1) {
                opacity = opacity + 0.05;
                body.style.opacity = opacity
            } else {
                clearInterval(intervalID);
            }
        }

//Submit button
function thanks() {
    document.getElementById("thanks").innerHTML = "Thanks for booking! We will be in touch shortly.";
  }        