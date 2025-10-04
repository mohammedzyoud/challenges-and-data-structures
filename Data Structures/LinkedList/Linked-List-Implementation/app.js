const { LinkedList } = require("./linkedList");

const list = new LinkedList();
list.add(5);
list.add(10);
list.add(20);
list.add(30);

console.log("Initial list:");
list.printList();

list.remove(10);
console.log("After removing 10:");
list.printList();

console.log("Check if 20 exists:", list.includes(20));
console.log("Check if 10 exists:", list.includes(10));

list.insertAt(15, 2);
console.log("After inserting 15 at index 2:");
list.printList();
