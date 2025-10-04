// DeleteMiddleElement/app.js
const { StackWithDeleteMiddle } = require('./StackWithDeleteMiddle');

const stack = new StackWithDeleteMiddle();
stack.push(7);
stack.push(14);
stack.push(3);
stack.push(8);
stack.push(5);

console.log("Original Stack:");
stack.printStack();

stack.deleteMiddle();
console.log("After deleting middle:");
stack.printStack();

stack.push(2);
stack.push(9);
stack.push(11);
console.log("After pushing more elements:");
stack.printStack();

stack.deleteMiddle();
console.log("After deleting middle again:");
stack.printStack();
