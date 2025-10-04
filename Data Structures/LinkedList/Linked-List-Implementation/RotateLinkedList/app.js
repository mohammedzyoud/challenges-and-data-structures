const { LinkedList } = require("./rotateLinkedList");

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log("Original List:");
list.printList();

list.rotate(2);
console.log("After Rotating by 2:");
list.printList();

const singleNode = new LinkedList();
singleNode.append(10);
console.log("\nSingle Node List:");
singleNode.printList();
singleNode.rotate(1);
console.log("After Rotating by 1:");
singleNode.printList();

const emptyList = new LinkedList();
console.log("\nEmpty List:");
emptyList.printList();
emptyList.rotate(3);
console.log("After Rotating by 3:");
emptyList.printList();
