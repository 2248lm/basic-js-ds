const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    const NODE = new Node(data);
    if (!this.treeRoot) {
      this.treeRoot = NODE;
      return;
    }
    let currTreeNode = this.treeRoot;
    while (currTreeNode) {
      if (NODE.data < currTreeNode.data) {
        if (!currTreeNode.left) {
          currTreeNode.left = NODE;
          return;
        }
        currTreeNode = currTreeNode.left;
      } else {
        if (!currTreeNode.right) {
          currTreeNode.right = NODE;
          return;
        }
        currTreeNode = currTreeNode.right;
      }
    }
    return;
  }

  has(data) {
    let currTreeNode = this.treeRoot;
    while (currTreeNode) {
      if (currTreeNode.data === data) {
        return true;
      } else if (data < currTreeNode.data) {
        currTreeNode = currTreeNode.left
      } else {
        currTreeNode = currTreeNode.right
      }
    }
    return false;
  }

  find(data) {
    let currTreeNode = this.treeRoot;
    while (currTreeNode) {
      if (currTreeNode.data === data) {
        return currTreeNode;
      } else if (data < currTreeNode.data) {
        currTreeNode = currTreeNode.left
      } else {
        currTreeNode = currTreeNode.right
      }
    }
    return null;
  }

  remove(/* data */) {
/*     let currTreeNode = this.treeRoot;
    while (currTreeNode) {
      if (currTreeNode.data === data) {
        if (!currTreeNode.left && !currTreeNode.right) {
          return currTreeNode = null;
        }
      }
    }
    return null; */
  }

  min() {
    let minTreeNode = this.treeRoot;
    while (minTreeNode.left) {
      minTreeNode = minTreeNode.left;
    }
    return minTreeNode.data;
  }

  max() {
    let maxTreeNode = this.treeRoot;
    while (maxTreeNode.right) {
      maxTreeNode = maxTreeNode.right;
    }
    return maxTreeNode.data;
  }
}

module.exports = {
  BinarySearchTree
};
