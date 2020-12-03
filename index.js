const arrayTool = require('./lib/arrayTool.js')
const graphTool = require('./lib/graphTool.js')
const hashTable = require('./lib/hashTable.js')
const linkedListTool = require('./lib/linkedListTool.js')
const promiseTool = require('./lib/promiseTool.js')
const prototypeExtend = require('./lib/prototypeExtend.js')
const queueTool = require('./lib/queueTool.js')
const stackTool = require('./lib/stackTool.js')
const treeTool = require('./lib/treeTool.js')
const orderTool = require('./lib/orderTool.js')
const baseTool = require('./lib/baseTool.js')

module.exports = {
// export {
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
    Lru: baseTool.Lru
  }
}