function runTask1to7(str) {
  let choice = prompt(`Вибери підзавдання (1–7):
1. Довжина рядка
2. Верхній/нижній регістр
3. Індекс символу
4. Кількість входжень символу
5. Обмін сусідніх символів
6. Перевірка спаму
7. Скорочення рядка`);

  let res = "";

  switch (choice) {
    case "1":
      res = "Довжина: " + str.length;
      break;
    case "2":
      res = `Верхній: ${str.toUpperCase()}\nНижній: ${str.toLowerCase()}`;
      break;
    case "3":
      let sym = prompt("Введи символ:");
      res = `Індекс '${sym}': ${str.indexOf(sym)}`;
      break;
    case "4":
      let s = prompt("Введи символ:");
      let count = 0;
      for (let ch of str) if (ch === s) count++;
      res = `Кількість '${s}': ${count}`;
      break;
    case "5":
      let swapped = "";
      for (let i = 0; i < str.length; i += 2) {
        swapped += (str[i + 1] || "") + str[i];
      }
      res = swapped;
      break;
    case "6":
      let spamWords = ["100% безкоштовно", "збільшення продажів", "тільки сьогодні", "не видаляйте"];
      res = spamWords.some(w => str.toLowerCase().includes(w)) ? "Це спам" : "Не спам";
      break;
    case "7":
      let maxLen = +prompt("Максимальна довжина:");
      res = str.length <= maxLen ? str : str.slice(0, maxLen - 3) + "...";
      break;
    default:
      res = "Невірний вибір.";
  }

  return res;
}
