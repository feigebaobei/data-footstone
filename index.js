const arrayTool = require('./lib/commonjs/arrayTool.js')
const graphTool = require('./lib/commonjs/graphTool.js')
const hashTable = require('./lib/commonjs/hashTable.js')
const linkedListTool = require('./lib/commonjs/linkedListTool.js')
const promiseTool = require('./lib/commonjs/promiseTool.js')
const prototypeExtend = require('./lib/commonjs/prototypeExtend.js')
const queueTool = require('./lib/commonjs/queueTool.js')
const stackTool = require('./lib/commonjs/stackTool.js')
const treeTool = require('./lib/commonjs/treeTool.js')
const orderTool = require('./lib/commonjs/orderTool.js')
const baseTool = require('./lib/commonjs/baseTool.js')

module.exports = {
  arrayTool,
  graphTool,
  hashTable,
  linkedListTool,
  promiseTool,
  prototypeExtend,
  queueTool,
  stackTool,
  treeTool,
  orderTool,
  baseTool: {
    Lru: baseTool.Lru,
    compose: baseTool.compose,
    getType: baseTool.getType,
    deepCloneByChannel: baseTool.deepCloneByChannel,
    plainArr: baseTool.plainArr,
    debounce: baseTool.debounce,
    throttle: baseTool.throttle
  }
}