///variables for scoreboard
var correct = 0
var incorrect = 0
var unanswered = 0
var number = 60;
var intervalId;

$(document).ready(function () {
    $("#form").hide()
    $("#timeRemaining").hide()
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
        event.preventDefault();
        run()
        $("#form").show()
        renderSubmitButton()
        $("#begin").hide()
        $("#instructions").hide()
        $("#timeRemaining").show()
    })
    function renderSubmitButton() {

        var a = $("<button>");
        // Adding a class of startbutton to our button
        a.addClass("submitButton");;
        // Providing the initial button text
        a.text("Submit");
        // Adding the button to the buttons-view div
        $("#end").append(a);
        // hide questions until start has been pressed
        $("#end").on("click", function (event) {
            event.preventDefault()
            //show questions on click 
            // get value of clicks 
            
            
            displayScoreboard()
            
        
        })
    }
    function displayScoreboard(){
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
        $("#form").hide()
        $("#timeRemaining").hide()
    //console log correct
    console.log(correct)
    //write correct to html
    $("#correct").text("Correct: " + correct);
    //console.log (incorrect)
    console.log(incorrect)
    //write incorrect
    $("#incorrect").text("Incorrect: " + incorrect);
    //console log unanswered
    console.log(unanswered)
    $("#unanswered").text("Unanswered: " + unanswered);

    if (correct > 5){
        var winner = $("<img>");
        // Adding a class of startbutton to our button
        winner.attr("src", "./assets/images/great.gif");
        // Providing the initial button text
        
        // Adding the button to the buttons-view div
        $("#scoreBoard").append(winner);
    }
     if ((correct > 3) && (correct < 6)){
        var okay = $("<img>");
        okay.attr("src", "./assets/images/notbad.gif");
        $("#scoreBoard").append(okay);

    }
    if (correct < 3){
        var bad = $("<img>");
        bad.attr("src", "./assets/images/giphy.gif");
        $("#scoreBoard").append(bad);
    }

    }//timer
    
   
    
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
      }
    
      //  The decrement function.
    function decrement() {
    
        //  Decrease number by one.
        number--;
    
        //  Show the number in the #show-number tag.
        $("#timeRemaining").text("Time Remaining: " + number);
    
    
        //  Once number hits zero...
        if (number === 0) {
            displayScoreboard()
            //$("#timeRemaining")
         
          
        }
      }

    function stop() {

        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
      }

    })