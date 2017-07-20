$(document).ready(function() {

    var deadline = new Date().getTime() + (1000 * 30);
    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = deadline - now;

    var seconds = Math.floor(distance / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("timer").innerHTML = seconds + "s ";

   // If the count down is over, write some text 
    if (distance < 0) { 
        clearInterval(x);
        finish();
    }
}, 1000);
});

function finish() {
   // document.clear();//
   alert ("tell us");
}


        var questionAnswer = [

            {
                question: 'Who won a Grammy Award in February for Best New Artist?',
                answers: ['question-1-answers-A', 'question-1-answers-B', 'question-1-answers-C', 'question-1-answers-D'],
                correct: 'question-1-answers-D'
            },

            {
                question: 'What 2017 Billboard Top 100 song has the lyric so the bar is where I go?',
                answers: ['question-2-answers-A', 'question-2-answers-B', 'question-2-answers-C', 'question-2-answers-D'],
                correct: 'question-2-answers-A'
            },

            {
                question: 'Which former Beatles entire solo album collection was released in February of 2017?',
                answers: ['question-3-answers-A', 'question-3-answers-B', 'question-3-answers-C', 'question-3-answers-D'],
                correct: 'question-3-answers-C'
            },

            {
                question: 'Released on the film soundtrack Fifty Shades Darker, who collaborated with Taylor Swift on the song I Dont Wanna Live Forever',
                answers: ['question-4-answers-A', 'question-4-answers-B', 'question-4-answers-C', 'question-4-answers-D'],
                correct: 'question-4-answers-B'
            },

            {
                question: 'What Disney film soundtrack peaked at number three on the Billboard 200 chart in March of 2017?',
                answers: ['question-5-answers-A', 'question-5-answers-B', 'question-5-answers-C', 'question-5-answers-D'],
                correct: 'question-5-answers-C'
            }
        ];

        var time = 10;

        var questionCount = 0;

        var correct = 0;

        var incorrect = 0;

        var unAnswered = 0;

        var click = 0


