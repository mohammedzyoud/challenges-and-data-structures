const MinStack = require('../MinStack');

describe('MinStack', () => {
  let stack;

  beforeEach(() => {
    stack = new MinStack();
  });

  test('push and getMin', () => {
    stack.push(15);
    expect(stack.getMin()).toBe(15);
    stack.push(7);
    expect(stack.getMin()).toBe(7);
    stack.push(12);
    expect(stack.getMin()).toBe(7);
    stack.push(3);
    expect(stack.getMin()).toBe(3);
  });

  test('pop and getMin', () => {
    stack.push(15);
    stack.push(7);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.getMin()).toBe(7);
    expect(stack.pop()).toBe(7);
    expect(stack.getMin()).toBe(15);
  });

  test('top and isEmpty', () => {
    stack.push(10);
    expect(stack.top()).toBe(10);
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });
});
