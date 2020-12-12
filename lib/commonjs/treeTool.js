// 与树相关的工具方法

// bst
// 二叉搜索树
class BinarySearchTree {
  constructor () {
    this.root = null
  }
  genKey (value) {
    return {
      // key: key,
      value: value,
      left: null,
      right: null
    }
  }
  insertKey (key, newKey) {
    if (newKey.value < key.value) { // 左边
      if (!key.left) {
        key.left = newKey
      } else {
        this.insertKey(key.left, newKey)
      }
    } else { // 右边
      if (!key.right) {
        key.right = newKey
      } else {
        this.insertKey(key.right, newKey)
      }
    }
  }
  // 插入键。返回是否插入成功。
  insert (value) {
    // if (!allowSameValue && this.exist(value)) {
    //   return false
    // }
    let key = this.genKey(value)
    if (!this.root) {
      this.root = key
    } else {
      this.insertKey(this.root, key)
    }
    // return true
  }
  existValue (node, value) {
    if (!node) {
      return false
    } else {
      if (value < node.value) {
        return this.existValue(node.left, value)
      } else if (node.value < value) {
        return this.existValue(node.right, value)
      } else {
        return true
      }
    }
  }
  // 是否存在指定的value的key
  exist (value) {
    return this.existValue(this.root, value)
  }
  // 获取最小键
  findMinKey (key = this.root) {
    while (key && key.left) {
      key = key.left
    }
    return key
  }
  // 获取最大键
  findMaxKey (key = this.root) {
    while (key && key.right) {
      key = key.right
    }
    return key
  }
  // 删除第一个key的value = value的key
  removeKey(key, value) {
    if (!key) {
      return null
    } else {
      if (value < key.value) {
        key.left = this.removeKey(key.left, value)
        return key
      } else if (key.value < value) {
        key.right = this.removeKey(key.right, value)
        return key
      } else {
        // 没有子key
        if (!(key.left) && !(key.right)) {
          key = null
          return key
        }
        // 有一个子key.
        if (!key.left) {
          key = key.right
          return key
        } else if (!key.right) {
          key = key.left
          return key
        }
        // 有二人子key
        let aux = this.findMinKey(key.right)
        key.value = aux.value
        key.right = this.removeKey(key.right, aux.value)
        return key
      }
    }
  }
  // 删除指定value的key
  remove (value) {
    this.root = this.removeKey(this.root, value)
  }
  // 获取最小的value
  min () {
    let key = this.root
    if (!key) {
      return null
    } else {
      while (key && key.left) {
        key = key.left
      }
      return key.value
    }
  }
  // 获取最大的value
  max () {
    let key = this.root
    while (key && key.right) {
      key = key.right
    }
    return key.value
  }
  inOrderTranverseNode (key, cb) {
    if (key) {
      this.inOrderTranverseNode(key.left, cb)
      cb(key.value)
      this.inOrderTranverseNode(key.right, cb)
    }
  }
  // 以中序优先方式，依次使用cb处理各键。
  inOrderTranverse (cb) {
    this.inOrderTranverseNode(this.root, cb)
  }
  preOrderTranverseNode (key, cb) {
    if (key) {
      cb(key.value)
      this.preOrderTranverseNode(key.left, cb)
      this.preOrderTranverseNode(key.right, cb)
    }
  }
  // 以先序优先方式，依次使用cb处理各键。
  preOrderTranverse (cb) {
    this.preOrderTranverseNode(this.root, cb)
  }
  postOrderTranverseNode (key, cb) {
    if (key) {
      this.postOrderTranverseNode(key.left, cb)
      this.postOrderTranverseNode(key.right, cb)
      cb(key.value)
    }
  }
  // 以后序优先方式，依次使用cb处理各键。
  postOrderTranverse (cb) {
    this.postOrderTranverseNode(this.root, cb)
  }
}

// 平衡树
class AVLTree {
  constructor () {}
  insertKey (key, value) {

  }
  insert (value) {}
}

// 红黑树
// http://goo.gl/OxED8K
class RBTree {}
// 堆栈树
// http://goo.gl/SFlhW6
// class RBTree {}

module.exports = {
  BinarySearchTree,
  AVLTree,
  // RBTree
}