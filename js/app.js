
$(document).ready(function(){

	$(".startButton").click(function(){
		$("#questionContainer").toggle();
		$(".tally").toggle();
		$(".startButton").hide();
	})
	
	// questions arrayQuestions

	var questions = [
		"What is a sandbag?",
		"The crux of a climb is:",
		"What is free climbing?",
		"Which is the best description for a crimp?",
		"What is a flash?",
		"When the climber shouts at a belayer 'take!', he is:",
		"What is a redpoint?",
		"What is flagging?",
		"What is talus hopping?",
		"What is a whipper?"
	]

	//   array of option answers

	var options = [
		["An easy climb", "A horrendously hard climb", "A climb which receives a much lower grade than deserved", "A climb which receives a much higher grade than deserved"],["The end of a very long climb","The hardest part of a climb","The easiest part of a climb", "The part where you were stronger in the climb"],
		["To climb without a rope","Climbing without unnatural aids other than used for protection","Climbing a route alone with an auto-belay","Climbing without natural aids used for protection"],
		["A horrendously small and slippery hold" ,"A very large hold that you can grab easily", "A hold which is only just big enough to be grasped with the tips of the fingers", "A rounded and slippery hold"],
		["To successfully complete a climbing route without falling on the first attempt after receiving beta of some form", "To fall off a climbing route too quickly", "To successfully complete a route without falling", "To complete a climbing route very quickly"],
		["Requesting the belayer to go back down","Requesting the belayer to give them more slack", "Requesting to take a break", "Requesting that the belayer removes all slack"],
		["Completing a climb successfully without falling while on a top rope after making previous unsuccessful attempts, done without falling or resting on the rope","To complete a climb while placing protection on a lead climb after making previous unsuccessful attempts, done without falling or resting on the rope","To complete a lead climb after making previous unsuccessful attempts, done without falling or resting on the rope","To complete a lead climb on the first attempt without falling"],
		["Climbing technique where a leg is held in a position to maintain balance, rather than to support weight", "A technique to barndoor and climb more dynamically","A technique to prepare yourself for jumping onto another hold","To use friction on the sole of the climbing shoe, in the absence of any useful footholds"],
		["Jumping from the highest part of a boulder problem to the ground", "A technique that is typically used while lowering and cleaning gear from an overhanging and/or traversing route", "Jumping or transitioning from rock to rock in an area of large rock fragments on a mountainside that may vary from house-size to as small as a small backpack", "Scrambling to get to the top of an oddly shaped boulder"],
		["When the rope slashes a part of your body",  "Falling to the ground while leading", "Getting rope burnt", "Any fall beyond the last placed or clipped piece of protection"]
	]

	// variable for correct answer's array index

	var answers = [2,1,1,2,0,3,1,0,2,3]

	// question object
	
	function Question (question, options, answer) {
	    this.question = question;
	    this.options = options;
	    this.answer = answer;
	}

	var counter = 0
	var currentAnswerPoints = 0
	var totalPoints = 0

	// <--* button that runs the function for next question upon click *-->

	document.getElementById("nextButton").onclick = function () {
		nextQuestion()
	}

	var quiz = nextQuestion()

	//<--* function to repeat the quiz after clicking the button newQuiz *-->

	$("#newQuiz").click(function(){
		$("#results").hide()
		$(".startButton").show()
		counter = 0
		currentAnswerPoints = 0
		totalPoints = 0
		quiz = nextQuestion()
	})

	
	function nextQuestion () {

		$('input[name=option]').attr('checked',false);
		document.getElementById("count").innerHTML = counter + 1
		totalPoints = totalPoints + currentAnswerPoints
		currentAnswerPoints = 0
		document.getElementById("score").innerHTML = totalPoints
		var presentQuestion = new Question (questions[counter], options[counter], answers[counter])
		// console.log("question number", presentQuestion)
		
		//<---** if statement makes code run until it reaches the 10th question, when it reaches 10, it shows results button **--->


		if(counter <10){
			document.getElementById("question").innerHTML = presentQuestion.question
			document.getElementById("option0text").innerHTML = presentQuestion.options[0]
			document.getElementById("option1text").innerHTML = presentQuestion.options[1]
			document.getElementById("option2text").innerHTML = presentQuestion.options[2]
			document.getElementById("option3text").innerHTML = presentQuestion.options[3]
		
			document.getElementById("option0").onclick = function () {
				currentAnswerPoints = 0
				// console.log("NOOOOOO", currentAnswerPoints)
			}
			document.getElementById("option1").onclick = function () {
				currentAnswerPoints = 0
				// console.log("NOOOOOO", currentAnswerPoints)
			}
			document.getElementById("option2").onclick = function () {
				currentAnswerPoints = 0
				// console.log("NOOOOOO", currentAnswerPoints)
			}
			document.getElementById("option3").onclick = function () {
				currentAnswerPoints = 0
				// console.log("NOOOOOO", currentAnswerPoints)
			}
			
			// this part of the function evaluates if user gets question correct. It concatenates the word option with the answer to the current question (which is the array index position)
			
			document.getElementById("option" + presentQuestion.answer).onclick = function () {
				currentAnswerPoints = 1
				// console.log("YIEH BOIII", currentAnswerPoints)
			}
		}
		

		else if (counter === 10){
			$("#results").hide()
			$("#resultButton").toggle();
			$("#questionContainer").hide();
			$(".tally").hide();
		}

		

		counter++

	}

	//<--* function to get the results according to score *-->

	document.getElementById("resultButton").onclick = function (){
		$("#results").show()
		$("#resultButton").hide();
		$("#newQuiz").show(); 
		if (totalPoints<=2){
			$(".climbingRookie").show()
			$(".gymRat").hide()
			$(".master").hide()
			$(".ocassional").hide()
		} 
		else if (totalPoints >2 && totalPoints <= 3){
			$(".gymRat").show()
			$(".climbingRookie").hide()
			$(".master").hide()
			$(".ocassional").hide()
		}
		else if (totalPoints >3 && totalPoints <= 8){
			$(".ocassional").show()
			$(".climbingRookie").hide()
			$(".gymRat").hide()
			$(".master").hide()
		}
		else {
			$(".master").show()
			$(".climbingRookie").hide()
			$(".gymRat").hide()
			$(".ocassional").hide()
		}
	}

})