const BinaryTree = require('../BinaryTree');
const TNode = require('../TNode');

describe('BinaryTree Traversals', () => {
  let tree;
  beforeEach(() => {
    tree = new BinaryTree();
    tree.root = new TNode(10);
    tree.root.left = new TNode(5);
    tree.root.right = new TNode(15);
  });

  test('Pre-order traversal', () => {
    expect(tree.preOrder()).toEqual([10, 5, 15]);
  });

  test('In-order traversal', () => {
    expect(tree.inOrder()).toEqual([5, 10, 15]);
  });

  test('Post-order traversal', () => {
    expect(tree.postOrder()).toEqual([5, 15, 10]);
  });
});
