var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

$(document).ready(function(){
	$('#btn').on('click', function(){
		var timeRemaining = 2;

            counter = setInterval(decrement, 1000);
        

        function decrement(){
            timeRemaining--;
            $('#timeRemaining').text("Time Remaining: " + timeRemaining + " Seconds");
            
            if (timeRemaining === 0){
                clearInterval(counter);
                var html = "<h2>All Done</h2>" +
                "<h3>Correct Answers: " + correctAnswers + "</h3>" +
                "<h3>Incorrect Answers: " + incorrectAnswers + "</h3>" +
                "<h3>Unanswered: " + unanswered + "</h3>";
                $('#container').html(html)
                
            };
        };

        var myQuestions = ["What Pokemon does Charmander evolve to?", 
        					"What Pokemon type is Pikachu?",
        					"How old is Ash Ketchum?"];

        function questions() {
        	for (var i = 0; i <= myQuestions.length; i++) {
        		myQuestions[i];
        		console.log(myQuestions[i]);
                // $('#question').append(myQuestions[i]);
        	};
        };
        questions();
 		$('#question').html(myQuestions[0]);

		$('#button').empty();
		$('#gameTitle').text("Totally Trippy Trivia!");
		$('#timeRemaining').text("Time Remaining: " + timeRemaining + " Seconds");

		var opt1 = $('<button>');
		var opt2 = $('<button>');
		var opt3 = $('<button>');

        opt1.addClass("one");
        opt1.addClass("two");
        opt1.addClass("three");

		var ansqst1 = ["Squirtle", "Pikachu", "Charmeleon"];
		var ansqst2 = ["Fire", "Water", "Electric"];
		var ansqst3 = ["21","15", "10"];

        var choices = "<button>" + ansqst1[0] + "</button>" +
        "<button>" + ansqst1[1] + "</button>" +
        "<button>" + ansqst1[2] + "</button>";

		

		$('.btnOptions').html(opt1.text(ansqst1[0])).append(opt2.text(ansqst1[1])).append(opt3.text(ansqst1[2]));

            $('.one').on('click', function(){
                correctAnswers++;
            });
			
	});
});