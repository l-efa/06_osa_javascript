// user input elements
let form = document.querySelector(".form-container");
let pancakeType = document.getElementById("type");
let checkboxes = document.querySelectorAll("input[type=checkbox]");
let customerName = document.getElementById("customerName");
let orderButton = document.getElementById("order_button");
let getOrdersButton = document.getElementById("get-orders");

// finished order elements
let orderTypeElement = document.getElementById("order_type");
let orderToppingsElement = document.getElementById("order_toppings");
let orderExtrasElement = document.getElementById("order_extras");
let orderNameElement = document.getElementById("order_name");
let orderPriceElement = document.getElementById("order_price");
let totalPriceElement = document.getElementById("totalPrice");

// order variables
let pancakeStyleVariables = [];
let pancakeToppingVariables = [];
let pancakeExtrasVariables = [];
let finalToppings;
let finalExtras;

let sum = 0;
let styleValue;
let toppingValue;
let extrasValue;
let orderName;

let orders;
let orderNumber = 100;

window.onload = function () {
  refresh();
};

function refresh() {
  console.log("pancaketype: " + pancakeType.value);
  pancakeStyleVariables[0] = pancakeType.value;

  let pancakeTypeText =
    pancakeType.options[pancakeType.selectedIndex].textContent;
  console.log(pancakeTypeText);
  pancakeStyleVariables[1] = pancakeTypeText;

  console.log(pancakeStyleVariables);

  styleValue = parseInt(pancakeType.value);
  getToppingValues(checkboxes);
  sum = styleValue + toppingValue + extrasValue;
  console.log("sum: " + sum);

  orderName = customerName.value;

  showOrder(
    pancakeStyleVariables,
    pancakeToppingVariables,
    pancakeExtrasVariables,
    orderName,
    sum
  );
}

function getToppingValues(checkboxes) {
  toppingValue = 0;
  extrasValue = 0;
  pancakeToppingVariables = [];
  pancakeExtrasVariables = [];

  for (box of checkboxes) {
    console.log(box.dataset.value);
    if (box.checked) {
      if (box.dataset.category === "toppings") {
        let topping = {
          [box.dataset.name]: box.dataset.value,
        };
        pancakeToppingVariables.push(topping);

        toppingValue += parseInt(box.dataset.value);
      } else if (box.dataset.category === "extras") {
        let extra = {
          [box.dataset.name]: box.dataset.value,
        };

        pancakeExtrasVariables.push(extra);

        extrasValue += parseInt(box.dataset.value);
      }
    }
  }

  console.log(pancakeToppingVariables);
  console.log(pancakeExtrasVariables);
  console.log("toppingvalue: " + toppingValue);
}

let showOrderType;

function showOrder(type, toppings, extras, name, price) {
  showOrderType = type[1];

  orderTypeElement.textContent = type[1];
  //----------------------------------------
  finalToppings = [];
  finalExtras = [];
  console.log(extras);

  toppings.forEach((topping) => {
    // Access the key-value pair inside each object
    for (let key in topping) {
      finalToppings.push(key);
    }
  });

  console.log(finalToppings);
  orderToppingsElement.textContent = finalToppings;
  //-----------------------------------------
  extras.forEach((extra) => {
    // Access the key-value pair inside each object
    for (let key in extra) {
      finalExtras.push(key);
    }
  });

  orderExtrasElement.textContent = finalExtras;
  //----------------------------------------
  orderNameElement.textContent = name;
  //-----------------------------------------
  orderPriceElement.textContent = price + "€";
  //-----------------------------------------
  totalPriceElement.textContent = price + "€";
}

function makeOrder() {
  orders = JSON.parse(localStorage.getItem("orders")) || [];

  let orderNumber1 = orderNumber++;
  let makeOrderType = showOrderType;
  let makeOrderToppings = finalToppings;
  let makeOrderExtras = finalExtras;
  let makeOrderName = orderName;
  let makeOrderPrice = sum;

  let order = new Order(
    orderNumber1,
    makeOrderType,
    makeOrderToppings,
    makeOrderExtras,
    makeOrderName,
    makeOrderPrice
  );

  console.log(order);

  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));
}

form.addEventListener("change", refresh);
orderButton.addEventListener("click", makeOrder);

function Order(orderNumber1, type, toppings, extras, orderName, price) {
  this.orderNumber = orderNumber1;
  this.type = type;
  this.toppings = toppings;
  this.extras = extras;
  this.orderName = orderName;
  this.price = price;
  this.ready = false;
}
