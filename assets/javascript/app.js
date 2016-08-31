$(document).ready(function(){
	$('#btn').on('click', function(){
		var timeRemaining = 2;

            counter = setInterval(decrement, 1000);
        

        function decrement(){
            timeRemaining--;
            $('#timeRemaining').text("Time Remaining: " + timeRemaining + " Seconds");
            
            if (timeRemaining === 0){
                clearInterval(counter);
                
            };
        };

        var myQuestions = ["What Pokemon does Charmander evolve to?", 
        					"What Pokemon type is Pikachu?",
        					"How old is Ash Ketchum?"];

        function questions() {
        	for (var i = 0; i < myQuestions.length; i++) {
        		myQuestions[i];
        		console.log(myQuestions[i]);
        	};
        };
 		$('#question').html(myQuestions[0]);

		$('#button').empty();
		$('#gameTitle').text("Totally Trippy Trivia!");
		$('#timeRemaining').text("Time Remaining: " + timeRemaining + " Seconds");

		var opt1 = $('<button>');
		var opt2 = $('<button>');
		var opt3 = $('<button>');


		var ansqst1 = ["Squirtle", "Pikachu", "Charmeleon"];
		var ansqst2 = ["Fire", "Water", "Electric"];
		var ansqst3 = ["21","15", "10"];


		

		$('.btnOptions').html(opt1.text(ansqst1[0])).append(opt2.text(ansqst1[1])).append(opt3.text(ansqst1[2]));
			
 

			
	});
});