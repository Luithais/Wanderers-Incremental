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
        // Purchase Unit
            var purchaseUnit = function (unit){                                    //Initialises purchaseUnit function, passes unit param
                if(playerGold >= unit.cost){                                        //checks that the player can afford to purchase the unit
                    unit.count++;                                                   //adds 1 to unit count
                    playerGold = playerGold - unit.cost;                            //removes the gold spent
                    unit.cost = Math.floor(unit.cost * Math.pow(1.1,unit.count));   //calculates new unit cost
                }
            };

        // Add Gold
            var addGold = function(goldIncrease){                                  //Initialises addGold function, passes goldIncrease
                playerGold = playerGold + goldIncrease;                             //adds goldIncrease to player's current gold
            };

        // Tabs
            $("#workshopBtn").click({tabName:"workshop"}, function(evt, tabName) {

                    // Declare all variables
                    var i, tabcontent, tablinks;
                
                    // Get all elements with class="tabcontent" and hide them
                    tabcontent = document.getElementsByClassName("tabcontent");
                    for (i = 0; i < tabcontent.length; i++) {
                        tabcontent[i].style.display = "none";
                    }
                
                    // Get all elements with class="tablinks" and remove the class "active"
                    tablinks = document.getElementsByClassName("tablinks");
                    for (i = 0; i < tablinks.length; i++) {
                        tablinks[i].className = tablinks[i].className.replace(" active", "");
                    }
                
                    // Show the current tab, and add an "active" class to the button that opened the tab
                    document.getElementById("workshop").style.display = "block";
                    evt.currentTarget.className += " active";
                }
            )

            $("#expBtn").click({tabName:"exploration"}, function(evt, tabName) {

                // Declare all variables
                var i, tabcontent, tablinks;
            
                // Get all elements with class="tabcontent" and hide them
                tabcontent = document.getElementsByClassName("tabcontent");
                for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].style.display = "none";
                }
            
                // Get all elements with class="tablinks" and remove the class "active"
                tablinks = document.getElementsByClassName("tablinks");
                for (i = 0; i < tablinks.length; i++) {
                    tablinks[i].className = tablinks[i].className.replace(" active", "");
                }
            
                // Show the current tab, and add an "active" class to the button that opened the tab
                document.getElementById("exploration").style.display = "block";
                evt.currentTarget.className += " active";
            }
            )

                $("#workersBtn").click({tabName:"workers"}, function(evt, tabName) {

                    // Declare all variables
                    var i, tabcontent, tablinks;
                
                    // Get all elements with class="tabcontent" and hide them
                    tabcontent = document.getElementsByClassName("tabcontent");
                    for (i = 0; i < tabcontent.length; i++) {
                        tabcontent[i].style.display = "none";
                    }
                
                    // Get all elements with class="tablinks" and remove the class "active"
                    tablinks = document.getElementsByClassName("tablinks");
                    for (i = 0; i < tablinks.length; i++) {
                        tablinks[i].className = tablinks[i].className.replace(" active", "");
                    }
                
                    // Show the current tab, and add an "active" class to the button that opened the tab
                    document.getElementById("workers").style.display = "block";
                    evt.currentTarget.className += " active";
                }
            )
 
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
            $("#goblinCount span").text(goblin.count);                   //updates the number of goblins for the user
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

            $("#woodCount span").text(wood.count);
            $("#arrowCount span").text(arrow.count);
            $("#bowCount span").text(bow.count);
        }, 1000);

    /*------------------------------------------*/

 }());
