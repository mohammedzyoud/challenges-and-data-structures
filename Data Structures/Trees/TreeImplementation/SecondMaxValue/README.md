# Binary Tree - Second Maximum Value

## Problem Domain
Find the **second largest unique value** in a binary tree using a recursive approach.

---

## Inputs and Outputs
| Input | Output |
|-------|--------|
| Binary Tree [10, 5, 20, 3, 7, 15, 25] | 20 |
| Empty Tree | Error: Tree is empty |
| Single Node [10] | Error: No second maximum value found |
| Tree with negative values [-10, -20, -5] | -10 |

---

## Edge Cases
- Empty tree → should throw `"Tree is empty"`.
- Single node → should throw `"No second maximum value found"`.
- Duplicate maximum values → should return the next distinct lower value.

---

## Visual Representation
