
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    $(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  	$(".overlay").fadeOut(1000);
  	});

   

	var secretNumber;
	var userGuess;
	var guessCount = 0;
		  

	var feedback = function (message) {
		$('#feedback').text(message);
	};


	function getSecretNumber() {
		secretNumber = Math.floor(Math.random() * 100);
		console.log('secret: ' + secretNumber);
	};

	function getUserGuess() {
		userGuess = Number($("#userGuess").val());
		console.log('user Guess: ' + userGuess);
	};

	var getGuessCount = function(){
    	$("#count").text(guessCount);
    };

	

	var clearGuessBox = function() {
		$("#userGuess").val("");

	};

	var clearGuessList = function() {
		$("#guessList").children().remove();
	};


/*starts a new game*/
	var newGame = function(){
		getSecretNumber();
		feedback();
		clearGuessList();
		getGuessCount();
		clearGuessBox();
		guessCount = 0;
	}

	newGame();

	var addUserGuess = function(){
		$("#guessList").append("<li>"+userGuess+"</li>")
	};

/* main game section where the numbers are compared */
	var numberGuessed = function () {
		getUserGuess();
		clearGuessBox();

		var newGuess = function () {
			guessCount++;
			getGuessCount();
			addUserGuess();
		};

		var difference = Math.abs(userGuess - secretNumber);

		if (secretNumber === userGuess) {
			feedback("WOW! You won Already!");
			newGame();//a new game will start right away when the user guesses the right number//
			
		}
		else if (userGuess > 100 || userGuess < 1) {
			feedback("Please post a number between 1 and 100");
			
		}

		else if (isNaN(userGuess)) {
			feedback("I only accept numbers");
			
		}

		else if (userGuess === secretNumber) {
			feedback("wow! that is correct!");
			newGuess();
			secretNumber = "guessed";
		}

		else if(difference === 1) {
			feedback("You are on fire!!");
			newGuess();
		}

		else if(difference >= 2 && difference <= 10) {
			feedback("You are super hot!");
			newGuess();
		}


		else if(difference >= 10 && difference <= 20) {
			feedback("You are warm");
			newGuess();
		}

		else if(difference >= 20 && difference <= 35) {
			feedback("You are getting warm");
			newGuess();
		}

		else if (difference >= 36 && difference <= 60) {
			feedback("You are cool");
			newGuess();
		}

		else {
			feedback("You are very cold!");
			newGuess();
		}
		
	};

	$('#guessButton').click(function() {
  		console.log('guess button pressed');
  		numberGuessed();
  		event.preventDefault();
	});

	$(".new").click(function() {
		location.reload();
	});

});	
