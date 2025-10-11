const BinaryTree = require('./BinaryTree');
const TNode = require('./TNode');

class BinarySearchTree extends BinaryTree {
  add(value) {
    const newNode = new TNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      } else {
        // Duplicate values not allowed
        break;
      }
    }
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }

  remove(value) {
    const removeNode = (node, value) => {
      if (!node) return null;
      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        // Node found
        if (!node.left && !node.right) return null; // Leaf node
        if (!node.left) return node.right;
        if (!node.right) return node.left;
        // Two children
        let temp = node.right;
        while (temp.left) temp = temp.left;
        node.value = temp.value;
        node.right = removeNode(node.right, temp.value);
        return node;
      }
    };
    this.root = removeNode(this.root, value);
  }
}

module.exports = BinarySearchTree;
