
const x = "Chocolate"
const y = "Fruity"
const z = "Vanilla"

const cookiePrice = 80


alert(`Hello we are happy to serve you Cookies today! On our menu we have ${x}, ${y} and ${z}`);
const orderName = prompt(`what would you like to have?`);

// Function to check name
const checkOrderName = (orderName) => {
  if (orderName == "Chocolate" || orderName == "Fruity" || orderName == "Vanilla") {
    return true;
  } else {
    return false;
  }
}

// invocing that function
const test = checkOrderName(orderName);

// Function to output variable of total cost of order
const totalCost = (orderQuantity) => {
  orderTotal = (orderQuantity*cookiePrice);
  return orderTotal;
}

//Function to calculating cooking time
const cookingTime = (orderQuantity) => {
  if (orderQuantity<3) { 
    return (10);
  }
  else if (orderQuantity<6) { 
    return (15);
  }
  else { 
    return (20);
  }
}

const checkOrder = (test) => {
  if (test=== true) {
    orderQuantity = prompt(`How many boxes of ${orderName} cookies would you like?`);
    orderTotal = totalCost(orderQuantity);
    time = cookingTime(orderQuantity);
    alert
    document.getElementById("cookies").innerHTML = `I will start baking the ${orderName} cookies now, it will take ${time} minutes, the total bill is ${orderTotal} kronor - But for you it will be FREE because you are special!`;
  } else {
    alert
    document.getElementById("cookies").innerHTML = `Have another look at the menu`;
  }
}
//invoce
checkOrder(test);
