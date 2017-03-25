(function(){ "use strict";

    /////   INITIALISE OBJECTS  /////
        var goblin = {count:0, cost:10, production: 1};
    /*------------------------------------------*/

    /////   INITIALISE VARIABLES    /////
        var playerGold = 0;
        var clickGoldAmount = 1;
        var goblinProductionTotal = goblin.count * goblin.production;
    /*------------------------------------------*/
         
    /////   FUNCTIONS   /////    
        var purchaseUnit = function (unit){
            if(playerGold >= unit.cost){                                     //checks that the player can afford the goblin
                unit.count++;                                                  //increases number of goblins
                playerGold = playerGold - unit.cost;                         //removes the gold spent
                unit.cost = Math.floor(10 * Math.pow(1.1,unit.count));
            }
        };

        var addGold = function(goldIncrease){
            playerGold = playerGold + goldIncrease;
        };

    /*------------------------------------------*/

    /////   HTML CLICK EVENTS   ////
        //Tree
        $("#goldBtn").click(function(){
                console.log(playerGold);
                console.log(goblinProductionTotal);
                addGold(clickGoldAmount);
                $("#goldCount span").text(playerGold);
            }
        );

        //Hire 1 Goblin
        $("#goblinHireBtn").click(function () { 
            purchaseUnit(goblin);
            $("#goblins span").text(goblin.count);                          //updates the number of goblins for the user
            $("#goldCount span").text(playerGold);                       //updates the number of gold for the user
            $("#goblinCost span").text(goblin.cost);                     //updates the goblin cost for the user
        });

    /*------------------------------------------*/

    /////   GAME LOOP   /////
        window.setInterval(function () {
            goblinProductionTotal = goblin.count * goblin.production;
            addGold(goblinProductionTotal);
            $("#goldCount span").text(playerGold);
        }, 1000);

    /*------------------------------------------*/

 }());
