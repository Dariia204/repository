    const a = document.getElementById("a");
    const b = document.getElementById("b");
    const h = document.getElementById("h");
    const result = document.getElementById("result");

    function calc() {
      let A = +a.value, B = +b.value, H = +h.value;
      if (A > 0 && B > 0 && H > 0) {
        result.textContent = "Площа: " + ((A + B) / 2 * H).toFixed(2);
      } else {
        result.textContent = "Площа: —";
      }
    }

    a.oninput = calc;
    b.oninput = calc;
    h.oninput = calc;