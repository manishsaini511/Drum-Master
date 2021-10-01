
var numberOFDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0 ; i<numberOFDrumButtons ; i++) { 

    document.querySelectorAll(".drum") [i].addEventListener("click", function () {

        var buttonInnerHtml = this.innerHTML;
        
        switch (buttonInnerHtml) {
            case "w": 
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;

            case "a":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play(); 
            break;
            
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3")
                tom3.play();
            default:
                break;
        }

    } );
}

// var audio = new Audio("sounds/tom-1.mp3")
//           audio.play();

