
class Node {
  constructor(value) {
    this.value = value;  // The value stored in this node
    this.left = null;    // Reference to the left child
    this.right = null;   // Reference to the right child
  }
}

// Export Node class to be used in other files
module.exports = Node;
