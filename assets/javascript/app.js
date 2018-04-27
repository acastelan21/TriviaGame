//variables for scoreboard
var correct = 0
var incorrect = 0
var unanswered = 0

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
    //question screen
    function renderSubmitButton() {

        var a = $("<button>");
        // Adding a class of startbutton to our button
        a.addClass("submitButton");;
        // Providing the initial button text
        a.text("Submit");
        // Adding the button to the buttons-view div
        $("#end").append(a);
        // hide questions until start has been pressed
        
    }
    renderSubmitButton()
    $("#end").on("click", function (event) {
        event.preventDefault()
        //show questions on click 
        // get value of clicks 
        var selValue1 = $("input[name=quest1]:checked").val();
        console.log(selValue1)
        //check to see if value is correct
        if (selValue1 == 2) {
            correct++;
        }
        else if (selValue1 === undefined){
            unanswered++;
        }
        else {
            incorrect++;
        }
        var selValue2 = $("input[name=quest2]:checked").val();
        console.log(selValue2)
        //check to see if value is correct
        if (selValue2 == 4) {
            correct++;
        }
        else if (selValue2 === undefined){
            unanswered++;
        }
        else {
            incorrect++;
        }
        var selValue3 = $("input[name=quest3]:checked").val();
        console.log(selValue3)
        //check to see if value is correct
        if (selValue3 == 3) {
            correct++;
        }
        else if (selValue3 === undefined){
            unanswered++;
        }
        else {
            incorrect++;
        }
        var selValue4 = $("input[name=quest4]:checked").val();
        console.log(selValue4)
        //check to see if value is correct
        if (selValue4 == 4) {
            correct++;
        }
        else if (selValue4 === undefined){
            unanswered++;
        }
        else {
            incorrect++;
        }
        var selValue5 = $("input[name=quest5]:checked").val();
        console.log(selValue5)
        //check to see if value is correct
        if (selValue5 == 1) {
            correct++;
        }
        else if (selValue5 === undefined){
            unanswered++;
        }
        else {
            incorrect++;
        }
        var selValue6= $("input[name=quest6]:checked").val();
        console.log(selValue6)
        //check to see if value is correct
        if (selValue6 == 3) {
            correct++;
        }
        else if (selValue6 === undefined){
            unanswered++;
        }
        else {
            incorrect++;
        }
        var selValue7 = $("input[name=quest7]:checked").val();
        console.log(selValue7)
        //check to see if value is correct
        if (selValue7 == 1) {
            correct++;
        }
        else if (selValue7 === undefined){
            unanswered++;
        }
        else {
            incorrect++;
        }
        var selValue8 = $("input[name=quest8]:checked").val();
        console.log(selValue8)
        //check to see if value is correct
        if (selValue8 == 4) {
            correct++;
        }
        else if (selValue8 === undefined){
            unanswered++;
        }
        else 
        {
            incorrect++;
        }
        //console log correct
        console.log(correct)
        //write correct to html
        $("#correct").text("Correct: " + correct)
        //console.log (incorrect)
        console.log(incorrect)
        //write incorrect
        $("#incorrect").text("Incorrect: " + incorrect)
        //console log unanswered
        console.log(unanswered)
        $("#unanswered").text("Unanswered: " + unanswered)
})



})
 
