import arrayTool from './lib/arrayTool.js'
import graphTool from './lib/graphTool.js'
import hashTable from './lib/hashTable.js'
import linkedListTool from './lib/linkedListTool.js'
import promiseTool from './lib/promiseTool.js'
import prototypeExtend from './lib/prototypeExtend.js'
import queueTool from './lib/queueTool.js'
import stackTool from './lib/stackTool.js'
import treeTool from './lib/treeTool.js'
import orderTool from './lib/orderTool.js'
import baseTool from './lib/baseTool.js'

export default {
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