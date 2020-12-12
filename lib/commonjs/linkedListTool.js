// 链表相关的工具方法

/*
链表
*/
class LinkBase {
  constructor () {
    this.length = 0
    this.head = null
  }
  isEmpty () {
    return this.length === 0
  }
  size () {
    return this.length
  }
  getHead () {
    return this.head
  }
  // getTail () {
  //   return this.tail
  // }
  join (separate = '') {
    let current = this.head, str = ''
    while (current) {
      str += String(current.element) + separate
      current = current.next
    }
    return str.substr(0, str.length - separate.length)
  }
}
// 单向链表
class LinkedList extends LinkBase { // 声明式
  constructor (iterate = []) {
    super()
    // this.length = 0
    if (iterate.length) {
      let link = iterate.reduceRight((res, cur) => {
        let o = {
          element: cur,
          next: res
        }
        this.length++
        return o
      }, null)
      this.head = link
    // } else {
    //   this.head = null
    }
  }
  static node (element) { // 静态方法可以由类调用,不能由实例调用.
    return {
      element: element,
      next: null
    }
  }
  append (element) {
    let ele = LinkedList.node(element), current = null
    // this.head = ele
    if (this.head === null) {
      this.head = ele
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = ele
    }
    this.length++
  }
  // 在指定位置插入元素
  insert (position, element) {
    if (position < -1 || position > this.length) {
      return false
    }
    let node = LinkedList.node(element),
      current = this.head,
      previous = null,
      index = 0
    if (position === 0) {
      node.next = this.head
      this.head = node
    } else {
      while (index++ < position) {
        previous = current
        current = current.next
      }
      node.next = current
      previous.next = node
    }
    this.length++
    return true
  }
  removeAt (position) {
    if (position > -1 && position < this.length) {
      let current = this.head, previous = null, index = 0
      if (position === 0) {
        current = this.head
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      this.length--
      return current.element
    } else {
      return false
    }
  }
  // 删除链表中包含指定元素的节点。不返回东西。
  removeElement (element, all = false) {
    if (this.head.element === element) {
      this.head = null
      this.length = 0
    } else {
      let current = this.head.next, previous = this.head
      while (current) {
        if (current.element === element) {
          previous.next = current.next
          this.length--
          if (!all) {
            break
          }
        }
        previous = current
        current = current.next
      }
    }
  }
  // 删除链表中所有包含指定节点的元素
  // removeElementAll (element) {
  //   this.removeElement(element, true)
  // }
  // 获取指定元素第一次出现的位置
  indexOf (element) {
    let current = this.head, index = 0
    while (current) {
      if (current.element === element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }
  indexOfAll (element) {
    let current = this.head, index = 0, res = []
    while (current) {
      if (current.element === element) {
        res.push(index)
      }
      index++
      current = current.next
    }
    return res
  }
  // 获取指定位置的元素
  getEleByIndex (index = null) {
    if (index === null) {
      return null
    } else {
      let i = 0, current = this.head
      while (i < index && current) {
        current = current.next
        i++
      }
      return current.element
    }
  }
  // 获取指定位置的节点
  getNodeByIndex (index) {
    if (0 <= index && index < this.length) {
      let i = 0
      let res = this.head
      while (i < index && res) {
        res = res.next
        i++
      }
      return res
    } else {
      return {}
    }
  }
  // 轮换为为数组
  toArray () {
    let cur = this.head
    let arr = []
    while (cur) {
      arr.push(cur.element)
      cur = cur.next
    }
    return arr
  }
  // 反转。不改变原链表，返回新链表。
  reverse () {
    return this.toArray().reverse().reduce((r, cur) => {
      r.append(cur)
      return r
    }, new LinkedList())
  }
  // 反转。改变原链表的顺序，不返回东西。
  reverseSelf () {
    let fn = (p, q = null) => {
      if (p) {
        return q
      } else {
        return fn(p.next, {element: p.element, next: q})
      }
    }
    this.head = fn(this.head)
  }
  // 返回新的链表，不改变原链表。
  slice () {}
  // 在链表中指定的位置插入或删除指定的元素。返回被删除的链表部分。
  splice () {}
  // 重设置head,不修改原链表，返回新链表。
  rehead () {}
  clear () {
    this.head = null
    this.length = 0
    return this.size()
  }
}
/*
双向链表
*/
class DoublyLinkedList extends LinkBase {
  constructor () {
    super()
    // this.head = null
    // this.length = 0
    this.tail = null
  }
  static node (element) {
    return {
      element: element,
      prev: null,
      next: null
    }
  }
  // 追加
  append (element) {
    let node = DoublyLinkedList.node(element)
    if (this.length) {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    } else {
      this.head = node
      this.tail = node
    }
    this.length++
  }
  // 根据位置得到元素
  getElementByPostion (position) {
    let res = null
    if (position >= 0) {
      if (position < this.length) {
        let index = 0
        let cur = this.head // , prev
        while (index++ < position) {
          // prev = cur
          cur = cur.next
        }
        // return cur.element
        res = cur.element
      }
    } else {
      if (Math.abs(position) <= this.length) {
        let index = -1, cur = this.tail
        while (index-- > position) {
          cur = cur.prev
        }
        res = cur.element
      }
    }
    return res
  }
  // 根据元素得到第一个符合元素的位置
  getPositionByElement (element) {
    let cur = this.head, flag = false, position = -1
    while (cur && !flag) {
      if (cur.element === element) {
        flag = !flag
      } else {
        cur = cur.next
      }
      position++
    }
    return !flag ? -1 : position
  }
  // 是否存在指定element
  existElement (element) {
    let cur = this.head
    let flag = true
    while (flag && cur) {
      if (cur.element === element) {
        flag = false
      } else {
        cur = cur.next
      }
    }
    return !flag
  }
  // 在指定位置插入
  // 返回boolean，表示插入成功、失败。
  insert (position, element) {
    if (position >= 0 && position <= this.length) {
      let node = DoublyLinkedList.node(element), current, previous, index = 0
      if (position === 0) { // head
        if (this.length) {
          node.next = this.head
          this.head.prev = node
          this.head = node
        } else {
          this.head = node
          this.tail = node
        }
      } else {
        if (position === this.length) { // tail
          this.tail.next = node
          node.prev = this.tail
          this.tail = node
        } else { // middle
          current = this.head
          while(index++ < position) {
            previous = current
            current = current.next
          }
          node.next = current
          node.prev = previous
          current.prev = node
          previous.next = node
        }
      }
      this.length++
      return true
    } else {
      return false
    }
  }
  // 从head边开始查询并删除指定位置的节点
  // position >= 0
  // 返回操作后的链表长度
  removeAt (position) {
    if (position > -1 && position < this.length) {
      let current = this.head, previous, index = 0
      if (position === 0) { // head
        if (this.length === 1) {
          this.head = null
          this.tail = null
        } else {
          this.head = this.head.next
          this.head.prev = null
        }
      } else {
        if (position === this.length - 1) { // tail
          current = this.tail
          this.tail = current.prev
          this.tail.next = null
        } else { // middle
          while (index++ < position) {
            previous = current
            current = current.next
          }
          previous.next = current.next
          current.next.prev = previous
        }
      }
      this.length--
    }
    return this.size()
  }
  // 从tail开始查询并删除指定位置的节点
  // position < 0
  // 返回链表长度
  removeAtRight (position) {
    if (position < 0 && Math.abs(position) <= this.length ) {
      if (position === -1) {
        this.removeTail()
      } else if (Math.abs(position) === this.length) {
        this.removeHead()
      } else {
        let cur = this.tail.next, post = this.tail, index = -1
        while (index-- > position) {
          post = cur
          cur = cur.prev
        }
        cur.prev.next = post
        post.prev = cur.prev
      }
    }
    return this.size()
  }
  // 删除最后一个元素
  // 不返回东西
  removeTail () {
    if (this.length === 1) {
      this.head = null
      this.tail = null
      this.length--
    } else {
      if (this.length > 1) {
        this.tail = this.tail.prev
        this.tail.next = null
        this.length--
      }
    }
    return this.size()
  }
  // 删除第一个元素
  removeHead () {
    if (this.length === 1) {
      this.head = null
      this.tail = null
      this.length--
    } else {
      if (this.length > 1) {
        this.head = this.head.next
        this.head.prev = null
        this.length--
      }
    }
    return this.size()
  }
  // 删除指定元素
  removeElement (element, all = false) {
    let current = this.head, res = []
    while (current) {
      if (current.element === element) {
        if (!current.prev) { // 前面无元素
          this.head = current.next
          if (!current.next) { // 后面无元素
            this.tail = current.prev
          } else { // 后面有元素
            current.next.prev = null
          }
        } else { // 前面有元素
          if (!current.next) { // tail
            this.tail = current.prev
            current.prev.next = null
          } else {
            current.prev.next = current.next
            current.next.prev = current.prev
          }
        }
        this.length--
        if (!all) {
          break
        }
      }
      current = current.next
    }
  }
  // 连接成字符串
  join (separate = '') {
    let current = this.head, str = ''
    while (current) {
      str += String(current.element) + separate
      current = current.next
    }
    return str.substr(0, str.length - separate.length)
  }
  // 不改变原链表，返回新链表。
  slice (start = 0, end = this.length) {
    let link = new DoublyLinkedList()
    end = (this.length < end) ? this.length : end
    end = end < 0 ? (this.length + end) : end
    if (0 <= start && start <= end && end <= this.length) {
      let len = end - start
      let index = 0
      let cur = this.head
      while (index++ < start) {
        cur = cur.next
      }
      index = 0
      while (index++ < len) {
        link.append(cur.element)
        cur = cur.next
      }
    }
    return link
  }
  // 把指定部分的元素设置为replcement。
  // 返回被删除的新元素。
  splice (start = 0, len = 0, ...replacement) {
    let res = []
    if (0 <= start && start <= this.length) {
      len = len < 0 ? 0 : len
      len = Math.min(this.length - start, len)
      // 取被删除的数据
      res = this.slice(start, start + len).toArray()
      if (start === 0) { // start
        let flag = this.head
        let index = 0
        while (index++ < len) {
          flag = flag.next
        }
        let temp = new DoublyLinkedList()
        for (let i = 0; i < replacement.length; i++) {
          temp.append(replacement[i])
        }
        temp.tail.next = flag // this.head
        this.head = temp.head
        this.length -= len
        this.length += replacement.length
        temp = null
      } else if (start === this.length) { // tail
        for (let i = 0; i < replacement.length; i++) {
          this.append(replacement[i])
        }
      } else { // middle
        if (this.length <= (start + len)) { // 去掉start后面的全部。
          let flag = this.head
          let index = 0
          while (index++ < start) {
            flag = flag.next
          }
          this.tail = flag
          for (let i = 0; i < replacement.length; i++) {
            this.append(replacement[i])
          }
          this.length = index + replacement.length
        } else { // 去掉中间部分
          let index = 0
          let prev = this.head
          while (index++ < start) {
            prev = prev.next
          }
          let post = prev.next
          while (index++ <= start + len) {
            post = post.next
          }
          let temp = new DoublyLinkedList()
          for (let i = 0; i < replacement.length; i++) {
            temp.append(replacement[i])
          }
          temp.tail.next = post
          post.prev = temp.tail
          temp.head.prev = prev
          prev.next = temp.head
          temp = null
          this.length -= len
          this.length += replacement.length
        }
      }
    }
    return res
  }
  // 把element转换为数组
  toArray () {
    let cur = this.head
    let arr = []
    while (cur) {
      arr.push(cur.element)
      cur = cur.next
    }
    return arr
  }
  // 获取头节点的元素
  getHead () {
    return this.head.element
  }
  // 获取尾节点的元素
  getTail () {
    return this.tail.element
  }
  moveToHeadByElement () {
    // 可能用不到
  }
  // 把指定位置的节点移动到头部。不返回东西
  moveToHeadByPosition (position) {
    let cur = this.head
    if (position > 0) {
      if (position < this.length) {
        if (position === this.length - 1) {
          let cur = this.tail
          this.tail = this.tail.prev
          this.tail.next = null
          cur.next = this.head
          cur.prev = null
          this.head = cur
        } else {
          let cur = this.head, index = 0
          while (index++ < position) {
            cur = cur.next
          }
          cur.prev.next = cur.next
          cur.next.prev = cur.prev
          cur.next = this.head
          cur.prev = null
          this.head.prev = cur
          this.head = cur
        }
      }
    } else if (position < 0) {
      if (Math.abs(position) < this.length) {
        if (position === -1) {
          let cur = this.tail
          this.tail = this.tail.prev
          this.tail.next = null
          cur.next = this.head
          cur.prev = null
          this.head = cur
        } else {
          let cur = this.tail, index = -1
          while (index-- > position) {
            cur = cur.prev
          }
          cur.prev.next = cur.next
          cur.next.prev = cur.prev
          cur.next = this.head
          cur.prev = null
          this.head.prev = cur
          this.head = cur
        }
      }
    }
  }
  // 是否是空链表
  isEmpty () {
    return this.length === 0
  }
  // 清空链表。
  // 返回链表长度。
  clear () {
    this.head = null
    this.tail = null
    this.length = 0
    return this.size()
  }
}
/*
循环链表
*/
// 需要测试
class CircularLinkedList extends LinkBase {
  constructor () {
    super()
    this.length = 0
    this.head = null
    this.tail = null
  }
  static node (element) {
    return {
      element: element,
      prev: null,
      next: null
    }
  }
  // 追加元素
  append (element) {
    let node = CircularLinkedList.node(element)
    if (this.length) {
      let last = this.tail
      last.next = node
      node.prev = last
      this.tail = node
      node.next = this.head
      this.head.prev = node
    } else {
      this.head = node
      node.prev = node
      node.next = node
      this.tail = node
    }
    this.length++
  }
  // 把元素插入到指定位置
  insert (position, element) {
    if (position <= this.length && position > -1) {
      let node = CircularLinkedList.node(element)
      if (this.length) {
        if (position === 0) {
          node.next = this.head
          this.head.prev = node
          node.prev = this.tail
          this.tail.next = node
          this.head = node
        } else {
          if (position === this.length) {
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
            node.next = this.head
            this.head.prev = node
          } else {
            let current = this.head, index = 0
            while (index++ < position) {
              current = current.next
            }
            current.prev.next = node
            node.prev = current.prev
            node.next = current
            current.prev = node
          }
        }
      } else {
        this.head = node
        this.tail = node
        node.prev = node
        node.next = node
      }
      this.length++
      return true
    } else {
      return false
    }
  }
  // 删除指定位置的节点，若删除成功则返回true。否则返回false
  removeAt (position) {
    if (position > -1 && position < this.length) {
      if (this.length) {
        let current = this.head, index = 0
        while (index++ < position) {
          current = current.next
        }
        current.prev.next = current.next
        current.next.prev = current.prev
        if (position === 0) {
          this.head = current.next
        } else {
          if (position === this.length - 1) {
            this.tail = current
          }
        }
      } else {
        this.head = null
        this.tail = null
      }
      this.length--
      return true
    } else {
      return false
    }
  }
  // 删除指定的元素，返回删除节点的数据
  removeElement (element, all = false) {
    let current = this.head, index = 0, count = 0
    while (index++ < this.length) {
      current = current.next
      if (current.element === element) {
        if (index === 0) {// 删除头
          if (this.length === 1) {
            this.head = null
            this.tail = null
          } else {
            this.head = this.head.next
            this.head.prev = this.tail
            this.tail.next = this.head
          }
        } else {
          if (index === this.length - 1) { // 删除尾
            this.tail = current.prev
            this.tail.next = this.head
            this.head.prev = this.tail
          } else { // 删除中间
            current.prev.next = current.next
            current.next.prev = current.prev
          }
        }
        index--
        this.length--
        count++
        if (!all) {
          break
        }
      }
    }
    return count
  }
  // 若切片成功，则返回指定范围的切片，否则返回false
  slice (start = 0, end = this.length - 1) {
    if (start > -1 && start <= end && end < this.length) {
      let index = 0, current = this.head
      this.length = end - start + 1
      while (index++ < start) {
        current = current.next
      }
      if (this.length) {
        this.head = current
        let count = 1
        while (count++ < this.length - 1) {
          current = current.next
        }
        this.tail = current
        this.head.prev = this.tail
        this.tail.next = this.head
      } else {
        this.head = null
        this.tail = null
      }
      return this
    }
    return false
  }
  getEleByIndex (position) {
    if (position > -1 && position < this.length) {
      let current = this.head, index = 0
      while (index++ < this.length) {
        current = current.next
      }
      return current.element
    }
    return new Error('range error')
  }
  getTail (position) {
    return this.tail
  }
}
/*
反转链表
*/
let linkedListReverse = (head, q = null) => head !== null ? linkedListReverse(head.next, {element: head.element, next: q}) : q


module.exports = {
  LinkedList,
  DoublyLinkedList,
  linkedListReverse
}