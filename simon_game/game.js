// setting the variable needed
var buttonColors = ['red', 'blue', 'green', 'yellow'];
var gamePattern = []; // array to keep track of the pattern game creates
var userClickedPattern = []; // array to keep track of the player clicks
var gameStarted = 0; // to enable the "press a key to start the game" fetaure
var level = 0; // initial level

// start the game when the even keypress on the "document" occurs
$(document).keypress(function () {
  if (gameStarted === 0) {
    $('#level-title').text('Level ' + level);
    nextSequence(); // starting the game
    gameStarted = 1; // to disable "press a key to start"
  }
});

function nextSequence() {
  userClickedPattern = [];
  level++;
  $('#level-title').text('Level ' + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $('#' + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
  console.log(randomChosenColor);
}

// flash animation for the button on selection

$('.btn').click(function (event) {
  var userChosenColour = event.target.id;
  userClickedPattern.push(userChosenColour);
  // console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

function playSound(color) {
  var buttonAudio = new Audio('sounds/' + color + '.mp3');
  buttonAudio.play();
}

function animatePress(currentColor) {
  $('.' + currentColor).addClass('pressed');

  setTimeout(function () {
    $('.' + currentColor).removeClass('pressed');
  }, 100);
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound('wrong');
    $('#level-title').text('Game Over, Press Any Key to Restart');
    $('.body').addClass('game-over');
    setTimeout(function () {
      $('.body').removeClass('game-over');
    }, 200);
    startOver();
  }
}

function startOver() {
  level = 0;
  gameStarted = 0;
  gamePattern = [];
}
