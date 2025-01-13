let getOrdersButton = document.getElementById("get-orders");
let orderList = document.getElementById("order-list");

function getOrders() {
  let orders = JSON.parse(localStorage.getItem("orders"));

  let orderGrid = document.createElement("div");
  orderList.innerHTML = "";

  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];

    const orderElement = document.createElement("div");
    orderElement.classList.add("order-item");

    const orderNumber = document.createElement("h3");
    orderNumber.textContent = `Order #${order.orderNumber}`;
    orderElement.appendChild(orderNumber);

    const orderType = document.createElement("p");
    orderType.textContent = `Type: ${order.type}`;
    orderElement.appendChild(orderType);

    const toppings = document.createElement("p");
    toppings.textContent = `Toppings: ${order.toppings.join(", ")}`;
    orderElement.appendChild(toppings);

    const extras = document.createElement("p");
    extras.textContent = `Extras: ${order.extras.join(", ")}`;
    orderElement.appendChild(extras);

    const orderName = document.createElement("p");
    orderName.textContent = `Order Name: ${order.orderName}`;
    orderElement.appendChild(orderName);

    const price = document.createElement("p");
    price.textContent = `Price: €${order.price}`;
    orderElement.appendChild(price);

    const readyStatusContainer = document.createElement("div");
    readyStatusContainer.classList.add("ready-status-container");

    const readyStatus = document.createElement("p");
    readyStatus.textContent = `Ready: ${order.ready ? "Yes" : "No"}`;
    readyStatusContainer.appendChild(readyStatus);

    const readyButton = document.createElement("button");
    readyButton.textContent = "Not ready";

    readyButton.classList.add("ready-button"); // Add a class for styling
    readyButton.setAttribute("id", order.orderNumber);

    readyButton.addEventListener("click", isReady);

    readyStatusContainer.appendChild(readyButton);

    orderElement.appendChild(readyStatusContainer);

    orderList.appendChild(orderElement);
  }
}

getOrdersButton.addEventListener("click", getOrders);

function isReady(event) {
  const buttonElement = event.target;
  const buttonId = event.target.id;
  console.log(buttonId);
  console.log(buttonElement.textContent);

  const allOrders = document.querySelectorAll(".order-item");
  let orderElement = null;

  // Loop through each order card and find the one with the matching order number
  allOrders.forEach((order) => {
    const orderNumberElement = order.querySelector("h3");
    console.log(orderNumberElement);
    if (
      orderNumberElement &&
      orderNumberElement.textContent.includes(`Order #${buttonId}`)
    ) {
      orderElement = order; // Found the matching order element
    }
  });

  // Check if the order element was found
  if (orderElement) {
    console.log("Order Element Found:", orderElement);
    if (buttonElement.textContent == "Not ready") {
      orderElement.style.backgroundColor = "Red";
      buttonElement.textContent = "Ready";
    } else if (buttonElement.textContent == "Ready") {
      orderElement.style.backgroundColor = "Green";
      buttonElement.textContent = "Not ready";
    }
  } else {
    console.log("No order element found with the matching order number");
  }
}
