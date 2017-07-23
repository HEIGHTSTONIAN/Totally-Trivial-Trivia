    var correct = 0;
    var incorrect = 0;


    $(document).ready(function() {

        var startButton = $("#start");

        function start() {
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
        }

        startButton.click(start);

    });

    function finish() {


        var q1 = document.getElementsByName("q1");
        var q2 = document.getElementsByName("q2");
        var q3 = document.getElementsByName("q3");
        var q4 = document.getElementsByName("q4");
        var q5 = document.getElementsByName("q5");

        scoregreat(q1, "D");
        scoregreat(q2, "A");
        scoregreat(q3, "C");
        scoregreat(q4, "B");
        scoregreat(q5, "C");

        document.getElementById("finish").style.display = "none";
        document.getElementById("start").style.display = "none";
        document.getElementById("quiz").style.display = "none";
        document.getElementById("timer").style.display = "none";
        document.getElementById("finish").style.display = "none";


        document.getElementById("finishScreen").style.display = "block";
        document.getElementById("correct").innerHTML = correct;
        document.getElementById("incorrect").innerHTML = incorrect;

        // document.clear();//
    }

    function scoregreat(answers, correctanswer) {

        for (var i = 0, length = answers.length; i < length; i++) {
            if (answers[i].checked) {
                // do whatever you want with the checked radio
                if (answers[i].value === correctanswer) {
                    correct++;
                } else {
                    incorrect++;
                }

                break;
            }
        }
    }