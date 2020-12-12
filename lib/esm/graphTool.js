// 与图相关的工具方法

// import {Queue} from './queueTool.js'
import queueTool from './queueTool.js'

class Graph {
  constructor () {
    this.vertices = []
    this.adjList = new Map()
  }
  addVertex (v) {
    this.vertices.push(v)
    this.adjList.set(v, [])
  }
  addEdge (v, w) {
    this.adjList.get(v).push(w)
    this.adjList.get(w).push(v)
  }
  // 打印出邻接表
  toString () {
    return this.vertices.reduce((r, c) => r += `${c} -> ${this.adjList.get(c).join(' ')}\n`, '').slice(0, -1)
  }
  // 返回邻接矩阵
  neighborsMatrix () {
    return this.vertices.reduce((r, c) => {
      let arr = this.adjList.get(c)
      let temp = new Array(arr.length)
      for (let i = 0, iLen = this.vertices.length; i < iLen; i++) {
        temp[i] = arr.includes(this.vertices[i]) ? 1 : 0
      }
      r.push(temp)
      return r
    }, [])
  }
  // 返回邻接表
  neighborsTable () {
    return this.adjList
  }
  initializeColor () {
    return this.vertices.reduce((r, c) => {
      r[c] = 'white'
      return r
    }, [])
  }
  bfs (v, cb) {
    var color = this.initializeColor()
    var queue = new queueTool.Queue()
    let d = []
    let pred = []
    queue.enqueue(v)
    // color[v] = 'grey'
    for (let i = 0, iLen = this.vertices.length; i < iLen; i++) {
      d[this.vertices[i]] = 0
      pred[this.vertices[i]] = 0
    }
    while (!queue.isEmpty()) {
      let u = queue.dequeue()
      let neighbors = this.adjList.get(u)
      color[v] = 'grey'
      for (let i = 0, iLen = neighbors.length; i < iLen; i++) {
        let w = neighbors[i]
        if (color[w] === 'white') {
          d[w] = d[u] + 1 // 在前溯点u的距离上+1，就是当前点w与v点之间的距离。
          pred[w] = u
          queue.enqueue(w)
          color[w] = 'grey'
        }
      }
      color[u] = 'black'
      if (cb) {
        cb(u)
      }
    }
    return {
      distances: d,
      predecessors: pred
    }
  }
  dfs () {
    let dfsVisit = (v, color, d, f, p) => {
      color[v] = 'grey'
      d[v] = ++time
      // if (cb) {
      //   cb(v)
      // }
      let neighbors = this.adjList.get(v)
      for (let i = 0, iLen = neighbors.length; i < iLen; i++) {
        var u = neighbors[i]
        if (color[u] === 'white') {
          p[u] = v
          dfsVisit(u, color, d, f, p)
        }
      }
      color[v] = 'black'
      f[v] = ++time
    }
    let color = this.initializeColor(),
        d = [], // 发现该点的时间
        f = [], // 探索完该点的时间
        p = [],  // 该点的前溯点
        time = 0
    for (let i = 0, iLen = this.vertices.length; i < iLen; i++) {
      let v = this.vertices[i]
      d[v] = 0
      f[v] = 0
      p[v] = null
    }
    for (let i = 0, iLen = this.vertices.length; i < iLen; i++) {
      let v = this.vertices[i]
      if (color[v] === 'white') {
        dfsVisit(v, color, d, f, p)
      }
    }
    return {
      discovery: d,
      finished: f,
      predecessors: p
    }
  }
  dfsCb(cb) {
    let dfsVisit = (v, cb) => {
      color[v] = 'grey'
      if (cb) {
        cb(v)
      }
      let neighbors = this.adjList.get(v)
      for (let i = 0, iLen = neighbors.length; i < iLen; i++) {
        let u = neighbors[i]
        if (color[u] === 'white') {
          dfsVisit(u, cb)
        }
      }
      color[v] = 'black'
    }
    let color = this.initializeColor()
    for (let i = 0, iLen = this.vertices.length; i < iLen; i++) {
      let v = this.vertices[i]
      if (color[v] === 'white') {
        dfsVisit(v, cb)
      }
    }
  }
}

export default {
  Graph
}