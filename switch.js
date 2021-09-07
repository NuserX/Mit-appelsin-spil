/*
Alt hvad der er skrevet i denne fil (switch.js) er ting jeg mener,
der kunne have været lavet på en bedre måde.

Jeg har arbejdet på at løse nogle af funktionerne og switch-statementsne, 
men er kun kommet frem til halve løsninger,
der har ødelagt spillet på den ene eller anden måde.
*/

// Cutscenes
function cutscene() {
    if (msgCounter === 0) {
        fill(0);
        textSize(46);
        text("Objective: Reach the nether",width/2, height/3);
        setTimeout(() => {
            text("Task 1: Gather food to enter a cave",width/2, height/2); 
            setTimeout(() => {
                msgCounter = 1; 
            }, 2000);
        }, 2000);
    } else if (msgCounter === 2) {
        setTimeout(() => {
            fill(255);
            textSize(46);
            text("Task 2: Gather enough iron to make a bucket",width/2, height/2); 
            setTimeout(() => {
                msgCounter = 3; 
            }, 4000);
        }, 1000);
    } else if (msgCounter === 4) {
        setTimeout(() => {
            fill(255);
            textSize(46);
            text("Task 3: Gather diamonds to make a Pickaxe",width/2, height/2);
            setTimeout(() => {
                msgCounter = 5; 
            }, 4000);
        }, 1000);
    } else if (msgCounter === 6) {
        setTimeout(() => {
            fill(255);
            textSize(46);
            text("Task 4: Mine enough obsidian to make a portal",width/2, height/2);
            setTimeout(() => {
                msgCounter = 7; 
            }, 4000);
        }, 1000);
    } else if (msgCounter === 8) {
        setTimeout(() => {
            fill(255);
            textSize(46);
            text("You've reached the nether!",width/2, height/2);
            setTimeout(() => {
                msgCounter = 9; 
            }, 4000);
        }, 1000);
    }
}


// Change background function
function customFucntion() {            
        if (playerObsidianCounter >= 14) {
            background(0)
            if (msgCounter == 7) {
                msgCounter = 8;
            }
        } else if (playerOne == null && playerTwoPickaxe == true) {
            background(imgBackroundObsidian);
            if (msgCounter == 5) {
                msgCounter = 6;
            }
        } else if (playerTwo == null && playerOnePickaxe == true) {
            background(imgBackroundObsidian);
            if (msgCounter == 5) {
                msgCounter = 6;
            }
        } else if (playerOnePickaxe == true && playerTwoPickaxe == true) {
            background(imgBackroundObsidian);
            if (msgCounter == 5) {
                msgCounter = 6;
            }
        } else if (playerOne == null && playerTwoBucket == true) {
            background(imgBackgroundDeepCave);
            if (msgCounter == 3) {
                msgCounter = 4;
            }
        } else if (playerTwo == null && playerOneBucket == true) {
            background(imgBackgroundDeepCave);
            if (msgCounter == 3) {
                msgCounter = 4;
            }
        } else if (playerOneBucket == true && playerTwoBucket == true) {
            background(imgBackgroundDeepCave);
            if (msgCounter == 3) {
                msgCounter = 4;
            }
        } else if (scorePlayerOne >= 10 && scorePlayerTwo >= 10) {
            background(imgBackgroundCave);
            if (msgCounter == 1) {
                msgCounter = 2;
            }
        } else {
            background(imgBackground);
        }

    
}

// Check if player is dead
function checkPlayerLives() {
    if (playerOneLives <= 0 ) {
        playerOne = null;
    } 
    if (playerTwoLives <= 0){
        playerTwo = null;
    }
}

// Check who has the higest score
function winner() {
    if (scorePlayerOne > scorePlayerTwo) {
        victor = "Player 1";
        victorScore = scorePlayerOne;
    } else if (scorePlayerOne < scorePlayerTwo) {
        victor = "Player 2";
        victorScore = scorePlayerTwo;
    } else if (scorePlayerOne == scorePlayerTwo) {
        winnerErrorMsg = true;
    }
}


// First player life-meter changes
function playerOneLivesChange() {
    switch (playerOneLives) {
        case 5:
            image(heart, width-1230,15,30,30);
            image(heart, width-1199,15,30,30);
            image(heart, width-1168,15,30,30);
            image(heart, width-1137,15,30,30);
            image(heart, width-1106,15,30,30);
            break;
        case 4:
            image(heart, width-1230,15,30,30);
            image(heart, width-1199,15,30,30);
            image(heart, width-1168,15,30,30);
            image(heart, width-1137,15,30,30);
            image(damage, width-1106,15,30,30);
            break;
        case 3:
            image(heart, width-1230,15,30,30);
            image(heart, width-1199,15,30,30);
            image(heart, width-1168,15,30,30);
            image(damage, width-1137,15,30,30);
            image(damage, width-1106,15,30,30);
            break;
        case 2:
            image(heart, width-1230,15,30,30);
            image(heart, width-1199,15,30,30);
            image(damage, width-1168,15,30,30);
            image(damage, width-1137,15,30,30);
            image(damage, width-1106,15,30,30);
            break;
        case 1:
            image(heart, width-1230,15,30,30);
            image(damage, width-1199,15,30,30);
            image(damage, width-1168,15,30,30);
            image(damage, width-1137,15,30,30);
            image(damage, width-1106,15,30,30);
            break;
        default:
            if (playerOneLives <= 0) {
                image(damage, width-1230,15,30,30);
                image(damage, width-1199,15,30,30);
                image(damage, width-1168,15,30,30);
                image(damage, width-1137,15,30,30);
                image(damage, width-1106,15,30,30);
            } else {
                text("There was an error", width-820,30);
            }
            break;
    }
}

// Second player life-meter changes
function playerTwoLivesChange() {
    switch (playerTwoLives) {
        case 5:
            image(heart, width-169,15,30,30);
            image(heart, width-138,15,30,30);
            image(heart, width-107,15,30,30);
            image(heart, width-76,15,30,30);
            image(heart, width-45,15,30,30);
            break;
        case 4:
            image(heart, width-169,15,30,30);
            image(heart, width-138,15,30,30);
            image(heart, width-107,15,30,30);
            image(heart, width-76,15,30,30);
            image(damage, width-45,15,30,30);
            break;
        case 3:
            image(heart, width-169,15,30,30);
            image(heart, width-138,15,30,30);
            image(heart, width-107,15,30,30);
            image(damage, width-76,15,30,30);
            image(damage, width-45,15,30,30);
            break;
        case 2:
            image(heart, width-169,15,30,30);
            image(heart, width-138,15,30,30);
            image(damage, width-107,15,30,30);
            image(damage, width-76,15,30,30);
            image(damage, width-45,15,30,30);
            break;
        case 1:
            image(heart, width-169,15,30,30);
            image(damage, width-138,15,30,30);
            image(damage, width-107,15,30,30);
            image(damage, width-76,15,30,30);
            image(damage, width-45,15,30,30);
            break;
        default:
            if (playerTwoLives <= 0) {
                image(damage, width-169,15,30,30);
                image(damage, width-138,15,30,30);
                image(damage, width-107,15,30,30);
                image(damage, width-76,15,30,30);
                image(damage, width-45,15,30,30);
            } else {
                text("There was an error", width-320,30);
            }
            break;
    }
}

// Different orange skins
function appelsinerImages() {
    switch (ranNum) {
        case 1:
            image(apple, x, y, 60, 50);
            break;
        case 2:
            image(pie, x,  y, 60, 50);
            break;
        case 3:
            image(egg, x, y, 60, 50);
            break;
        case 4:
            image(carrot, x, y, 60, 50);
            break;

        case 5:
            image(coal, x, y, 60, 50);
            break;
        case 6:
            image(flint, x, y, 60, 50);
            break;
        case 7:
            image(copper, x, y, 60, 50);
            break;
        case 8:
            image(iron, x, y, 60, 50);
            break;
        case 9:
        case 10:
            image(bat, x, y, 60, 50);
            break;
        case 11:
        case 12:
            image(arrow, x, y, 60, 50);
            break;

        case 13:
        case 14:
            image(redstone, x, y, 60, 50);
            break;
        case 15:
        case 16:
            image(lapiz, x, y, 60, 50);
            break;
        case 17:
        case 18:
            image(gold, x, y, 60, 50);              
            break;
        case 19:
        case 20:
            image(emerald, x, y, 60, 50);
            break;
        case 21:
        case 22:
            image(diamond, x, y, 60, 50);
            break;
        case 23:
            image(obsidian, x, y, 60, 50);
            break;
        case 99: 
            image(pickaxe, x, y, 60, 50);
            break;
        case 100:
            image(bucket, x, y, 60, 50);
            break;
        default:
            image(cake, x, y, 60, 50);
            break;
    }

}

// First player points and lives regulator
function playerOnePoints() {
    switch (ranNum) {
        case 8:
            chickenWalkingSound1.play();
            playerIronCounter += 1;
            scorePlayerOne += 1;
            break;
        case 9:
        case 10:
        case 11:
        case 12:
            chickenDeathSound1.play();
            playerOneLives -= 1;
            scorePlayerOne -= 1;
            break;
        
        case 21:
        case 22:
            chickenWalkingSound1.play();
            playerDiamondCounter += 1;
            scorePlayerOne += 1;
            break;
        case 23:
        case 24:
        case 25:
            chickenWalkingSound1.play();
            playerObsidianCounter += 1;
            scorePlayerOne += 1;
            break;
        case 99:
            chickenWalkingSound1.play();
            playerOnePickaxe = true;
            scorePlayerOne += 1;
            break;
        case 100:
            playerOneBucket = true;
            scorePlayerOne += 1;
            break;        
        default:
            chickenWalkingSound1.play();
            scorePlayerOne += 1;
            break;
    }
}

// Second player points and lives regulator
function playerTwoPoints() {
    switch (ranNum) {
        case 8:
            rabbitWalkingSound.play();
            playerIronCounter += 1;
            scorePlayerTwo += 1;
            break;
        case 9:
        case 10:
        case 11:
        case 12:
            rabbitDeathSound1.play();
            playerTwoLives -= 1;
            scorePlayerTwo -= 1;
            break;
        case 21:
        case 22:
            rabbitWalkingSound.play();
            playerDiamondCounter += 1;
            scorePlayerTwo += 1;
            break;
        case 23:
        case 24:
        case 25:
            rabbitWalkingSound.play();
            playerObsidianCounter += 1;
            scorePlayerTwo += 1;
        case 99:
            rabbitWalkingSound.play();
            playerTwoPickaxe = true;
            scorePlayerTwo += 1;
            break;
        case 100:
            playerTwoBucket = true;
            scorePlayerTwo += 1;
            break
        default:
            rabbitWalkingSound.play();
            scorePlayerTwo += 1;
            break;
    }
}