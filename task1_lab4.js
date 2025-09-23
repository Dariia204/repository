const FAIL_THRESHOLD = 4;

function calculate() {
  const form = document.getElementById('testForm');
  let totalScore = 0;
  let tableRows = [];

  totalScore += calculateRadio(form, 'radio1', 1, tableRows);
  totalScore += calculateRadio(form, 'radio2', 2, tableRows);
  totalScore += calculateCheckbox(form, 'check1', 3, tableRows);
  totalScore += calculateCheckbox(form, 'check2', 4, tableRows);
  totalScore += calculateSelectSingle(form, 'select1', 5, tableRows);
  totalScore += calculateSelectMultiple(form, 'select2', 6, 2, tableRows);
  totalScore += calculateText(form, 'text1', 7, 'кібертрон', tableRows);

  let tableHTML = '<table><tr><th>Питання</th><th>Ваша відповідь</th><th>Бали</th></tr>';
  tableHTML += tableRows.join('');
  tableHTML += `<tr><td colspan="2"><b>Загальний бал</b></td><td><b>${totalScore}</b></td></tr></table>`;
  document.getElementById('results').innerHTML = tableHTML;

  if (totalScore < FAIL_THRESHOLD) {
    const screamer = document.getElementById('screamer');
    const screamAudio = document.getElementById('screamSound');
    screamAudio.currentTime = 0;
    screamAudio.play().catch(() => {});
    screamer.style.display = 'block';
    setTimeout(() => { screamer.style.display = 'none'; }, 2000);
  }

  const commentEl = document.getElementById('comment');
  let commentText = '';
  if (totalScore <= 3) commentText = 'Потрібно повторити матеріал 😅';
  else if (totalScore <= 5) commentText = 'Можна ще краще 👍';
  else if (totalScore <= 6) commentText = 'Добре, але є над чим попрацювати 🙂';
  else commentText = 'Гарна робота! 🎉';
  commentEl.textContent = commentText;
}

function calculateRadio(form, name, questionNumber, tableRows) {
  const radios = form[name];
  let score = 0;
  let answerText = '';
  for (let r of radios) if (r.checked) { score = parseInt(r.value); answerText = r.nextSibling.textContent.trim(); }
  tableRows.push(`<tr><td>${questionNumber}</td><td>${answerText}</td><td>${score}</td></tr>`);
  return score;
}

function calculateCheckbox(form, name, questionNumber, tableRows) {
  const checks = form[name];
  const selected = [];
  for (let c of checks) if (c.checked) selected.push(c);
  let score = 0;
  if (selected.length === 2) score = selected.filter(c => c.value == '1').length;
  else if (selected.length >= 3) score = 0;
  const selectedText = selected.map(c => c.nextSibling.textContent.trim()).join(', ');
  tableRows.push(`<tr><td>${questionNumber}</td><td>${selectedText}</td><td>${score}</td></tr>`);
  return score;
}

function calculateSelectSingle(form, name, questionNumber, tableRows) {
  const select = form[name];
  const score = parseInt(select.value);
  const text = select.options[select.selectedIndex].text;
  tableRows.push(`<tr><td>${questionNumber}</td><td>${text}</td><td>${score}</td></tr>`);
  return score;
}

function calculateSelectMultiple(form, name, questionNumber, requiredCount, tableRows) {
  const select = form[name];
  const selectedOptions = [];
  for (let opt of select.options) if (opt.selected) selectedOptions.push(opt);
  let score = 0;
  if (selectedOptions.length === requiredCount) score = selectedOptions.filter(o => o.value == '1').length;
  else if (selectedOptions.length > requiredCount) score = 0;
  const selectedText = selectedOptions.map(o => o.text).join(', ');
  tableRows.push(`<tr><td>${questionNumber}</td><td>${selectedText}</td><td>${score}</td></tr>`);
  return score;
}

function calculateText(form, name, questionNumber, correctAnswer, tableRows) {
  const textVal = form[name].value.trim();
  const score = (textVal.toLowerCase() === correctAnswer.toLowerCase()) ? 1 : 0;
  tableRows.push(`<tr><td>${questionNumber}</td><td>${textVal}</td><td>${score}</td></tr>`);
  return score;
}
