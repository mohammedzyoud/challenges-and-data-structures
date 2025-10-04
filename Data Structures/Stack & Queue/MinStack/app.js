const MinStack = require('./MinStack');

const stack = new MinStack();

// Push elements
stack.push(15);
stack.push(7);
stack.push(12);
stack.push(3);

console.log("After pushing elements:");
stack.printStack();
console.log("Min:", stack.getMin());

// Pop top element
console.log("\nPopping top element:");
stack.pop();
stack.printStack();
console.log("Min:", stack.getMin());

// Push another element
console.log("\nPushing 2:");
stack.push(2);
stack.printStack();
console.log("Min:", stack.getMin());

// Peek top element
console.log("\nTop element:");
console.log(stack.top());

// Check if stack is empty
console.log("\nIs stack empty?");
console.log(stack.isEmpty());
