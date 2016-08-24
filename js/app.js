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
		["An easy climb", "A horrendously hard climb", "A climb which receives a much lower grade than deserved", "A climb which receives a much higher grade than deserved"],["the end of a very long climb","the hardest part of a climb","the easiest part of a climb", "the part where you were stronger in the climb"],
		["to climb without a rope","Climbing without unnatural aids other than used for protection","Climbing a route alone with an auto-belay","Climbing without natural aids used for protection"],
		["a horrendously small and slippery hold" ,"A very large hold that you can grab easily", "A hold which is only just big enough to be grasped with the tips of the fingers", "A rounded and slippery hold"],
		["to successfully complete a climbing route without falling on the first attempt after receiving beta of some form", "To fall off a climbing route too quickly", "to successfully complete a route without falling", "To complete a climbing route very quickly"],
		["requesting the belayer to go back down","requesting the belayer to give them more slack", "requesting to take a break", "requesting that the belayer removes all slack"],
		["completing a climb successfully without falling while on a top rope after making previous unsuccessful attempts, done without falling or resting on the rope","To complete a climb while placing protection on a lead climb after making previous unsuccessful attempts, done without falling or resting on the rope","To complete a lead climb after making previous unsuccessful attempts, done without falling or resting on the rope","To complete a lead climb on the first attempt without falling"],
		["Climbing technique where a leg is held in a position to maintain balance, rather than to support weight", "a technique to barndoor and climb more dynamically","a technique to prepare yourself for jumping onto another hold","To use friction on the sole of the climbing shoe, in the absence of any useful footholds"],
		["Jumping from the highest part of a boulder problem to the ground", "A technique that is typically used while lowering and cleaning gear from an overhanging and/or traversing route", "Jumping or transitioning from rock to rock in an area of large rock fragments on a mountainside that may vary from house-size to as small as a small backpack", "Scrambling to get to the top of an oddly shaped boulder"],
		["When the rope slashes a part of your body",  "falling to the ground while leading", "Getting rope burnt", "any fall beyond the last placed or clipped piece of protection"]
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


	function onClickOption (obj) {
		console.log(obj)
	}

	document.getElementById("nextButton").onclick = function () {
		nextQuestion()
	}

	var quiz = nextQuestion()

	$("#newQuiz").click(function(){
		quiz = nextQuestion()
		counter = 0
		currentAnswerPoints = 0
		totalPoints = 0

	})

	

	function nextQuestion () {

		$('input[name=option]').attr('checked',false);
		document.getElementById("count").innerHTML = counter + 1
		totalPoints = totalPoints + currentAnswerPoints
		currentAnswerPoints = 0
		document.getElementById("score").innerHTML = totalPoints
		var presentQuestion = new Question (questions[counter], options[counter], answers[counter])
		console.log("question number", presentQuestion)

		document.getElementById("question").innerHTML = presentQuestion.question
		document.getElementById("option0text").innerHTML = presentQuestion.options[0]
		document.getElementById("option1text").innerHTML = presentQuestion.options[1]
		document.getElementById("option2text").innerHTML = presentQuestion.options[2]
		document.getElementById("option3text").innerHTML = presentQuestion.options[3]

		document.getElementById("option0").onclick = function () {
			currentAnswerPoints = 0
			console.log("NOOOOOO", currentAnswerPoints)
		}
		document.getElementById("option1").onclick = function () {
			currentAnswerPoints = 0
			console.log("NOOOOOO", currentAnswerPoints)
		}
		document.getElementById("option2").onclick = function () {
			currentAnswerPoints = 0
			console.log("NOOOOOO", currentAnswerPoints)
		}
		document.getElementById("option3").onclick = function () {
			currentAnswerPoints = 0
			console.log("NOOOOOO", currentAnswerPoints)
		}
		document.getElementById("option" + presentQuestion.answer).onclick = function () {
			currentAnswerPoints = 1
			console.log("YIEH BOIII", currentAnswerPoints)
		}

		// document.getElementById("option0").value = 0
		// document.getElementById("option1").value = 0
		// document.getElementById("option2").value = 0
		// document.getElementById("option3").value = 0
		// document.getElementById("option" + presentQuestion.answer).value = 1
		counter++

		if (counter === 10){
				$("#resultButton").toggle();
				$("#questionContainer").hide();
				$(".tally").hide();
			}

		document.getElementById("resultButton").onclick = function (){
			$("#resultButton").hide();
			$("#newQuiz").show(); 
			if (totalPoints<=2){
				$(".climbingRookie").toggle()
			} 
			else if (totalPoints >2 && totalPoints <= 3){
				$(".gymRat").toggle()
			}
			else if (totalPoints >3 && totalPoints <= 6){
				$(".ocassional").toggle()
			}
			else {
				$(".master").toggle()
			}
		}

	}

	nextQuestion()


	// $("#resultButton").click(function(){
	// 	if (true) {};
	// })

	
	// var Questions = [
	// 	{
	// 		question: "What is a sandbag?",
	// 		options: ["An easy climb", "A horrendously hard climb", "A climb which receives a much lower grade than deserved", "A climb which receives a much higher grade than deserved"],
	// 		answerChoiceIndex: 2
	// 	},
	// 	{
	// 		question: "The crux of a climb is:",
	// 		options: ["the end of a very long climb","the hardest part of a climb","the easiest part of a climb", "the part where you were stronger in the climb"],
	// 		answerChoiceIndex: 1
	// 	},
	// 	{
	// 		question: "What is free climbing?",
	// 		options: ["to climb without a rope","Climbing without unnatural aids other than used for protection","Climbing a route alone with an auto-belay","Climbing without natural aids used for protection"],
	// 		answerChoiceIndex: 1
	// 	},

	// 	{
	// 		question: "Which is the best description for a crimp?",
	// 		options:["a horrendously small and slippery hold" ,"A very large hold that you can grab easily", "A hold which is only just big enough to be grasped with the tips of the fingers", "A rounded and slippery hold"],
	// 		answerChoiceIndex: 2
	// 	},

	// 	{
	// 		question: "What is a flash?",
	// 		options:["to successfully complete a climbing route without falling on the first attempt after receiving beta of some form", "To fall off a climbing route too quickly", "to successfully complete a route without falling", "To complete a climbing route very quickly"],
	// 		answerChoiceIndex: 0
	// 	},

	// 	{
	// 		question: "When the climber shouts at a belayer 'take!', he is:",
	// 		options:["requesting the belayer to go back down","requesting the belayer to give them more slack", "requesting to take a break", "requesting that the belayer removes all slack"],
	// 		answerChoiceIndex: 3
	// 	},

	// 	{
	// 		question: "What is a redpoint?",
	// 		options:["completing a climb successfully without falling while on a top rope after making previous unsuccessful attempts, done without falling or resting on the rope","To complete a climb while placing protection on a lead climb after making previous unsuccessful attempts, done without falling or resting on the rope",
	// 		"To complete a lead climb after making previous unsuccessful attempts, done without falling or resting on the rope","To complete a lead climb on the first attempt without falling"],
	// 		answerChoiceIndex: 1
	// 	},

	// 	{
	// 		question: "What is flagging?",
	// 		options:["Climbing technique where a leg is held in a position to maintain balance, rather than to support weight", "a technique to barndoor and climb more dynamically","a technique to prepare yourself for jumping onto another hold",
	// 		"To use friction on the sole of the climbing shoe, in the absence of any useful footholds"],
	// 		answerChoiceIndex: 0
	// 	},

	// 	{
	// 		question: "What is talus hopping?",
	// 		options:["Jumping from the highest part of a boulder problem to the ground", "A technique that is typically used while lowering and cleaning gear from an overhanging and/or traversing route", 
	// 		"Jumping or transitioning from rock to rock in an area of large rock fragments on a mountainside that may vary from house-size to as small as a small backpack", "Scrambling to get to the top of an oddly shaped boulder"],
	// 		answerChoiceIndex: 2
	// 	},

	// 	{
	// 		question: "What is a whipper?",
	// 		options:["When the rope slashes a part of your body",  "falling to the ground while leading", "Getting rope burnt", "any fall beyond the last placed or clipped piece of protection"],
	// 		answerChoiceIndex: 3
	// 	},

	// ];

	// var Quiz = {

 //  		score: 0,
 //  		questions: [],
 //  		currentQuestionIndex: 0,
 //  		currentQuestion: function() {
 //    		return this.questions[this.currentQuestionIndex]
 //  		}
	// };

	// // creating a variable to identify current questions

	// var quiz = Object.create(Quiz);
	// quiz.questions = Questions;
	// var q = quiz.currentQuestion();

	// function updateCup() {
 //        var answer = $("input[type='radio']:checked").val();
 //        if (answer == questions[currentQuestion].correct) {
 //            numberCorrect++;    
 //        }
 //        if (numberCorrect == 1) {
 //            $(".score_cup").css("display", "none")
 //            $("#score_cup1").fadeIn();
 //        }
 //        else if (numberCorrect == 2) {
 //            $(".score_cup").css("display", "none")
 //            $("#score_cup2").fadeIn();
 //        }
 //        else if (numberCorrect == 3) {
 //            $(".score_cup").css("display", "none")
 //            $("#score_cup3").fadeIn();
 //        }
 //        else if (numberCorrect == 4) {
 //            $(".score_cup").css("display", "none")
 //            $("#score_cup4").fadeIn();
 //        }
 //        else if (numberCorrect == 5) {
 //            $(".score_cup").css("display", "none")
 //            $("#score_cup5").fadeIn();
 //        }
 //    }
	// $(".startButton").click(function(){
	// 	$("")
			
	// }
		
	// })
	



	// var arrayQuestions = ["What is a sandbag?", "What is a flash?", "What is free climbing?","The crux of a climb is:", "Which is the best description for a crimp?", "What is flagging?",
	// "When the climber shouts at a belayer take!, he is:", "What is a whipper?","What is talus hopping?","What is a redpoint?" ]

	// var arrayOptions = [["a","b","c","d"]]




})