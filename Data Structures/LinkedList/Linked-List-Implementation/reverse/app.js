
const { LinkedList } = require('./reverse');

const list1 = new LinkedList();
list1.append(1);
list1.append(2);
list1.append(3);
list1.append(4);

console.log('Original List:');
list1.printList();

list1.reverse();

console.log('Reversed List:');
list1.printList();
 

const list2 = new LinkedList();
list2.append(10);
console.log('\nSingle-node List:');
list2.printList();
list2.reverse();
console.log('After Reverse:');
list2.printList();


const list3 = new LinkedList();
console.log('\nEmpty List:');
list3.printList();
list3.reverse();
console.log('After Reverse:');
list3.printList();
