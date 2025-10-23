function task10(str) {
  let choice = prompt(`Вибери підзавдання 10:
1. Всі підрядки певної довжини
2. Найбільший спільний префікс
3. Перевірка на паліндром підрядка довжиною ≥3
4. Замінити заборонене слово на "*"
5. Перший підрядок, що повторюється
6. Підрядок, який повторюється найбільше
7. Анаграмний підрядок
8. Підрядок з однаковими літерами
9. Найменший підрядок, що містить усі літери іншого рядка
10. Підрядок з однаковими символами макс. довжина`);

  let res = "";

  switch (choice) {
    case "1":
      let n = +prompt("Довжина підрядка:");
      let subs = [];
      for (let i = 0; i <= str.length - n; i++) subs.push(str.slice(i, i + n));
      res = JSON.stringify(subs);
      break;
    case "2":
      let arr = prompt("Введи масив рядків через кому:").split(",");
      if (arr.length === 0) res = "";
      else {
        let prefix = arr[0];
        for (let s of arr) {
          while (!s.startsWith(prefix)) prefix = prefix.slice(0, -1);
        }
        res = prefix;
      }
      break;
    case "3":
      res = false;
      for (let i = 0; i < str.length - 2; i++) {
        let sub = str.slice(i, i + 3);
        if (sub === sub.split("").reverse().join("")) { res = true; break; }
      }
      break;
    case "4":
      let banned = prompt("Введи заборонені слова через кому:").split(",");
      let tmp = str;
      banned.forEach(w => {
        let re = new RegExp(w, "gi");
        tmp = tmp.replace(re, m => m[0] + "*".repeat(m.length - 2) + m[m.length - 1]);
      });
      res = tmp;
      break;
    case "5":
      let found = "";
      outer: for (let len = 1; len <= str.length; len++) {
        let map = {};
        for (let i = 0; i <= str.length - len; i++) {
          let sub = str.slice(i, i + len);
          if (map[sub]) { found = sub; break outer; }
          map[sub] = true;
        }
      }
      res = found;
      break;
    case "6":
      let counts = {};
      for (let len = 1; len <= str.length; len++) {
        for (let i = 0; i <= str.length - len; i++) {
          let sub = str.slice(i, i + len);
          counts[sub] = (counts[sub] || 0) + 1;
        }
      }
      res = Object.entries(counts).reduce((a,b)=>b[1]>a[1]?b:a)[0];
      break;
    case "7":
      let str2 = prompt("Введи підрядок для перевірки анаграми:");
      const norm = s => s.split("").sort().join("");
      res = str.length === str2.length && norm(str) === norm(str2);
      break;
    case "8":
      let match = str.match(/(.)\1+/g);
      res = match ? true : false;
      break;
    case "9":
      let t = prompt("Введи інший рядок:");
      let minSub = "";
      for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
          let sub = str.slice(i, j);
          if (t.split("").every(ch => sub.includes(ch))) {
            if (!minSub || sub.length < minSub.length) minSub = sub;
          }
        }
      }
      res = minSub;
      break;
    case "10":
      let maxLen = 0;
      let maxSub = "";
      let matchArr = str.match(/(.)\1+/g);
      if (matchArr) {
        matchArr.forEach(s => { if (s.length > maxLen) { maxLen = s.length; maxSub = s; } });
      }
      res = maxSub ? `true, ${maxSub}` : false;
      break;
    default:
      res = "Невірний вибір.";
  }

  return res;
}
