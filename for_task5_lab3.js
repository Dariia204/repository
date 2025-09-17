    let operations = ["+", "-", "*", "/"];
    let currentTask = {};
    let totalTasks = 0;
    let correctAnswers = 0;
    const maxTasks = 5;

    const taskDiv = document.getElementById("task");
    const answerInput = document.getElementById("answer");
    const resultDiv = document.getElementById("result");
    const scoreDiv = document.getElementById("score");
    const checkBtn = document.getElementById("checkBtn");
    const nextBtn = document.getElementById("nextBtn");

    function generateTask() {
      let num1 = Math.floor(Math.random() * 10); 
      let num2 = Math.floor(Math.random() * 10); 
      let op = operations[Math.floor(Math.random() * operations.length)];

      if(op === "/" && num2 === 0) num2 = 1;

      currentTask = {num1, num2, op};

      taskDiv.textContent = `${num1} ${op} ${num2} = ?`;
      answerInput.value = "";
      resultDiv.textContent = "";
    }

    function checkAnswer() {
      let userAnswer = parseFloat(answerInput.value);
      if(answerInput.value === "") return;

      let correct;
      switch(currentTask.op) {
        case "+": correct = currentTask.num1 + currentTask.num2; break;
        case "-": correct = currentTask.num1 - currentTask.num2; break;
        case "*": correct = currentTask.num1 * currentTask.num2; break;
        case "/": correct = parseFloat((currentTask.num1 / currentTask.num2).toFixed(2)); break;
      }

      totalTasks++;

      if(userAnswer === correct) {
        correctAnswers++;
        resultDiv.textContent = "Правильно!";
        resultDiv.style.color = "green";
      } else {
        resultDiv.textContent = `Помилка, правильна відповідь «${correct}»`;
        resultDiv.style.color = "red";
      }

      scoreDiv.textContent = `Загальний рахунок: ${correctAnswers}/${totalTasks} (${Math.round(correctAnswers/totalTasks*100)}%)`;

      if(totalTasks >= maxTasks) {
        checkBtn.disabled = true;
        nextBtn.disabled = true;
        taskDiv.textContent = "Тест завершено!";
      }
    }

    checkBtn.addEventListener("click", checkAnswer);
    nextBtn.addEventListener("click", generateTask);

    generateTask();