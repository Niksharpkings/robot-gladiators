var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

var fight = function(enemyName) {

    while (playerHealth > 0 && enemyHealth > 0) {
        
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
        
        if (promptFight === "skip" || promptFight === "SKIP") {
            
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            
            if (confirmSkip) {
                
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                
                playerMoney = playerMoney - 10;
                
                console.log("playerMoney", playerMoney);
                
                break;
            }
        }
        
        enemyHealth = enemyHealth - playerAttack;
        
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. ");
        
        if (enemyHealth <= 0) {
            window.alert(enemyName + "has died! ");
            
            playerMoney = playerMoney + 20;

            break;

        } else {

            window.alert(enemyName + " Still has " + enemyHealth + " health left. ");
        }
        
        playerHealth = playerHealth - enemyAttack;
        
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + enemyHealth + " health remaining. ");
        
        if (playerHealth <= 0) {
            window.alert(playerName + " has died! ");
            
            break;
        
        } else {
            
            window.alert(playerName + " still  has " + playerHealth + " health left. ");
        }
    }
};

var startGame = function() {

    playerHealth = 100;
    playerAttack = 10;
    PlayerMoney = 10;

for (var i = 0; i < enemyNames.length; i++) {
    
    if (playerHealth > 0) {
        
        window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
        
        var pickedEnemyName = enemyNames[i];
        
        enemyHealth = 50;
        
        fight(pickedEnemyName);
    
    } else {
        
        window.alert('You have lost your robot in battle! Game Over!');
        
        break;
    }
}

startGame();

}









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