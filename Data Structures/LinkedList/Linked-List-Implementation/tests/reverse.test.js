
const { LinkedList } = require('../reverse/reverse');

describe('LinkedList Reverse', () => {
  test('reverses a non-empty list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.reverse();

    const values = [];
    let current = list.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    expect(values).toEqual([3, 2, 1]);
  });

  test('reverses a single-node list', () => {
    const list = new LinkedList();
    list.append(10);
    list.reverse();

    expect(list.head.value).toBe(10);
    expect(list.head.next).toBeNull();
  });

  test('reverses an empty list', () => {
    const list = new LinkedList();
    list.reverse();

    expect(list.head).toBeNull();
  });

  test('reverses a list with duplicate values', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(2);
    list.append(3);
    list.reverse();

    const values = [];
    let current = list.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    expect(values).toEqual([3, 2, 2, 1]);
  });
});
