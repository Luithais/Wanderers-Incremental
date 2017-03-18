var playerGold = 0;
var playerEquipment = ["head", "shoulders", "chest", "legs", "feet"];
var clickGoldAmount = 1;

var goblins = 0;
var goblinCost = Math.floor(10 * Math.pow(1.1,goblins));     //works out the cost of this goblin

var gps = function (gold) {
    
}

var clickGold = function(clickGoldAmount)
{
   playerGold = playerGold + clickGoldAmount;
};
    
$("#goldBtn").click(function(){
        clickGold(clickGoldAmount);
        $("#goldCount span").text(playerGold);
    }
);

$("#goblinHireBtn").click(function () { 

    if(playerGold >= goblinCost){                 //checks that the player can afford the goblin
        if (goblins === 9) {
        alert("Migs the Mighty joins your cause!");
        };
    
        goblins++;                               //increases number of goblins
    	playerGold = playerGold - goblinCost;    //removes the gold spent
        $("#goblins span").text(goblins);  //updates the number of goblins for the user
        $("#goldCount span").text(playerGold);  //updates the number of gold for the user

    };

    goblinCost = Math.floor(10 * Math.pow(1.1,goblins));       //works out the cost of the next goblin
    $("#goblinCost span").text(goblinCost); //updates the goblin cost for the user
});




window.setInterval(function () {
    clickGold(goblins);
    $("#goldCount span").text(playerGold);
}, 1000);