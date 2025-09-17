const digits = ["0","1","2","3","4","5","6","7","8","9"];
const letters_ua = [
  "а","б","в","г","ґ","д","е","є","ж","з",
  "и","і","ї","й","к","л","м","н","о",
  "п","р","с","т","у","ф","х","ц",
  "ч","ш","щ","ь","ю","я", " "
];

const screenKeyboard = document.getElementById('screenKeyboard');

function createKeyboard() {

  const digitKeys = digits.map(function(d) {
    return '<button onclick="addSymbol(\'' + d + '\')">' + d + '</button>';
  }).join('') + '<br>';


  const letterKeys = letters_ua.map(function(l, i) {
    var br = i % 11 === 0 ? '<br>' : '';
    return br + '<button onclick="addSymbol(\'' + l + '\')">' + l + '</button>';
  }).join('');

  screenKeyboard.innerHTML = digitKeys + letterKeys;
}

function addSymbol(key) {
  document.getElementById('display').value += key;
}

function clean() {
  document.getElementById('display').value = "";
}

createKeyboard();
