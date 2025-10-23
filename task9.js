function task9(str) {
  let choice = prompt(`Вибери підзавдання 9:
1. Замінити всі пробіли на "_"
2. Найчастіше повторювана буква
3. Замінити "JavaScript" на "JS"
4. Підрядок у рядку, повернути індекс
5. Перетворити рядок у формат "Кожне слово з великої"
6. Замінити перше входження символу
7. Замінити всі входження підрядка
8. Перевірити >2 однакових символів поспіль
9. Видалити всі символи, що не є алфавітними
10. Змінити місцями два символи`);

  let res = "";

  switch (choice) {
    case "1":
      res = str.replace(/ /g, "_");
      break;

    case "2":
      let counts = {};
      for (let ch of str.replace(/[^a-zA-Zа-яіїєґ]/gi, "")) {
        counts[ch] = (counts[ch] || 0) + 1;
      }
      res = Object.keys(counts).reduce((a, b) => counts[a] >= counts[b] ? a : b, "");
      break;

    case "3":
      res = str.replace(/JavaScript/g, "JS");
      break;

    case "4":
      let sub = prompt("Введи підрядок:");
      res = str.indexOf(sub);
      break;

    case "5":
      // 🔹 Робочий варіант для будь-якої мови (українська, англійська тощо)
      res = str.replace(/\b\p{L}+/gu, word =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      );
      break;

    case "6":
      let oldCh = prompt("Символ для заміни:");
      let newCh = prompt("На який символ замінити:");
      res = str.replace(oldCh, newCh);
      break;

    case "7":
      let oldStr = prompt("Підрядок для заміни:");
      let newStr = prompt("На який підрядок замінити:");
      res = str.split(oldStr).join(newStr);
      break;

    case "8":
      res = /(.)\1\1/.test(str);
      break;

    case "9":
      res = str.replace(/[^a-zA-Zа-яіїєґ]/g, "");
      break;

    case "10":
      let ch1 = prompt("Перший символ:");
      let ch2 = prompt("Другий символ:");
      let arr = str.split("");
      let i1 = arr.indexOf(ch1);
      let i2 = arr.indexOf(ch2);
      if (i1 !== -1 && i2 !== -1) {
        [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
      }
      res = arr.join("");
      break;

    default:
      res = "Невірний вибір.";
  }

  return res;
}
