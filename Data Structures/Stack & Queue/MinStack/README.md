# Min Stack Challenge

## Problem Domain
Implement a **MinStack** class in JavaScript that supports standard stack operations and can retrieve the minimum element in constant time (`O(1)`).

### Supported Methods:
- `push(value)` — add an element to the top of the stack  
- `pop()` — remove and return the top element  
- `top()` — return the top element without removing it  
- `isEmpty()` — check if stack is empty  
- `getMin()` — return the minimum element  
- `printStack()` — print the stack from top to bottom  

---

## Inputs & Expected Outputs

| Operation                           | Output / State                  |
|------------------------------------|--------------------------------|
| push(15)                           | Stack: Top -> 15               |
| push(7)                            | Stack: Top -> 7 -> 15          |
| push(12)                           | Stack: Top -> 12 -> 7 -> 15    |
| push(3)                            | Stack: Top -> 3 -> 12 -> 7 -> 15, Min: 3 |
| pop()                               | Removes 3, Min: 7              |
| push(2)                             | Stack: Top -> 2 -> 12 -> 7 -> 15, Min: 2 |
| top()                               | 2                               |
| isEmpty()                           | false                           |

---

## Edge Cases
- Empty stack — operations like `pop()`, `top()`, or `getMin()` should throw an error.  
- Single element stack — `getMin()` should return that element.  
- Multiple elements with duplicates — `getMin()` still works correctly.  

---

## Visual / Whiteboard
![Whiteboard](../docs/minstack-whiteboard.png)

---

## Console Output
![Console Output](../docs/minstack-console-output.png)

---

## Algorithm
1. Maintain two arrays: `stack` for all elements and `minStack` for tracking minimums.  
2. **push(value)**:  
   - Add value to `stack`  
   - If `minStack` is empty or `value <= minStack top`, push to `minStack`  
3. **pop()**:  
   - Remove value from `stack`  
   - If value equals `minStack top`, pop from `minStack`  
4. **getMin()**: Return top of `minStack`  
5. **top()**: Return last element of `stack`  
6. **isEmpty()**: Return `stack.length === 0`  

---

## Real Code Example

```javascript
const MinStack = require('./MinStack');

const stack = new MinStack();

stack.push(15);
stack.push(7);
stack.push(12);
stack.push(3);

stack.printStack(); // Top -> 3 -> 12 -> 7 -> 15 -> Null
console.log("Min:", stack.getMin()); // 3

stack.pop();
stack.printStack(); // Top -> 12 -> 7 -> 15 -> Null
console.log("Min:", stack.getMin()); // 7

stack.push(2);
stack.printStack(); // Top -> 2 -> 12 -> 7 -> 15 -> Null
console.log("Min:", stack.getMin()); // 2

console.log(stack.top()); // 2
console.log(stack.isEmpty()); // false
