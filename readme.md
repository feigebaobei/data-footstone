# describe

基本的数据结构。

- Stack  
Queue  
LinkedList  
HashTable  
Tree  
Graph  
Order  

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