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

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};