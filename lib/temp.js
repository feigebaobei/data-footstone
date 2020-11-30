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

// 得到参数的类型
let getType = param => Object.prototype.toString.call(param).slice(8, -1).toLowerCase()

// 去抖
let debounce = (fn, delay) => {
  let timer = null
  return (...args) => {
    clearTimeout(timer)
    let self = this
    timer = setTimeout(() => {
      fn.apply(self, args)
    }, delay)
  }
}

// 节流
let throttle = (fn, threshhold = 250) => {
  let last = null, timer = null
  return (...args) => {
    let self = this, now = Date.now()
    if (last && last + threshhold > now) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        last = now
        fn.apply(self, args)
      }, threshhold)
    } else {
      last = now
      fn.apply(self, args)
    }
  }
}

// $('#input').on('input', debounce(() => {...}, 300)))
// $('body').on('mousemove', throttle(() => {...}, 300))

// 使用Reflect.ownKeys实现深复制。
let deepClone = (param) => {
  let memo = {}
  let isPrimitive (v) => {
    let res = false
    let type = typeof(v)
    switch (type) {
      case 'null':
      case 'undefined':
      case 'number':
      case 'string':
      case 'boolean':
      case 'symbol':
      default:
        res = true
        break
    }
    return res
  }
  let isObject = (v) => Object.prototype.toString.call(v) === '[object Object]'
  let baseClone = (v) => {
    let res
    if (isPrimitive(v)) {
      return v
    } else if (Array.isArray(v)) {
      res = [...v]
    } else if (isObject(v)) {
      res = {...value}
    }
    Reflect.ownKeys(res).forEach(key => {
      if (typeof(res[key]) === 'object' && res[key] !== null) {
        if (mome[res[key]]) {
          res[key] = mome[res[key]]
        } else {
          memo[res[key]] = res[key]
          res[key] = baseClone(res[key])
        }
      }
    })
    return res
  }
  return baseClone(param)
}

// 使用消息通道实现深复制
let deepCloneByChannel = (obj) => {
  return new Promise((ressolve) => {
    const {port1, port2} = new MessageChannel()
    port1.onmessage = r => ressolve(r)
    port2.postMessage(obj)
  })
}

// 把多维数据变为一维数组
let plainArr = (arr) => arr.reduce((r, c) => r.concat(Array.isArray(c) ? plainArr(c) : c), [])
