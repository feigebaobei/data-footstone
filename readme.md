# describe

基本的数据结构。

- Stack  
Queue  
LinkedList  
HashTable  
Tree  
Graph  

当前版本支持es6规范。即使用export/import方式去抛出、引入。
暂时不支持commonjs规范。（未来会开发）

# install

```
npm i data-footstone
```

# usage

```
import dataFootstone from 'data-footstone'

var stack = new dataFootstone.stackTool.Stack()
stack.push(1, 2, 3, 4)
console.log(stack.getArray())
stack.pop()
console.log(stack.getArray())
stack.pop()
console.log(stack.getArray())
stack.pop()
console.log(stack.getArray())
console.log(stack.isEmpty())
```
```
import {
  graphTool,
  hashTable,
  linkedListTool,
  promiseTool,
  queueTool,
  stackTool,
  treeTool,
} from 'data-footstone'

// 各工具对象包括的内容：
graphTool: {
  Graph
}
hashTool: {
  hashTableBase,
  hashTableLinked,
  hashTableLinear
}
linkedListTool: {
  LinkedList,
  DoublyLinkedList,
  linkedListReverse
}
promiseTool: {
  orderPromise,
  limitPromise
}
queueTool: {
  Queue,
  PriorityQueue,
}
stackTool: {
  Stack
}
treeTool: {
  BinarySearchTree
}
orderTool: {
  bubbleSort,
  selectSort,
  insertSort,
  quickSort,
  quickSortSelf,
  binarySearch
}
```

## Graph

var graph = new Graph()
graph.addVertex(v) // 添加顶点
graph.addEdge(v, w) // 添加边
graph.toString() // 打印出邻接表
graph.neighborsMatrix() // 返回邻接矩阵
graph.neighborsTable() // 返回邻接表
graph.bfs(v, cb) // 以广度优先方式，依次处理执行cb.
graph.dfs() // 深度优先
graph.dfsCb(cb) // 以深度优先方式，依次处理执行cb.

## hashTableBase

基本的散列表。使用loseloseHashCode方式散列。
该散列表不能解决散列冲突。出现散列冲突的可能性比较高。

```
var hashTableBase = new HashTableBase()
hashTableBase.put(key, value) // 添加key-value
hashTableBase.remove(key) // 删除key
hashTableBase.get(key) // 获取key对应的value
```

## HashTableLinked

该哈希表使用djbHashCode方式散列。
使用分离链接方法处理哈希冲突。

```
var hashTableLinked = new HashTableLinked()
hashTableLinked.put(key, value) // 添加key-value
hashTableLinked.remove(key) // 删除key
hashTableLinked.get(key) // 获取key对应的value
```

## HashTableLinear

该哈希表使用djbHashCode方式散列。
使用线性探查方法处理哈希冲突。

```
var hashTableLinear = new HashTableLinear()
hashTableLinear.put(key, value) // 添加key-value
hashTableLinear.remove(key) // 删除key
hashTableLinear.get(key) // 获取key对应的value
```

## LinkedList
单向链表
```
let linkedList = new LinkedList()
linkedList.append(element)                     // 在末尾添加元素
linkedList.insert(position, element)           // 在position插入元素，position后面的元素依次向后移动。
linkedList.removeAt(position)                  // 删除指定位置的元素。该位置后面的元素向前移动。
linkedList.removeElement(element, all = false) // 删除指定元素。当all为false，则删除第一个指定的元素，否则删除所有指定的元素。
linkedList.indexOf(element)                    // 返回第一个指定元素的下标。
linkedList.indexOfAll(element)                 // 返回所有指定元素的下标组成的数组。
linkedList.getEleByIndex(index = null)         // 获取指定位置的元素
linkedList.getNodeByIndex(index)               // 获取指定位置的节点
linkedList.toArray()                           // 轮换为为数组
linkedList.reverse()                           // 反转。不改变原链表，返回新链表。
linkedList.reverseSelf()                       // 反转。改变原链表的顺序，不返回东西。
```

## DoublyLinkedList
双向链表
```
let doublyLinkedList = new DoublyLinkedList()
doublyLinkedList.append(element)                         // 在末尾添加元素
doublyLinkedList.insert(position, element)               // 在position插入元素，position后面的元素依次向后移动。
doublyLinkedList.removeAt(position)                      // 删除指定位置的节点，若删除成功则返回节点的element。否则返回false
doublyLinkedList.removeElement(element, all = false)     // 删除指定元素。当all为false，则删除第一个指定的元素，否则删除所有指定的元素。
doublyLinkedList.join(separate = '')                     // 把链表中的元素以连接字符串连接起来并返回。
doublyLinkedList.slice(start = 0, end = this.length - 1) // 切片后的链条。不改变原链表，返回新链表。
doublyLinkedList.getEleByIndex(position)                 // 获取指定位置的元素
doublyLinkedList.getHead(index)                          // 获取头节点
doublyLinkedList.getTail()                               // 获取尾节点
doublyLinkedList.isEmpty()                               // 是否是空链表
```

## CircularLinkedList

循环链表

```
let circularLinkedList = new CircularLinkedList()
circularLinkedList.append(element)                         // 在末尾添加元素
circularLinkedList.insert(position, element)               // 在position插入元素，position后面的元素依次向后移动。
circularLinkedList.removeAt(position)                      // 删除指定位置的节点，若删除成功则返回节点的element。否则返回false
circularLinkedList.removeElement(element, all = false)     // 删除指定元素。当all为false，则删除第一个指定的元素，否则删除所有指定的元素。
circularLinkedList.join(separate = '')                     // 把链表中的元素以连接字符串连接起来并返回。
circularLinkedList.slice(start = 0, end = this.length - 1) // 切片后的链条。不改变原链表，返回新链表。
circularLinkedList.getEleByIndex(position)                 // 获取指定位置的元素
circularLinkedList.getHead(index)                          // 获取头节点
circularLinkedList.getTail()                               // 获取尾节点
circularLinkedList.isEmpty()                               // 是否是空链表
```

## orderPromise

orderPromise(pArr)
pArr promise对象组成的数组。
依次请求arr里的promise.
返回各promise的then结果组成的要数组。
返回一个promise对象。其then方法的参数是各promise的then结果组成的要数组。

## limitPromise

limitPromise(arr, handler, limit)
arr需要操作的数据 array型
handler对arr中的数据执行的方法。 function型
limit最大“并发”量 number型
限制并发请求的的最大值。
返回promise对象。其then方法的参数是全部handler的结果。

## Queue

队列
```
new queue = new Queue()
queue.enqueue(...ele) // 把ele添加到队列末尾
queue.dequeue()       // 把队列中的第一个元素出队列，并返回该元素。
queue.getAll()        // 获取队列中的全部元素（arrry）。队列不变。
queue.head()          // 队列的第一个元素。
queue.tail()          // 队列的最后一个元素。
queue.size()          // 队列的大小
queue.isEmpty()       // 队列是否为空
queue.clear()         // 清空队列
queue.reverse()       // 反转队列
```

## PriorityQueue

优先队列

```
new queue = new Queue()
queue.enqueue(...ele)   // 把ele添加到队列末尾
queue.dequeue()         // 把队列中的第一个元素出队列，并返回该元素。
queue.getAll()          // 获取队列中的全部元素（arrry）。队列不变。
queue.head()            // 队列的第一个元素。
queue.tail()            // 队列的最后一个元素。
queue.size()            // 队列的大小
queue.isEmpty()         // 队列是否为空
queue.clear()           // 清空队列
queue.reverse()         // 反转队列
queue.highestPriority() // 获取队列中权重值
```

## Stack

栈
```
let stack = new Stack()
stack.getArray() // 得到数组
stack.push()     // 添加一个或多个元素
stack.pop()      // 弹出一个元素
stack.peek()     // 返回栈顶的元素
stack.isEmpty()  // 是否这空
stack.clear()    // 清空栈
stack.size()     // 栈有大小
```
## BinarySearchTree

二叉树
```
let binarySearchTree = new BinarySearchTree()
binarySearchTree.insert() // 插入键。返回是否插入成功。
binarySearchTree.exist() // 是否存在指定的value的key
binarySearchTree.findMinKey() // 获取最小键
binarySearchTree.findMaxKey() // 获取最大键
binarySearchTree.removeKey() // 删除第一个key的value = value的key
binarySearchTree.remove() // 删除指定value的key
binarySearchTree.min() // 获取最小的value
binarySearchTree.max() // 获取最大的value
binarySearchTree.inOrderTranverse() // 以中序优先方式，依次使用cb处理各键。
binarySearchTree.preOrderTranverse() // 以先序优先方式，依次使用cb处理各键。
binarySearchTree.postOrderTranverse() // 以后序优先方式，依次使用cb处理各键。
```
