class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(value) {
    this.stack.push(value);
    if (this.minStack.length === 0 || value <= this.getMin()) {
      this.minStack.push(value);
    }
  }

  pop() {
    if (this.isEmpty()) throw new Error("Stack is empty");
    const value = this.stack.pop();
    if (value === this.getMin()) this.minStack.pop();
    return value;
  }

  top() {
    if (this.isEmpty()) throw new Error("Stack is empty");
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  getMin() {
    if (this.minStack.length === 0) throw new Error("Stack is empty");
    return this.minStack[this.minStack.length - 1];
  }

  printStack() {
    console.log("Top -> " + this.stack.slice().reverse().join(" -> ") + " -> Null");
  }
}

module.exports = MinStack;
