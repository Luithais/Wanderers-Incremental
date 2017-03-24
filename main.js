(function(){ "use strict";
    var playerGold = 0;
    var clickGoldAmount = 1;

    var goblin = {count:0, cost:10};
         
   
        /* if (unitType === 9) {                        //checks if player has bought 9 ...
            alert("Migs the Mighty joins your cause!"); //...'adds' Migs the Mighty to adventurers
        }*/
        
    var purchaseUnit = function (unit) {
         if(playerGold >= unit.cost){                                     //checks that the player can afford the goblin
            unit.count++;                                                  //increases number of goblins
            playerGold = playerGold - unit.cost;                         //removes the gold spent
            $("#goblins span").text(unit.count);                          //updates the number of goblins for the user
            $("#goldCount span").text(playerGold);                       //updates the number of gold for the user
            $("#goblinCost span").text(unit.cost);                     //updates the goblin cost for the user
            unitCost = Math.floor(10 * Math.pow(1.1,goblin.count));
        }
    };

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
        purchaseUnit(goblin);
    });

    //Game loop
    window.setInterval(function () {
        clickGold(goblin.count);
        $("#goldCount span").text(playerGold);
    }, 1000);

 }());
