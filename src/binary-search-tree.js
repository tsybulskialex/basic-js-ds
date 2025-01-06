const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = _addNode(this.rootNode, data);
    return this.rootNode;
    function _addNode(node, data) {
      if (node === null) {
        const newNode = new Node(data);
        return newNode;
      }
      if (data < node.data) {
        node.left = _addNode(node.left, data);
        return node;
      } else {
        node.right = _addNode(node.right, data);
        return node;
      }
    }
  }

  has(data) {
    return _hasNode(this.rootNode, data);
    function _hasNode(node, data) {
      if (node === null) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data < node.data) {
        return _hasNode(node.left, data);
      } else {
        return _hasNode(node.right, data);
      }
    }
  }

  find(data) {
    return _findNode(this.rootNode, data);
    function _findNode(node, data) {
      if (node === null) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return _findNode(node.left, data);
      } else {
        return _findNode(node.right, data);
      }
    
    }
  }

  remove(data) {
    return this.rootNode = _removeNode(this.rootNode, data);
    function _removeNode(node, data) {
      if (data < node.data) {
        node.left = _removeNode(node.left, data);
        return node;
      }
      if (data > node.data) {
        node.right = _removeNode(node.right, data);
        return node;
      }
      if (data === node.data) {
        if (node.right === null) {
          node = node.left;
          return node;
        }
        if (node.left === null) {
          node = node.right;
          return node;
        }
        if (node.left !== null && node.right !== null) {
          let max = node.left;
          while (max.right !== null) {
            max = max.right;
          }
          node.data = max.data;
          node.left = _removeNode(node.left, max.data);
          return node;
        }
      }
    }
  }

  min() {
    let curRoot = this.rootNode;
    while(curRoot.left !== null) {
      curRoot = curRoot.left;
    }
    return curRoot.data;
  }

  max() {
    let curRoot = this.rootNode;
    while(curRoot.right !== null) {
      curRoot = curRoot.right;
    }
    return curRoot.data;
  }
}

module.exports = {
  BinarySearchTree
};