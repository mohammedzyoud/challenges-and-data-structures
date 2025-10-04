const { LinkedList } = require("../rotateLinkedList");

describe("Rotate Linked List", () => {
  test("Rotates list by 2 positions", () => {
    const list = new LinkedList();
    [1, 2, 3, 4, 5].forEach(num => list.append(num));
    list.rotate(2);

    let current = list.head;
    const result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    expect(result).toEqual([4, 5, 1, 2, 3]);
  });

  test("Rotating empty list does nothing", () => {
    const list = new LinkedList();
    list.rotate(3);
    expect(list.head).toBeNull();
  });

  test("Rotating by 0 does nothing", () => {
    const list = new LinkedList();
    [1, 2, 3].forEach(num => list.append(num));
    list.rotate(0);
    let current = list.head;
    const result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    expect(result).toEqual([1, 2, 3]);
  });
});
