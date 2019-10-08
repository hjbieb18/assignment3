
    $.compGuess;
    $.userGuessLog = [];
    $.score = 0;



    (function ($.newGame) {
        $(window).location.reload();
    }

    function init() {

        compGuess = Math.floor(Math.random() * 100 + 1);
        // console.log(compGuess);
    }
           
 
    function compareGuess() {

        var userGuess =" " + document.getElementById("inputBox").value;
        // console.log(userGuess);

        userGuessLog.push(userGuess);
        // console.log(userGuessLog);
        document.getElementById("guessLog").innerHTML = userGuessLog;
        score++;
        document.getElementById("score").innerHTML = score;

        if(userGuess > compGuess) {
            document.getElementById("textOutput").innerHTML = 'Too High';
            document.getElementById('inputBox').value = "";
        }
        else if (userGuess < compGuess) {
            document.getElementById("textOutput").innerHTML = 'Too Low';
            document.getElementById("inputBox").value = "";
        }
        else {
            document.getElementById("textOutput").innerHTML = 'You Are Correct';
        }
    }
    function buttonSpinner() {
        
        guessButton.onclick = () =>{
        console.log('guessTextField: ${guessTextField.value}');
        let guessValue = Number.parseInt(guessTextField.nodeValue, 10);
    
        var message = '';
    
        if(isNaN(guessValue)){
            message = 'Error';
        }
        else {
            message = guessValue;
        }
    
        // start spinning
        spinnerstyle.display = "inline";
        setTimeout(() => {
    
            spinner.style.display = "none"
            output.innerHTML = message;
    
        }, 3000);
        
        output.innerHTML = message;
        }
    }
        
 
    

  



        

