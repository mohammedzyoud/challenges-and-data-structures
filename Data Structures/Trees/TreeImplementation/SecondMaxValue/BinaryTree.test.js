const { BinaryTree, Node } = require("./BinaryTree");

describe("Find Second Max in Binary Tree", () => {
  test("should find second max value", () => {
    const Btree = new BinaryTree();
    Btree.root = new Node(10);
    Btree.root.left = new Node(5);
    Btree.root.right = new Node(20);
    Btree.root.right.right = new Node(25);
    expect(Btree.findSecondMax()).toBe(20);
  });

  test("should throw error for empty tree", () => {
    const Btree = new BinaryTree();
    expect(() => Btree.findSecondMax()).toThrow("Tree is empty");
  });

  test("should handle single node", () => {
    const Btree = new BinaryTree();
    Btree.root = new Node(10);
    expect(() => Btree.findSecondMax()).toThrow("No second maximum value found");
  });

  test("should handle negative values", () => {
    const Btree = new BinaryTree();
    Btree.root = new Node(-10);
    Btree.root.left = new Node(-20);
    Btree.root.right = new Node(-5);
    expect(Btree.findSecondMax()).toBe(-10);
  });
});
