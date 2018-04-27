//variables for scoreboard
var correct = 0
var incorrect = 0

$(document).ready(function () {
    //create start screen 
    function renderStartButton() {

        var a = $("<button>");
        // Adding a class of startbutton to our button
        a.addClass("startButton");;
        // Providing the initial button text
        a.text("Start");
        // Adding the button to the buttons-view div
        $("#begin").append(a);

        
    }
    renderStartButton()
})

//add on click event for start
$("#begin").on("click", function (event) {
    event.preventDefault()

})

