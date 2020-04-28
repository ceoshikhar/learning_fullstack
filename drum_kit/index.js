// calculate how many drums are there in the drum kit class named "drum"
var numberOfDrums = document.querySelectorAll(".drum").length;

// function to find which button was clicked
for (var i = 0; i < numberOfDrums; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function (){
		
		var buttonClicked = this.innerHTML;
		playSound(buttonClicked);
		buttonAnimation(buttonClicked);

        });
}

// function to find which key was pressed
document.addEventListener("keydown", function(event) {
	playSound(event.key);
	buttonAnimation(event.key);
})

// function to play the sounds for each button or keypress 
function playSound( key ) {
	switch ( key ) {
		case "w":
			var tom1  = new Audio("sounds/tom-1.mp3");
			tom1.play();
		break;
		
		case "a":
			var tom2  = new Audio("sounds/tom-2.mp3");
			tom2.play();
		break;

		case "s":
			var tom3  = new Audio("sounds/tom-3.mp3");
			tom3.play();
		break;

		case "d":
			var tom4  = new Audio("sounds/tom-4.mp3");
			tom4.play();
		break;			

		case "j":
			var snare  = new Audio("sounds/snare.mp3");
			snare.play();
		break;

		case "k":
			var kick  = new Audio("sounds/kick-bass.mp3");
			kick.play();
		break

		case "l":
			var crash  = new Audio("sounds/crash.mp3");
			crash.play();
		break

		default: 
			console.log(buttonClicked);
		}
}

// function to add an animation to the button by adding a class that has CSS 
// properties to enable the buttonPressed animation, to the list of classes for
// the button element.
function buttonAnimation( currentKey ) {
	var activeButton = document.querySelector( "." + currentKey);
	activeButton.classList.add("pressed");
	
	// function to wait 100ms before exectuing the function inside setTimeout()
	setTimeout( function() {
		activeButton.classList.remove("pressed");
	}, 100)
}