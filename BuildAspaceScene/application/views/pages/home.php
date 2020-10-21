<!--
* Name: Nick Jocius
* Intermediate Web
* Purpose: home.php for MVC coding07 assignment
* Date: 10/12/2020
-->

<div class="Home h-100 container-fluid p-0 m-0">
    <div class=" bg-dark h-100 w-100 m-0 p-0" id="dragRow">
        <div class="d-flex justify-content-center flex-column align-items-center p-2" id="imgCol">
            <div class="d-flex flex-column justify-content-center">
                <label for="bg" class="text-white m-0">Select a background</label>
                <select name="bg" id="bg" class="mb-5">
                    <option selected value="default">Pick a Scene</option>
                    <option value="moon">Moon</option>
                    <option value="earth">Earth</option>
                    <option value="purple">Purple Space</option>
                    <option value="saturn">Saturn</option>
                </select>
            </div>
            <div class="d-flex flex-row justify-content-around">
                <div id="rocketDiv" class="p-0 m-0">
                    <img id="rocket" src="/assets/images/rocket.png" class="p-0 m-0 item one img-fluid">
                </div>
                <div id="cometDiv" class="p-0 m-0">
                    <img id="comet" src="/assets/images/comet.png" class=" p-0 m-0 item two img-fluid">
                </div>
                <div id="ufoDiv" class="p-0 m-0">
                    <img id="ufo" src="/assets/images/ufo.png" class=" p-0 m-0 item three img-fluid">
                </div>
                <div id="alienDiv" class="p-0 m-0">
                    <img id="ufo" src="/assets/images/alien.png" class=" p-0 m-0 item four img-fluid">
                </div>
            </div>

        </div>

        <div id="droppable" class="drop w-100 container-fluid">
            <div class="container-fluid m-0 p-0" id="dropboundary"></div>
        </div>
    </div>
</div>
</div>