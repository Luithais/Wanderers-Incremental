var playerGold = 0;
var playerEquipment = ["head", "shoulders", "chest", "legs", "feet"];
var clickGoldAmount = 1;

var clickGold = function(clickGoldAmount)
{
   playerGold = playerGold + clickGoldAmount;
};
    
$("#goldBtn").click(function(){
        clickGold(clickGoldAmount);
        $("#goldCount span").text(playerGold);
    }
);