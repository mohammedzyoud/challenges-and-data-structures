const Stack = require('../stack');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('push adds a node to the top', () => {
    stack.push(10);
    expect(stack.peek()).toBe(10);
    stack.push(20);
    expect(stack.peek()).toBe(20);
  });

  test('pop removes and returns the top node', () => {
    stack.push(10);
    stack.push(20);
    expect(stack.pop()).toBe(20);
    expect(stack.pop()).toBe(10);
  });

  test('peek returns the top node without removing it', () => {
    stack.push(10);
    expect(stack.peek()).toBe(10);
    expect(stack.peek()).toBe(10); // still 10
  });

  test('isEmpty returns true if stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(5);
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  test('pop on empty stack throws error', () => {
    expect(() => stack.pop()).toThrow("Stack is empty");
  });

  test('peek on empty stack throws error', () => {
    expect(() => stack.peek()).toThrow("Stack is empty");
  });
});
