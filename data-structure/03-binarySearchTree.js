class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else if (value > current.value) {
          if (current.value === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        } else {
          return;
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return null;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return null;
    return current;
  }

  contains(value) {
    if (this.find(value)) {
      return true;
    } else {
      return false;
    }
  }
}

//     10
//   5     13
// 2   4  14  16

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(2);
console.log(tree.find(2));
console.log(tree.contains(11));
