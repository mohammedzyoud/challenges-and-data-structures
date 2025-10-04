const { LinkedList } = require("./linkedList");

describe("LinkedList", () => {
    let list;

    beforeEach(() => {
        list = new LinkedList();
    });

    test("add nodes to the end", () => {
        list.add(5);
        list.add(10);
        list.add(20);
        expect(list.head.data).toBe(5);
        expect(list.head.next.data).toBe(10);
    });

    test("remove node by value", () => {
        list.add(5);
        list.add(10);
        list.add(20);
        list.remove(10);
        expect(list.includes(10)).toBe(false);
        expect(list.includes(20)).toBe(true);
    });

    test("includes() checks if a value exists", () => {
        list.add(5);
        list.add(10);
        expect(list.includes(5)).toBe(true);
        expect(list.includes(15)).toBe(false);
    });

    test("insertAt() inserts node at correct index", () => {
        list.add(5);
        list.add(10);
        list.add(20);
        list.insertAt(15, 2);
        expect(list.includes(15)).toBe(true);
        expect(list.head.next.next.data).toBe(15);
    });

    test("insertAt throws error for out-of-bounds index", () => {
        list.add(5);
        expect(() => list.insertAt(10, 5)).toThrow("Index out of bounds");
    });

    test("printList on empty list", () => {
        console.log = jest.fn();
        list.printList();
        expect(console.log).toHaveBeenCalledWith("List is empty.");
    });
});
