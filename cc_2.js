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

