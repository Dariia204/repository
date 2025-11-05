let chas = { godyny: 20, hvylyny: 30, sekundy: 45 };

function pokazatyChas() {
  document.getElementById("result1").innerHTML = 
    `Поточний час: ${chas.godyny}:${chas.hvylyny}:${chas.sekundy}`;
}

function zminytyChas() {
  let plusSekundy = parseInt(document.getElementById("sekundyInput").value);
  if (isNaN(plusSekundy)) return;
  let totalSek = chas.godyny * 3600 + chas.hvylyny * 60 + chas.sekundy + plusSekundy;
  totalSek = (totalSek + 86400) % 86400;
  chas.godyny = Math.floor(totalSek / 3600);
  chas.hvylyny = Math.floor((totalSek % 3600) / 60);
  chas.sekundy = totalSek % 60;
  pokazatyChas();
}

function pokazatyPotocnuDatu() {
  const d = new Date();
  const dniTyzhnya = ["неділя", "понеділок", "вівторок", "середа", "четвер", "п’ятниця", "субота"];
  const misyaci = [
    "січня", "лютого", "березня", "квітня", "травня", "червня",
    "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"
  ];
  document.getElementById("result2_1").innerHTML =
    `Дата: ${d.getDate()} ${misyaci[d.getMonth()]} ${d.getFullYear()} року<br>
     День тижня: ${dniTyzhnya[d.getDay()]}<br>
     Час: ${d.getHours()}:${d.getMinutes().toString().padStart(2, '0')}`;
}

function znajtyOstanniyDen() {
  const rik = parseInt(document.getElementById("rikInput").value);
  const mis = parseInt(document.getElementById("misInput").value);
  if (isNaN(rik) || isNaN(mis)) return;
  const ostanniyDen = new Date(rik, mis, 0).getDate();
  document.getElementById("result2_2").innerHTML = `Останній день місяця: ${ostanniyDen}`;
}

function pokazatySekundy() {
  const now = new Date();
  const startDnia = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const secondsFromStart = Math.floor((now - startDnia) / 1000);
  const secondsToNext = 86400 - secondsFromStart;
  document.getElementById("result2_3").innerHTML =
    `Від початку дня: ${secondsFromStart} сек<br>До наступного дня: ${secondsToNext} сек`;
}

class Car {
  constructor(brend, model, rik) {
    this.brend = brend;
    this.model = model;
    this.rik = rik;
  }
  info() {
    return `Авто: ${this.brend} ${this.model}, ${this.rik} року.`;
  }
}

function pokazatyMashynu() {
  const b = document.getElementById("brandInput").value;
  const m = document.getElementById("modelInput").value;
  const y = document.getElementById("yearInput").value;
  if (!b || !m || !y) return;
  const car = new Car(b, m, y);
  document.getElementById("result3").innerHTML = car.info();
}

class ElectricCar extends Car {
  constructor(brend, model, rik, batareya) {
    super(brend, model, rik);
    this.batareya = batareya;
  }
  charge() {
    return `${this.brend} ${this.model} заряджається... Батарея: ${this.batareya} kWh`;
  }
}

function pokazatyElektro() {
  const b = document.getElementById("eBrandInput").value;
  const m = document.getElementById("eModelInput").value;
  const y = document.getElementById("eYearInput").value;
  const bat = document.getElementById("batteryInput").value;
  if (!b || !m || !y || !bat) return;
  const ev = new ElectricCar(b, m, y, bat);
  document.getElementById("result4").innerHTML = ev.info() + "<br>" + ev.charge();
}

class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

function dodatyChysla() {
  const a = parseFloat(document.getElementById("ch1").value);
  const b = parseFloat(document.getElementById("ch2").value);
  if (isNaN(a) || isNaN(b)) return;
  const sum = MathHelper.add(a, b);
  document.getElementById("result5").innerHTML = `Сума: ${sum}`;
}

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  totalCost() {
    return this.price * this.quantity;
  }
}

class DiscountProduct extends Product {
  constructor(name, price, quantity, discount) {
    super(name, price, quantity);
    this.discount = discount;
  }
  totalCost() {
    const base = super.totalCost();
    const znyzhka = base * (this.discount / 100);
    return base - znyzhka;
  }
  info() {
    return `${this.name}: ${this.quantity} × ${this.price} грн = ${(super.totalCost()).toFixed(2)} грн. 
    Знижка ${this.discount}% → ${(this.totalCost()).toFixed(2)} грн`;
  }
}

function pokazatyProdukt() {
  const name = document.getElementById("nazvaInput").value;
  const price = parseFloat(document.getElementById("cenaInput").value);
  const quantity = parseInt(document.getElementById("kilkistInput").value);
  const discount = parseFloat(document.getElementById("znyzhkaInput").value);
  if (!name || isNaN(price) || isNaN(quantity) || isNaN(discount)) return;
  const product = new DiscountProduct(name, price, quantity, discount);
  document.getElementById("result6").innerHTML = product.info();
}

function ochystyty(id) {
  document.getElementById(id).innerHTML = "";
  document.querySelectorAll("input").forEach(i => i.value = "");
}
