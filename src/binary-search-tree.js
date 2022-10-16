const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootData = null;
  }

  root() {
    return this.rootData;
  }

  add(data) {
    this.rootData = addNode(this.rootData, data);

    function addNode(node, data) {
      if (!node) {
        return (node = new Node(data));
      } else if (node.data === data) {
        return node;
      } else if (node.data < data) {
        node.right = addNode(node.right, data);
      } else if (node.data > data) {
        node.left = addNode(node.left, data);
      }

      return node;
    }
  }

  has(data) {
    return hasNode(this.rootData, data);

    function hasNode(node, data) {
      if (!node) {
        return false;
      } else if (node.data === data) {
        return true;
      } else if (node.data < data) {
        return hasNode(node.right, data);
      } else {
        return hasNode(node.left, data);
      }
    }
  }

  find(data) {
    return findNode(this.rootData, data);

    function findNode(node, data) {
      if (!node) {
        return null;
      } else if (node.data === data) {
        return node;
      } else if (node.data < data) {
        return findNode(node.right, data);
      } else {
        return findNode(node.left, data);
      }
    }
  }

  remove(data) {
    this.rootData = deleteNode(this.rootData, data);

    function deleteNode(node, data) {
      if (!node) {
        return null;
      } else if (node.data < data) {
        node.right = deleteNode(node.right, data);
        return node;
      } else if (node.data > data) {
        node.left = deleteNode(node.left, data);
        return node;
      } else {
        if (!node.right && !node.left) {
          return null;
        } else if (!node.right) {
          node = node.left;
          return node;
        } else if (!node.left) {
          node = node.right;
          return node;
        }

        let currentRightNode = node.right;

        while (currentRightNode.left) {
          currentRightNode = currentRightNode.left;
        }

        node.data = currentRightNode.data;
        node.right = deleteNode(node.right, currentRightNode.data);

        return node;
      }
    }
  }

  min() {
    return findMin(this.rootData);

    function findMin(node) {
      if (!node) {
        return null;
      } else if (!node.left) {
        return node.data;
      } else {
        return findMin(node.left);
      }
    }
  }

  max() {
    return findMax(this.rootData);

    function findMax(node) {
      if (!node) {
        return null;
      } else if (!node.right) {
        return node.data;
      } else {
        return findMax(node.right);
      }
    }
  }
}

module.exports = {
  BinarySearchTree,
};
