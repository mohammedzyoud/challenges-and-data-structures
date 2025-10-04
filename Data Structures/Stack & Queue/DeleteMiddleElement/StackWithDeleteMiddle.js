// DeleteMiddleElement/StackWithDeleteMiddle.js
const { Stack } = require('../StackQueue-Implementation/stack');

class StackWithDeleteMiddle extends Stack {
  deleteMiddle() {
    if (this.isEmpty()) return;

    const tempStack = [];
    const n = this.items.length;
    const mid = n % 2 === 0 ? n / 2 - 1 : Math.floor(n / 2);

    for (let i = 0; i < mid; i++) {
      tempStack.push(this.pop());
    }

    // حذف العنصر الأوسط
    this.pop();

    // إعادة العناصر المؤقتة
    while (tempStack.length) {
      this.push(tempStack.pop());
    }
  }
}

module.exports = { StackWithDeleteMiddle };
