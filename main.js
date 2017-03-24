(function(){ "use strict";
    var playerGold = 0;
    var clickGoldAmount = 1;

    var goblins = 0;
    var goblinCost = 10;     
   
        /* if (unitType === 9) {                        //checks if player has bought 9 goblins...
            alert("Migs the Mighty joins your cause!"); //...'adds' Migs the Mighty to adventurers
        }*/
        
    var purchaseUnit = function (unitType, unitCost) {
         if(playerGold >= unitCost){                                     //checks that the player can afford the goblin
            unitType++;                                                  //increases number of goblins
            playerGold = playerGold - unitCost;                         //removes the gold spent
            $("#goblins span").text(unitType);                          //updates the number of goblins for the user
            $("#goldCount span").text(playerGold);                       //updates the number of gold for the user
            $("#goblinCost span").text(unitCost);                     //updates the goblin cost for the user
            unitCost = Math.floor(10 * Math.pow(1.1,goblins));
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
        purchaseUnit(&goblins, &goblinCost);
    });

    //Game loop
    window.setInterval(function () {
        clickGold(goblins);
        $("#goldCount span").text(playerGold);
    }, 1000);

 }());
