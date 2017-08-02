// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  var tempVal;
  var sumVal = 0;
  var avgPrice = 0;
  for (i=0;i<data.length;i++) {
    tempVal = data[i].price;
    sumVal += tempVal
  }
  avgPrice = sumVal/data.length;
  return "The average price is $" + Math.ceil (avgPrice * 100) / 100;
}
console.log(question1())


// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
var newArray = [];
for ( i = 0; i < data.length; i++) {
  if (data[i].price >= 14.00 && data[i].price <= 18.00) {
    newArray.push(data[i].title);
  }
}
return newArray
}
console.log(question2())



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  for (i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      return data[i].title + " costs " + data[i].price + " pounds.";
    }
  }
}
console.log(question3())

// 4: Display a list of all items who are made of wood.
function question4 () {
  let woodList = [];
  for (i = 0; i < data.length; i++) {
    for (j = 0; j < data[i].materials.length; j++){
      if (data[i].materials[j] === "wood") {
        woodList.push(data[i].title);
      }
    }
  }
  return woodList;
}
console.log(question4())


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
let newArray = []

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[i].materials.length; j++) {
    if (data[j].materials => [8]) {
    newArray.push(data[i].title, data[i].material.length, data[i].materials);
    }
  }
  return newArray
}

console.log(question5())

// 6: How many items were made by their sellers?
function question6 () {
  let madeList = [];
  for (i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did") {
      madeList.push(data[i].who_made);
    }
  }
  return madeList.length + " items were made by their sellers.";
}
console.log(question6())
