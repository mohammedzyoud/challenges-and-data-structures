# Rotate Linked List Challenge

## Problem Domain
Implement a function to rotate a linked list to the right by `k` places.
The rotation means moving the last `k` nodes to the front of the list.

---

## Example

| Input List | k | Expected Output |
|-------------|---|-----------------|
| 1 -> 2 -> 3 -> 4 -> 5 | 2 | 4 -> 5 -> 1 -> 2 -> 3 |
| 10 -> 20 -> 30 | 1 | 30 -> 10 -> 20 |
| (empty) | 3 | (empty) |

---

## Algorithm
1. Compute the length of the linked list.
2. Find the new head after rotating `k % length` times.
3. Reconnect the tail to the old head.
4. Update the head pointer.

---

## Visualization
![Rotate Example](../docs/rotate-whiteboard.png)

---

## Console Output
![Console Output](../docs/rotate-console-output.png)
