# Delete Middle Element of a Stack

## Problem Domain
Implement a method to delete the middle element of a stack in JavaScript. If the stack has an even number of elements, remove the **lower middle element**. The stack order should remain intact after deletion.

---

## Inputs & Expected Outputs

| Input Stack              | After deleteMiddle()       |
|--------------------------|--------------------------|
| 7 -> 14 -> 3 -> 8 -> 5   | 7 -> 14 -> 8 -> 5        |
| 11 -> 9 -> 2 -> 5 -> 8 -> 14 -> 7 | 11 -> 9 -> 2 -> 8 -> 14 -> 7 |
| 5                        | (empty)                  |
| (empty)                  | (empty)                  |

---

## Edge Cases
- Empty stack → nothing happens  
- Stack with one element → becomes empty  
- Stack with even number of elements → delete lower middle element  

---

## Visual / Whiteboard
![Whiteboard](../docs/delete-middle-whiteboard.png)

---

## Console Output
![Console Output](../docs/delete-middle-console-output.png)

---

## Algorithm

1. Check if the stack is empty; if yes, return.  
2. Compute `mid` index:
   - If `n` (number of elements) is even: `mid = n/2 - 1`  
   - If `n` is odd: `mid = Math.floor(n/2)`  
3. Use a temporary stack to pop elements until reaching `mid`.  
4. Pop the middle element.  
5. Push back elements from the temporary stack to restore order.

---

## Real Code Example

```javascript
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
console.log("\nAfter deleting middle element:");
stack.printStack();

stack.push(2);
stack.push(9);
stack.push(11);

console.log("\nAfter pushing 2, 9, 11:");
stack.printStack();

stack.deleteMiddle();
console.log("\nAfter deleting middle element again:");
stack.printStack();
