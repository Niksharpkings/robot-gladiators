window.alert("This is an alert! JavaScript is running!");

// this creates a function named "fight"

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;


//fight function 
var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

// ask player if they'd like to fight or run
var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

//if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    //Remove enemy's health by subtracting the amount set in the playerAttack variable
    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
enemyHealth = enemyHealth - playerAttack;
// Log a resulthing message to the console so we know that it worked.
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
    );
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + "has died! ");
    } else {
        window.alert(enemyName + " Still has " + enemyHealth + " health left. ");
    }

// Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
// remove player's health by subtracting the amount set in the enemyAttack variable
playerHealth = playerHealth - enemyAttack;

// log a resulting message to the console so we know that it worked.
console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + enemyHealth + " health remaining. "
);
 
//Check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died! ");
} else {
    window.alert(playerName + " still  has " + playerHealth + " health left. ");
}
// if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
//if no (false), ask question again by running fight() again
else { fight();
}
}
};


fight();








/*// check to see if the valueof the playerHealth variable is grater then 0
if (playerHealth > 0){
    console.log("Your player is still alive!");
}

var playerHealth = 10;

if (playerHealth === 0) {
console.log("This will not run.");
} 
else {
    console.log("This will run instead.");
} */

//execute function






















// note the lack of quotation marks around playerName
/*
console.log(playerName);

console.log("this logs a string, good for leaving yourself a message");
// this will do math and log 20
console.log(10 + 10);
//what is this?
console.log("Our robot's name is " + playerName );


function fight() {
    window.alert("The fight has begun!");
  }
  //fight();*/