const BinarySearchTree = require('./BinarySearchTree');

const bst = new BinarySearchTree();
bst.add(10);
bst.add(5);
bst.add(15);
bst.add(7);

bst.print();

console.log("Contains 7?", bst.contains(7)); // true
bst.remove(5);
console.log("Contains 5?", bst.contains(5)); // false
