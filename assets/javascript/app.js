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
        // hide questions until start has been pressed
        
    }
    renderStartButton()
    $("#begin").on("click", function (event) {
        event.preventDefault()
        //show questions on click 
        // get value of clicks 
        var selValue1 = $("input[name=quest1]:checked").val();
        console.log(selValue1)
        var selValue2 = $("input[name=quest2]:checked").val();
        console.log(selValue2)
        var selValue3 = $("input[name=quest3]:checked").val();
        console.log(selValue3)
        var selValue4 = $("input[name=quest4]:checked").val();
        console.log(selValue4)
        var selValue5 = $("input[name=quest5]:checked").val();
        console.log(selValue5)
        var selValue6= $("input[name=quest6]:checked").val();
        console.log(selValue6)
        var selValue7 = $("input[name=quest7]:checked").val();
        console.log(selValue7)
        var selValue8 = $("input[name=quest8]:checked").val();
        console.log(selValue8)
        
})



})
 
