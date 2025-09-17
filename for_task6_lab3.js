let data = {
      "СРСР": ["Йосип Сталін", "Володимир Ленін", "Леонід Брежнєв"],
      "Німеччина": ["Адольф Гітлер", "Еріх Хонеккер"],
      "Італія": ["Беніто Муссоліні"],
      "Інші країни": ["Кім Чен Ин", "Мао Цзедун", "Кім Ір Сен", "Фідель Кастро"]
    };

    let tree = document.getElementById("tree");

    for (let category in data) {
      let li = document.createElement("li");

      let span = document.createElement("span");
      span.textContent = category;
      li.appendChild(span);

      let ul = document.createElement("ul");
      data[category].forEach(name => {
        let subLi = document.createElement("li");
        subLi.textContent = name;
        ul.appendChild(subLi);
      });
      li.appendChild(ul);

      span.addEventListener("click", function() {
        if (ul.style.display === "none" || ul.style.display === "") {
          ul.style.display = "block";
        } else {
          ul.style.display = "none";
        }
      });

      tree.appendChild(li);
    }