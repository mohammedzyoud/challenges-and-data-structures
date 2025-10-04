class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.front) {
      this.front = this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  dequeue() {
    if (!this.front) {
      throw new Error("Queue is empty");
    }
    const value = this.front.value;
    this.front = this.front.next;
    if (!this.front) this.rear = null;
    return value;
  }

  peek() {
    if (!this.front) {
      throw new Error("Queue is empty");
    }
    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }

  printQueue() {
    let current = this.front;
    let output = "Front -> ";
    while (current) {
      output += `${current.value} -> `;
      current = current.next;
    }
    console.log(output + "Null");
  }
}

module.exports = Queue;
