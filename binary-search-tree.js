class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let currentNode = this.root;
    if (!currentNode) this.root = new Node(val);
    while (currentNode) {
      if (currentNode.val < val) {
        if (!currentNode.right) {
          currentNode.right = new Node(val);
          break;
        }
        currentNode = currentNode.right;
      } else if (currentNode.val > val) {
        if (!currentNode.left) {
          currentNode.left = new Node(val);
        }
        currentNode = currentNode.left;
      } else {
        break;
      }
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
    if (!currentNode) {
      this.root = new Node(val);
      return this;
    }

    if (val > currentNode.val) {
      currentNode.right = this.insertRecursively(val, currentNode.right);
    }

    if (val < currentNode.val) {
      currentNode.left = this.insertRecursively(val, currentNode.left);
    }

    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.val === val) {
        return currentNode;
      } else if (currentNode.val < val) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    return;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    if (!currentNode) return;

    if (currentNode.val === val) return currentNode;

    if (currentNode.val < val) {
      return this.findRecursively(val, currentNode.right);
    }

    if (currentNode.val > val) {
      return this.findRecursively(val, currentNode.left);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(nodes = [], currentNode = this.root) {
    if (!currentNode) return nodes;

    nodes.push(currentNode.val);
    this.dfsPreOrder(nodes, currentNode.left);
    this.dfsPreOrder(nodes, currentNode.right);

    return nodes;
  }
  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(nodes = [], currentNode = this.root) {
    if (!currentNode) return nodes;

    this.dfsInOrder(nodes, currentNode.left);
    nodes.push(currentNode.val);
    this.dfsInOrder(nodes, currentNode.right);

    return nodes;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(nodes = [], currentNode = this.root) {
    if (!currentNode) return nodes;

    this.dfsPostOrder(nodes, currentNode.left);
    this.dfsPostOrder(nodes, currentNode.right);
    nodes.push(currentNode.val);

    return nodes;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let visitedNodes = [];
    let queue = [this.root];

    while (queue.length > 0) {
      let node = queue.shift();

      if (node) {
        visitedNodes.push(node.val);
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
    }

    return visitedNodes;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
