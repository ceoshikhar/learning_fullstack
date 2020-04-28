function randomNumber1() {
    var randNum1;
    randNum1 = Math.random() * 6 + 1;
    randNum1 = Math.floor(randNum1);
    return randNum1;
}

function randomNumber2() {
    var randNum2;
    randNum2 = Math.random() * 6 + 1;
    randNum2 = Math.floor(randNum2);
    return randNum2;
}

function winner(dice1, dice2) {
    var dice1 = randomNumber1();
    var dice2 = randomNumber2();

    document
        .querySelector(".img1")
        .setAttribute("src", "images/dice" + dice1 + ".png");

    document
        .querySelector(".img2")
        .setAttribute("src", "images/dice" + dice2 + ".png");

    if (dice1 > dice2) {
        document.querySelector(".container h1").innerHTML = "🚩 Player1 Wins!";
    } else if (dice2 > dice1) {
        document.querySelector(".container h1").innerHTML = "Player2 Wins!🚩";
    } else if (dice1 === dice2) {
        document.querySelector(".container h1").innerHTML = "Draw!";
    }
}
