

// Appelsinen
let x = 0; 
let y = 500;
const rad = 20;
let xspeed = 4;
let yspeed = -10;
let newspeed;
const grav = 0.1;

// Image
let imgPlayerone;
let imgPlayertwo;

let heart;
let damage;

    // Overworld
    let imgBackground;
    let pie;
    let apple;
    let cake;
    let bat;
    let fireball;
    let egg;
    let arrow;
    let carrot;
    
    // Cave 
    let imgBackgroundCave;
    let coal;
    let flint
    let copper;
    let iron;
    let redstone;
    let lapiz;
    

    // Obsidian
    let imgBackroundObsidian;
    let emerald;
    let gold;
    let diamond;
    let obsidian;

    //Nether
    let imgBackgroundNether;


    let bucket;
    let pickaxe;
    // Øvrige

let victor;
let missed = 0;
let tid = 50;
let tidTæller = 40 + tid + Math.random() * tid;

let spilIgang = true;
let ranNum;

let msgCounter = 0;

let obsidianCounter = 0;


// Player objects
let playerOne;
let playerTwo;

let playerOneLives = 5;
let playerTwoLives = 5;


let scorePlayerOne = 0;
let scorePlayerTwo = 0;

let playerIronCounter = 0;
let playerDiamondCounter = 0;
let playerObsidianCounter = 0;

let playerOneBucket = false;
let playerTwoBucket = false;

let playerOnePickaxe = false;
let playerTwoPickaxe = false;




function preload() {
    // Player
    imgPlayerone = loadImage('assets/player/play1.png');
    imgPlayertwo = loadImage('assets/player/play2.png');

    heart = loadImage('assets/heart.png');
    damage = loadImage('assets/damage.png');

    // Overworld
    imgBackground = loadImage('assets/overworld/background.png');
    pie = loadImage('assets/overworld/pie.png');
    apple = loadImage('assets/overworld/apple.png');
    cake = loadImage('assets/overworld/cake.png');
    egg = loadImage('assets/overworld/egg.png');
    carrot = loadImage('assets/overworld/carrot.png');


    // Cave 
    imgBackgroundCave = loadImage('assets/cave/backgroundCave.png');
    imgBackgroundDeepCave = loadImage('assets/cave/deepCave.jpg');
    coal = loadImage('assets/cave/coal.png');
    flint = loadImage('assets/cave/flint.png');
    copper = loadImage('assets/cave/copper.png');
    iron = loadImage('assets/cave/iron.png');
    redstone = loadImage('assets/cave/redstone.png');
    lapiz = loadImage('assets/cave/lapiz.png');

    arrow = loadImage('assets/cave/arrow.png');
    bat = loadImage('assets/cave/bat.png');

    array1 = [coal, flint, copper, iron];


    // Obsidian
    imgBackroundObsidian = loadImage('assets/obsidian/obsidian.jpg');
    emerald = loadImage('assets/obsidian/emerald.png');
    gold = loadImage('assets/obsidian/gold.png');
    diamond = loadImage('assets/obsidian/diamond.png');
    obsidian = loadImage('assets/obsidian/obsidian.png');


    bucket = loadImage('assets/bucket.png');
    pickaxe = loadImage('assets/overworld/apple.png');

}

// Sounds
const backgroundSound = new Audio();
backgroundSound.src = "assets/sounds/minecraftTheme.mp3";

const chickenDeathSound1 = new Audio();
chickenDeathSound1.src = "assets/sounds/chicken1.mp3";

const chickenWalkingSound1 = new Audio();
chickenWalkingSound1.src = "assets/sounds/chicken3.mp3";

const rabbitDeathSound1 = new Audio();
rabbitDeathSound1.src = "assets/sounds/rabbit3.mp3";

const rabbitWalkingSound = new Audio();
rabbitWalkingSound.src = "assets/sounds/rabbit4.mp3";


function setup() {  
    createCanvas(1366, 600);

    textAlign(CENTER, CENTER);

    newspeed = yspeed;
    x = rad;

    playerOne = new Kurv(330, 380, 150, 50, 15, imgPlayerone);
    playerTwo = new Kurv(850, 400, 150, 50, 15, imgPlayertwo);
   
    
}



function draw() {

    if (spilIgang == true) {
        backgroundSound.play();
        cutscene();
        
        if (msgCounter == 1 || msgCounter == 3 || msgCounter == 5 || msgCounter == 7) {
            customFucntion();
            checkPlayerLives();
            move();
            checkScore();
            display(); 
        }
            
        if (playerOne !=null) {
            if (keyIsDown(87)) {
                playerOne.moveY(-8);
            }
            if (keyIsDown(83)) {
                playerOne.moveY(8);
            }    
            if (keyIsDown(65)) {
                playerOne.moveX(-8);
            }
            if (keyIsDown(68)) {
                playerOne.moveX(8);
            } 
        }
        if (playerTwo != null) {
            if (keyIsDown(UP_ARROW)) {
                playerTwo.moveY(-8);
            }
            if (keyIsDown(DOWN_ARROW)) {
                playerTwo.moveY(8);
            }    
            if (keyIsDown(LEFT_ARROW)) {
                playerTwo.moveX(-8);
            }
            if (keyIsDown(RIGHT_ARROW)) {
                playerTwo.moveX(8);
            } 
        }
        playerOneLivesChange();
        playerTwoLivesChange();
    } else {  
        fill(255);
        textSize(46);
        text("Game Over",width/2, height/2);
        text("Winner: " + victor);
    }
    
}




function display() {
    fill(0);
    textSize(20);
    text("Player One:", width-1130,30);
    text("Player Two:", width-229,30);
    
    if (tidTæller <= 100) {
        appelsinerImages();
    } else {
        tidTæller -= 1;
    }
     
    if (playerOne != null) {
        playerOne.tegn();
    }
    if (playerTwo != null) {
        playerTwo.tegn();
    }
}
    


function move() {
    if (tidTæller <= 100) {
        x += xspeed;    
        y += yspeed;
        yspeed += grav;
    }
    
    if (x > width || y > height) {
        shootNew();
        missed += 1;
    }
    
}


function checkScore() {
    if (yspeed > 0) {
        if (playerOne != null) {
            if (playerOne.grebet(x, y, rad)) {
                playerOnePoints();
                shootNew(); 
            } 
        }
        
        if (playerTwo != null) {
            if (playerTwo.grebet(x,y,rad)) {
                playerTwoPoints();
                shootNew();
            }
        }
        if (playerOne == null && (playerTwo == null)) {
            spilIgang= false;
        }
    } 
}


function shootNew() {
    x = rad;
    y = random(0, 633);

    if (y < 100) {
        yspeed = 0;
        xspeed = random(5,11);
    } else if (y < 300 && y > 101) {
        yspeed = -5;
        xspeed = random (3,8);
    } else if (y < 500 && y > 301) {
        yspeed = -7.5;
        xspeed = random (8,10);
    } else {
        yspeed = -10;
        xspeed = random(1,8);
    }

    
    ranNum = int(random(1,5));

    if (playerOnePickaxe == true && playerTwoPickaxe == true) {
        ranNum = 23;
    } else if (playerOne == null && playerTwoPickaxe == true) {
        ranNum = 23;
    } else if (playerTwo == null && playerOnePickaxe == true) {
        ranNum = 23;
    }else if (playerDiamondCounter == 3) {
        ranNum = 99;
        playerDiamondCounter = 0;
    } else if (playerOneBucket == true && playerTwoBucket == true) {
        ranNum = int(random(13,22));
    } else if (scorePlayerOne >= 10 && scorePlayerTwo >= 10) {
        ranNum = int(random(5,13));
        if (playerIronCounter == '3') {
            ranNum = 100;
            playerIronCounter = 0;
        } 
    } 
    
    tidTæller = 20 + tid + Math.random() * tid;
    
}

function keyPressed() {
    if (spilIgang == false && keyCode == 82) {
        restart();
    } 
}


function restart() {
    x = 0; 
    y = 500;
    xspeed = 4;
    yspeed = -10;
    
    missed = 0;
    tid = 50;
    tidTæller = 40 + tid + Math.random() * tid;
   
    playerOneLives = 5;
    playerTwoLives = 5;

    scorePlayerOne = 0;
    scorePlayerTwo = 0;

    playerOneIron = 0;
    playerTwoIron = 0;

    playerOneDiamond = 0;
    playerTwoDiamond = 0;

    playerOneBucket = false;
    playerTwoBucket = false;

    ranNum = 0;
    spilIgang = true;

    playerOne = new Kurv(330, 380, 150, 50, 15, imgPlayerone);
    playerTwo = new Kurv(850, 400, 150, 50, 15, imgPlayertwo);
}