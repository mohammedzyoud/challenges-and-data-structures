
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let nextNode = null;

    while (current) {
      nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }

    this.head = prev;
  }

  printList() {
    let output = 'Head -> ';
    let current = this.head;
    while (current) {
      output += `${current.value} -> `;
      current = current.next;
    }
    output += 'Null';
    console.log(output);
    return output;
  }
}

module.exports = { LinkedList, Node };
