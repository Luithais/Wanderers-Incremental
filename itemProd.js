(function(){ "use strict";

    /////   INITIALISE OBJECTS  /////
        var wood = {count:0, input:0, output:0,value:1,upgradeCount:0,upgradeCost:20};
        var arrow = {count:0, input:0, output:0,value:7,upgradeCount:0,upgradeCost:100};
        var bow = {count:0, input:[0,0], output:0,value:250,upgradeCount:0,upgradeCost:1500};
    /*------------------------------------------*/

        // Add materials

    

    /////   DRAGGABLE ICONS  /////
        // target elements with the "draggable" class
        interact('.draggable')
        .draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of its parent
        restrict: {
            restriction: "parent",
            endOnly: true,
        },
        // enable autoScroll
        autoScroll: true,

        // call this function on every dragmove event
        onmove: dragMoveListener,
        // call this function on every dragend event
        onend: function (event) {
            var textEl = event.target.querySelector('p');

            textEl && (textEl.textContent =
            'moved a distance of '
            + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                        Math.pow(event.pageY - event.y0, 2) | 0))
                .toFixed(2) + 'px');
        }
        });

        function dragMoveListener (event) {
        var target = event.target,
            // keep the dragged position in the data-x/data-y attributes
            x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
            y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

            // translate the element
            target.style.webkitTransform =
            target.style.transform =
                'translate(' + x + 'px, ' + y + 'px)';

            // update the posiion attributes
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
            }

            // this is used later in the resizing and gesture demos
            window.dragMoveListener = dragMoveListener;
    /*------------------------------------------*/

     /////   HTML CLICK EVENTS  /////

        //Upgrade Wood
            $("#woodUpgradeBtn").click(function () {     
                wood.output ++;
                wood.upgradeCount ++;
                $("#woodOutput span").text(wood.output);
                wood.upgradeCost = Math.floor(wood.upgradeCost * Math.pow(1.04,wood.upgradeCount));   //calculates new wood cost
                $("#woodCost span").text(wood.upgradeCost);
            });

        //Upgrade Arrows
            $("#arrowUpgradeBtn").click(function () {
                arrow.input ++;
                arrow.upgradeCount ++;
                arrow.output = arrow.output +3;
                $("#arrowOutput span").text(arrow.output);
                arrow.upgradeCost = Math.floor(arrow.upgradeCost * Math.pow(1.04,arrow.upgradeCount));   //calculates new arrow cost
                $("#arrowCost span").text(arrow.upgradeCost);
                $("#arrowInput span").text(arrow.input);
            });
        
        //Upgrade Bow
            $("#bowUpgradeBtn").click(function () {
                bow.output ++;
                bow.upgradeCount ++;
                bow.input[0] = bow.input[0] + 2;
                bow.input[1] = bow.input[1] + 5;
                bow.upgradeCost = Math.floor(bow.upgradeCost * Math.pow(1.04,bow.upgradeCount));   //calculates new bow cost
                $("#bowCost span").text(bow.upgradeCost);
                $("#bowInput1 span").text(bow.input[0]);
                $("#bowInput2 span").text(bow.input[1]);
                $("#bowOutput span").text(bow.output);
                
            });

     /*------------------------------------------*/


 }());
