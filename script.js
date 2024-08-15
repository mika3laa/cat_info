<script>
  function checkAnswers() {
    var score = 0;
     var totalQuestions = 6;
    
    var answers = {
      q1: 'B',
      q2: 'B',
      q3: 'B',
      q4: 'B',
      q5: 'B',
      q6: 'B'
        };
    
        for (var question in answers) {
            var userAnswer = document.querySelector('input[name="' + question + '"]:checked');
            if (userAnswer && userAnswer.value === answers[question]) {
                score++;
            }
        }
    
        var resultText;
        if (score === totalQuestions) {
            resultText = "You're a true Cat Expert!";
        } else if (score >= 3) {
            resultText = "You know quite a bit about cats!";
        } else if (score >= 1) {
            resultText = "You have some learning to do!";
        } else {
            resultText = "Time to brush up on your cat facts!";
        }
    
        document.getElementById('quiz-score').innerText = `You got ${score} out of ${totalQuestions} correct. ${resultText}`;
        
        setTimeout(() => {
            document.getElementById('quiz-results').style.display = 'block';
        }, 100);
    }
</script>