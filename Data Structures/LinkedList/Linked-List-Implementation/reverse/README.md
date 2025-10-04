# Linked List Reverse Challenge

## Problem Domain
Implement a function to reverse a linked list in-place without creating a new list. The `head` of the linked list should point to the last node after reversal.

---

## Inputs & Expected Outputs

| Input List         | Expected Output       |
|-------------------|--------------------|
| 1 -> 2 -> 3 -> 4  | 4 -> 3 -> 2 -> 1   |
| 10                | 10                 |
| (empty)           | (empty)            |
| 1 -> 2 -> 2 -> 3  | 3 -> 2 -> 2 -> 1   |

---

## Edge Cases
- Empty list (`head` is null)
- Single-node list (no change after reversal)
- List with duplicate values

---

## Visual / Whiteboard
![Whiteboard](../docs/reverse-whiteboard.png)

---

## Console Output
![Console Output](../docs/console-output.png)

---

## Algorithm
1. Initialize three pointers: `prev = null`, `current = head`, `nextNode = null`.
2. Traverse the linked list:
   - Store `current.next` in `nextNode`.
   - Set `current.next = prev`.
   - Move `prev` to `current`.
   - Move `current` to `nextNode`.
3. After traversal, set `head = prev`.

---

## Real Code Example

```javascript
const { LinkedList } = require('./reverse');

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.reverse();
list.printList(); // Output: Head -> 3 -> 2 -> 1 -> Null

// Single-node list
const singleNodeList = new LinkedList();
singleNodeList.append(10);
singleNodeList.reverse();
singleNodeList.printList(); // Output: Head -> 10 -> Null

// Empty list
const emptyList = new LinkedList();
emptyList.reverse();
emptyList.printList(); // Output: Head -> Null
