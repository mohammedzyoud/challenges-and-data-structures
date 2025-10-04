const { LinkedList } = require('../linkedList'); // adjust path if needed

LinkedList.prototype.rotateLeft = function(k) {
    if (!this.head || k === 0) return;

    let length = 0;
    let current = this.head;

    while (current) {
        length++;
        current = current.next;
    }

    if (k < 0) k = length + k; 
    k = k % length;
    if (k === 0) return;

    let prev = null;
    current = this.head;
    for (let i = 0; i < k; i++) {
        prev = current;
        current = current.next;
    }

    prev.next = null;
    let tail = current;
    while (tail.next) tail = tail.next;
    tail.next = this.head;
    this.head = current;
};

module.exports = LinkedList;
