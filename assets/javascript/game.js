$(document).ready(() => {


        }

        var questionAnswer = [

            {
                question: 'Who won a Grammy Award in February for Best New Artist?',
                answers: ['question-1-answers-A', 'question-1-answers-B', 'question-1-answers-C', 'question-1-answers-D']
                correct: 'question-1-answers-D'
            },

            {
                question: 'What 2017 Billboard Top 100 song has the lyric so the bar is where I go?',
                answers: ['question-2-answers-A', 'question-2-answers-B', 'question-2-answers-C', 'question-2-answers-D']
                correct: 'question-2-answers-A'
            }

            {
                question: 'Which former Beatles entire solo album collection was released in February of 2017?',
                answers: ['question-3-answers-A', 'question-3-answers-B', 'question-3-answers-C', 'question-3-answers-D']
                correct: 'question-3-answers-C'
            }

            {
                question: 'Released on the film soundtrack Fifty Shades Darker, who collaborated with Taylor Swift on the song I Dont Wanna Live Forever',
                answers: ['question-4-answers-A', 'question-4-answers-B', 'question-4-answers-C', 'question-4-answers-D']
                correct: 'question-4-answers-B'
            }

            {
                question: 'What Disney film soundtrack peaked at number three on the Billboard 200 chart in March of 2017?'
                answers: ['question-5-answers-A', 'question-5-answers-B', 'question-5-answers-C', 'question-5-answers-D']
                correct: 'question-5-answers-C'
            }
        ];

        var time = 10;

        var questionCount = 0;

        var correct = 0;

        var incorrect = 0;

        var unAnswered = 0;

        var click - 0

        //Function
        //============================



        function countDown() {
            $('#timer').html('Timer: ' + time);
            time--;
            if (time < 0) {
                unAnswered++;
                $('#result').html('Time is up! The correct answer is ' + questionAnswer[questionCount].correct);
                reset();
            }
        }

        function getQuestion() {
            $('#timer').html('Timer: ' + time);
            $('#start').css('display', 'none');
            $('#startText').css('display', 'none');
            $('#timer').removeClass('displayNone');
            timer = setInterval(countDown, 1000);
            console.log(questionAnswer[questionCount].answers);
            shuffleAnswers(questionAnswer[questionCount].answers);
            console.log(questionAnswer[questionCount].answers);
            $('#question').append(questionAnswer[questionCount].question);
            for (var i = 0; i < questionAnswer[questionCount].answers.length; i++) {
                var b = $('<button class="btn pill">');
                b.text(questionAnswer[questionCount].answers[i]);
                b.appendTo('#button' + i);
            }
            checkAnswer();
        }

        function nextQuestion() {
            time = 10;
            $('#timer').html('Timer: ' + time);
            getQuestion();

            function reset() {
                questionCount++;
                clearInterval(timer);
                setTimeout(empty, 3000);
                setTimeout(nextQuestion, 3000);
            }

            function displayResults() {
                $('#timer').addClass('displayNone');
                // $('#reset').removeClass('displayNone');
                // $('#resetText').removeClass('displayNone');
                $('#result').html('Correct Answers: ' + correct);
                $('#question').html('Incorrect Answers: ' + incorrect);
                $('#answers').html('Unanswered:' + unAnswered);
                clearInterval(timer);
            }