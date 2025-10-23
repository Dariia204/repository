function task8(str) {
  let choice = prompt(`Вибери підзавдання 8:
1. Зворотний порядок слів
2. Сортування слів за довжиною
3. Видалення всіх голосних
4. Перевірка анаграми
5. Замінити повтори символів ≥2 на "?"
6. Перевірка паліндрома
7. Видалення цифр
8. Видалення пробілів всередині
9. Кількість голосних
10. Символи з парними індексами`);

  let res = "";

  switch (choice) {
    case "1":
      res = str.split(" ").reverse().join(" ");
      break;
    case "2":
      res = str
        .split(" ")
        .sort((a, b) => a.length - b.length || a.localeCompare(b))
        .join(" ");
      break;
    case "3":
      res = str.replace(/[аеєиіїоуюяaeiou]/gi, "");
      break;
    case "4":
      let str2 = prompt("Введи другий рядок для перевірки анаграми:");
      const normalize = s => s.toLowerCase().replace(/[^a-zа-яїієґ0-9]/gi, "").split("").sort().join("");
      res = normalize(str) === normalize(str2);
      break;
case "5":
  let output = "";
  let i = 0;

  while (i < str.length) {
    let count = 1;
    while (i + count < str.length && str[i] === str[i + count]) {
      count++;
    }
    if (count >= 2) {
      output += "?";
    } else {
      output += str[i];
    }
    i += count;
  }

  res = output;
  break;

    case "6":
      let cleaned = str.toLowerCase().replace(/[\s]/g, "");
      res = cleaned === cleaned.split("").reverse().join("");
      break;
    case "7":
      res = str.replace(/[0-9]/g, "");
      break;
    case "8":
      res = str.replace(/(\S)\s+(\S)/g, "$1$2");
      break;
    case "9":
      res = (str.match(/[аеєиіїоуюяaeiou]/gi) || []).length;
      break;
    case "10":
      res = str.split("").filter((_, i) => i % 2 === 0).join("");
      break;
    default:
      res = "Невірний вибір.";
  }

  return res;
}
