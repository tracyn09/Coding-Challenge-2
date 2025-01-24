// Task 1
let products = ["MacBook Pro", "Airpods", "Airpod Max", "IPad Pro", "Apple Pencil"];
console.log(products);

 // Adding New Product
products.push("IPhone 16");
console.log(products);

// Removing Last Product Listed
let removed = products.pop();
console.log(removed);

// Updated Product List
console.log(products);

// Task 2
let scores = ["80", "76", "90", "89", "94"];
scores = scores.map(score => Number(score)); // Ensuring scores are viewed as Numbers
scores[1] = 79;
console.log(scores);

// Averaging Array
let averageScore = scores.reduce((sum, num) => sum + num + 0)/ scores.length;

// Logging Updated Array and Average Score
console.log("Scores:", scores);
console.log("Average Score: ", averageScore); 

// Task 3
let employee = ["Joseph", "19", "Finance"]
var isActive = true
employee[2] = "Accounting" // Updating Dept
employee.push("Auditor") // Adding New Property
console.log(employee);

// Task 4
let customers = [ ["Sandy", "san.hoover@gmail.com", "purchase amount: 85"], ["Andrew", "drew.mc@icloud.com", "purchase amount: 79"], ["Dereck", "dereck.ll@gmail.com", "purchase amount: 60"] ]
customers.push(["Molly", "lo.sendra@gmail.com", "purchase amount: 89"])
console.log(customers);

//Task 5
let order = [ [orderID = "10589"], [customerName = "Henry Whalpool"], [subtotal = 89.78]]
let taxRate= .10
function calculatedTax(subtotal, taxRate) {return subtotal * taxRate};
let taxAmount = calculatedTax(subtotal, taxRate);

console.log('Order ID:', orderID)
console.log('Customer Name:', customerName)
console.log('Subtotal: $',subtotal)
console.log('Tax Amount: $',taxAmount);

