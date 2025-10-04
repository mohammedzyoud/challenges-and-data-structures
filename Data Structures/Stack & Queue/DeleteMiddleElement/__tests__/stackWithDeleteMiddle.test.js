const { StackWithDeleteMiddle } = require('../StackWithDeleteMiddle');

describe('StackWithDeleteMiddle', () => {
  test('Delete middle from odd-sized stack', () => {
    const stack = new StackWithDeleteMiddle();
    [1, 2, 3].forEach(n => stack.push(n));
    stack.deleteMiddle();
    expect(stack.items).toEqual([3, 1]);
  });

  test('Delete middle from even-sized stack', () => {
    const stack = new StackWithDeleteMiddle();
    [1, 2, 3, 4].forEach(n => stack.push(n));
    stack.deleteMiddle();
    expect(stack.items).toEqual([4, 3, 1]);
  });

  test('Delete middle from empty stack', () => {
    const stack = new StackWithDeleteMiddle();
    expect(stack.deleteMiddle()).toBeNull();
  });

  test('Delete middle from single-element stack', () => {
    const stack = new StackWithDeleteMiddle();
    stack.push(10);
    expect(stack.deleteMiddle()).toBe(10);
    expect(stack.isEmpty()).toBe(true);
  });
});
