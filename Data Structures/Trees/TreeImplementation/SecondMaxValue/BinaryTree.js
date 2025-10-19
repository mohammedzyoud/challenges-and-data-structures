const Node = require('./Node');  // Import Node class

class BinaryTree {
  constructor() {
    this.root = null;
  }

  findSecondMax() {
    if (!this.root) throw new Error("Tree is empty");

    let max = -Infinity;
    let secondMax = -Infinity;

    const traverse = (node) => {
      if (!node) return;
      if (node.value > max) {
        secondMax = max;
        max = node.value;
      } else if (node.value < max && node.value > secondMax) {
        secondMax = node.value;
      }
      traverse(node.left);
      traverse(node.right);
    };

    traverse(this.root);
    if (secondMax === -Infinity)
      throw new Error("No second maximum value found");
    return secondMax;
  }
}

module.exports = { BinaryTree, Node }; // Export both classes for Jest tests
