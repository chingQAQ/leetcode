class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

const inorderTraversal = (root: TreeNode | null): number[] => {
  if (root == null || root.val == null) return [];

  let ret: number[] = [];
  let stack: Array<TreeNode> = [];
  let currentNode: TreeNode | null = root;

  do {
    if (currentNode) {
      stack.push(currentNode);
      currentNode = <TreeNode>currentNode.left;
    } else {
      const lastNode = <TreeNode>stack.pop();
      ret.push(lastNode.val);
      currentNode = <TreeNode>lastNode.right;
    }
  } while (stack.length !== 0 || currentNode != null);

  return ret;
}

test('expect use TreeNode input [1,null,2,3], output [1, 3, 2].', () => {
  const root: TreeNode = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
  const expected = [1, 3, 2];
  const actual = inorderTraversal(root);

  expect(actual).toEqual(expected);
})

test('expect use TreeNode input [], output [].', () => {
  const root: any = [];
  const expected = [] as number[];
  const actual = inorderTraversal(root);

  expect(actual).toEqual(expected);
})

test('expect use TreeNode input [1], output [1].', () => {
  const root: TreeNode = new TreeNode(1);
  const expected = [1];
  const actual = inorderTraversal(root);

  expect(actual).toEqual(expected);
})

test('expect use TreeNode input [1, 2], output [2, 1].', () => {
  const root: TreeNode = new TreeNode(1, new TreeNode(2));
  const expected = [2, 1];
  const actual = inorderTraversal(root);

  expect(actual).toEqual(expected);
})

test('expect use TreeNode input [1, null, 2], output [1, 2].', () => {
  const root: TreeNode = new TreeNode(1, null, new TreeNode(2));
  const expected = [1, 2];
  const actual = inorderTraversal(root);

  expect(actual).toEqual(expected);
})
