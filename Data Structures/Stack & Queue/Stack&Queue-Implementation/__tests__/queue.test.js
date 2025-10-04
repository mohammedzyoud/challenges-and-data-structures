const Queue = require('../queue');

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('enqueue adds a node to the end', () => {
    queue.enqueue(10);
    expect(queue.peek()).toBe(10);
    queue.enqueue(20);
    expect(queue.peek()).toBe(10); // Front stays the same
  });

  test('dequeue removes and returns the front node', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(20);
  });

  test('peek returns the front node without removing it', () => {
    queue.enqueue(10);
    expect(queue.peek()).toBe(10);
    expect(queue.peek()).toBe(10);
  });

  test('isEmpty returns true if queue is empty', () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(5);
    expect(queue.isEmpty()).toBe(false);
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  test('dequeue on empty queue throws error', () => {
    expect(() => queue.dequeue()).toThrow("Queue is empty");
  });

  test('peek on empty queue throws error', () => {
    expect(() => queue.peek()).toThrow("Queue is empty");
  });
});
