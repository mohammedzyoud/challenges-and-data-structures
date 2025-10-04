# Stack and Queue Implementation

## Problem Domain
Implement basic **Stack** and **Queue** data structures using JavaScript.  
- Stack: Last In First Out (LIFO)  
- Queue: First In First Out (FIFO)

---

## Inputs & Expected Outputs

### Stack
| Operation        | Input       | Expected Output |
|-----------------|------------|----------------|
| Push             | 10         | Top -> 10      |
| Push             | 20         | Top -> 20 -> 10 |
| Pop              | -          | 20             |
| Peek             | -          | 10             |
| IsEmpty          | -          | false / true   |

### Queue
| Operation        | Input       | Expected Output |
|-----------------|------------|----------------|
| Enqueue          | 10         | Front -> 10    |
| Enqueue          | 20         | Front -> 10 -> 20 |
| Dequeue          | -          | 10             |
| Peek             | -          | 20             |
| IsEmpty          | -          | false / true   |

---

## Edge Cases
- Pop or Dequeue on an empty structure should throw an error.
- Peek on an empty structure should throw an error.

---

## Visual / Whiteboard
### Stack (LIFO)
