class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    if (!this.top) {
      throw new Error("Stack is empty");
    }
    const value = this.top.value;
    this.top = this.top.next;
    return value;
  }

  peek() {
    if (!this.top) {
      throw new Error("Stack is empty");
    }
    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }

  printStack() {
    let current = this.top;
    let output = "Top -> ";
    while (current) {
      output += `${current.value} -> `;
      current = current.next;
    }
    console.log(output + "Null");
  }
}

module.exports = Stack;
