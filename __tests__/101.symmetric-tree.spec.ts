import { TreeNode } from '../src/utility';

interface Same<Type> {
  (x: Type | null, y: Type | null): boolean;
};

const isSymmetric = (root: TreeNode | null): boolean => {
  
  if (root == null || root.val == null) return true;

  const leftStack: Array<TreeNode> = [];
  const rightStark: Array<TreeNode> = [];

  if(root.left != null) {
    if (root.right == null) return false;

    leftStack.push(root.left);
    rightStark.push(root.right);
  } else if(root.right != null) return false;

  while(leftStack.length || rightStark.length) {
    if ((leftStack.length + rightStark.length) % 2 != 0) return false;

    const main = <TreeNode>leftStack.pop();
    const mirror = <TreeNode>rightStark.pop();

    if (main.val != mirror.val) return false;

    if (main.left != null) {
      if (mirror.right == null) return false;
      
      leftStack.push(main.left);
      rightStark.push(mirror.right);
    } else if (mirror.right != null) return false;

    if (main.right != null) {
      if (mirror.left == null) return false;

      leftStack.push(main.right);
      rightStark.push(mirror.left);
    } else if (mirror.left != null) return false;
  };
  
  return true;
}

test('expect use TreeNode input [1,2,2,3,4,4,3], output true.', () => {
  const root: TreeNode = 
    new TreeNode(
      1
      , new TreeNode(
        2
        , new TreeNode(3)
        , new TreeNode(4)
      )
      , new TreeNode(
        2
        , new TreeNode(4)
        , new TreeNode(3)
      )
    );
  const expected = true;
  const actual = isSymmetric(root);

  expect(actual).toEqual(expected);
});

test('expect use TreeNode input [1,2,2,null,3,null,3], output false.', () => {
  const root: TreeNode =
    new TreeNode(
      1
      , new TreeNode(
        2
        , null
        , new TreeNode(3)
      )
      , new TreeNode(
        2
        , null
        , new TreeNode(3)
      )
    );
  const expected = false;
  const actual = isSymmetric(root);

  expect(actual).toEqual(expected);
})

test('expect use TreeNode input [1], output true.', () => {
  const root: TreeNode =
    new TreeNode(1);
  const expected = true;
  const actual = isSymmetric(root);

  expect(actual).toEqual(expected);
})
