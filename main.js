(function(){ "use strict";

    /////   INITIALISE OBJECTS  /////
        var goblin = {count:0, cost:25, production: 1};
        var faerie = {count:0, cost:200, production: 5};
        var elf = {count:0, cost:750, production: 20};      
    /*------------------------------------------*/

    /////   INITIALISE VARIABLES    /////
        var playerGold = 0;
        var clickGoldAmount = 1;
    /*------------------------------------------*/
         
    /////   FUNCTIONS   /////    
        var purchaseUnit = function (unit){
            if(playerGold >= unit.cost){                                     //checks that the player can afford the goblin
                unit.count++;                                                  //increases number of goblins
                playerGold = playerGold - unit.cost;                         //removes the gold spent
                unit.cost = Math.floor(unit.cost * Math.pow(1.1,unit.count));
            }
        };

        var addGold = function(goldIncrease){
            playerGold = playerGold + goldIncrease;
        };

    /*------------------------------------------*/

    /////   HTML CLICK EVENTS   ////
        //Tree
        $("#goldBtn").click(function(){
                addGold(clickGoldAmount);
                $("#goldCount span").text(playerGold);
            }
        );

        //Hire 1 Goblin
        $("#goblinHireBtn").click(function () { 
            purchaseUnit(goblin);
            $("#goblinCount span").text(goblin.count);                          //updates the number of goblins for the user
            $("#goldCount span").text(playerGold);                       //updates the number of gold for the user
            $("#goblinCost span").text(goblin.cost);                     //updates the goblin cost for the user
        });

        //Hire 1 Fairy
        $("#faerieHireBtn").click(function () { 
            purchaseUnit(faerie);
            $("#faerieCount span").text(faerie.count);                        
            $("#goldCount span").text(playerGold);                       
            $("#faerieCost span").text(faerie.cost);
        });

         //Hire 1 Elf
        $("#elfHireBtn").click(function () { 
            purchaseUnit(elf);
            $("#elfCount span").text(elf.count);
            $("#goldCount span").text(playerGold);                       
            $("#elfCost span").text(elf.cost);                     
        });

        

    /*------------------------------------------*/

    /////   GAME LOOP   /////
        window.setInterval(function () {
            addGold((goblin.count * goblin.production));
            addGold((faerie.count * faerie.production));
            addGold((elf.count * elf.production));
            $("#goldCount span").text(playerGold);
        }, 1000);

    /*------------------------------------------*/

 }());
