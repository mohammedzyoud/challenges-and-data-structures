const BinarySearchTree = require('../BinarySearchTree');

describe('BinarySearchTree', () => {
  let bst;
  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test('Add nodes and verify structure', () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    expect(bst.root.value).toBe(10);
    expect(bst.root.left.value).toBe(5);
    expect(bst.root.right.value).toBe(15);
  });

  test('Contains existing node', () => {
    bst.add(10);
    bst.add(7);
    expect(bst.contains(7)).toBe(true);
  });

  test('Remove node', () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.remove(5);
    expect(bst.contains(5)).toBe(false);
  });
});
