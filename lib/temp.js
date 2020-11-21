// 备忘录模式
// 备忘录
class Memo {
  constructor () {
    this.state = new Map()
    this.stateKeyList = []
  }
  // 保存状态
  push (key, state) {
    this.stateKeyList.push(key)
    let KEY = Symbol.for(key)
    this.state.set(KEY, state)
  }
  // 查看所有状态
  peek (key) {
    return this.state.get(Symbol.for(key))
  }
  // 弹出最后一个状态
  pop () {
    let lastKey = this.stateKeyList[this.stateKeyList.length - 1]
    let state = this.peek(lastKey)
    this.delState(lastKey)
    return state
  }
  // 删除指定的状态
  delState (key) {
    this.stateKeyList.splice(this.stateKeyList.findIndex(item => item === key), 1)
    this.state.delete(Symbol.for(key))
  }
  // 查看所有状态
  allState () {
    // [[k, v], [k0, v0], ...]
    return this.stateKeyList.reduce((r, c) => {
      r.push([c, this.state.get(Symbol.for(c))])
      return r
    }, [])
  }
}
// r = new Memo()
// r.push('hi', 'hello')
// r.push('hi0', 'hello0')
// r.push('hi1', 'hello1')
// // console.log(r.peek('hi'))
// // console.log(r.peek('hi0'))
// // console.log(r.peek('hi1'))
// // console.log(r.peek('hi2'))
// console.log(r.allState())
// // r.delState('hi0')
// r.pop()
// console.log(r.allState())

