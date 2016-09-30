var questions = [ 
	{
		question: "Which Tarantino movie opens in an airport?",
		answer: "jackie brown"
	},
	{
		question: "Reservoir Dogs and From Dusk Til Dawn share a common phrase. Which is it?",
		answer: "okay ramblers, let's get rambling."
	},
	{
		question: "Which Tarantino movie did Harvey Keitel only talk over a phone in?",
		answer: "inglourious basterds"
	},
	{
		question: "Actor Michael Bowen played Buck in Kill Bill: Vol. 1. What role did he have in Jackie Brown?",
		answer: "mark dargas"
	},
	{
		question: "Who was Mr. White in Reservoir Dogs?",
		answer: "harvey keitel"
	},
	{
		question: "What independent film that was directed, written, and acted in by Quentin Tarantino and was his first commercial success in 1992?",
		answer: "reservoir dogs"
	},
	{
		question: "Which Tarantino movie was really only half of a movie, the other half being directed by Robert Rodriguez?",
		answer: "death proof"
	},
	{
		question: "Who shot Marvin in the face? (Pulp Fiction)",
		answer: "vincent vega"
	},
	{
		question: " Which Tarantino movie featured the songs Flowers on the Wall and Son of a Preacher Man?",
		answer: "pulp fiction"
	},
	{
		question: "Who directed the movie Pulp Fiction",
		answer: "quentin tarantino"
	}

]

for(i = 0; i < questions.length; i++) {
	q = questions[i].question
	document.getElementById('question' + [i]).textContent = q
}

function testResults() {
	var correct = 0;
	var incorrect = 0;
	for(i = 0; i < questions.length; i++) {	
		var answer = questions[i].answer
		var guess = document.getElementById('answer' + [i]).value
		var questionSpot = document.getElementById('question' + [i])
		if(answer == guess) {
			questionSpot.className = 'correct'
			correct++
		} else {
			questionSpot.className = 'incorrect'
			incorrect++
		}
	}
	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect
}








