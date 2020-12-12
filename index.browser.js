import arrayTool from './lib/esm/arrayTool.js'
import graphTool from './lib/esm/graphTool.js'
import hashTable from './lib/esm/hashTable.js'
import linkedListTool from './lib/esm/linkedListTool.js'
import promiseTool from './lib/esm/promiseTool.js'
import prototypeExtend from './lib/esm/prototypeExtend.js'
import queueTool from './lib/esm/queueTool.js'
import stackTool from './lib/esm/stackTool.js'
import treeTool from './lib/esm/treeTool.js'
import orderTool from './lib/esm/orderTool.js'
import baseTool from './lib/esm/baseTool.js'

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
    Lru: baseTool.Lru,
    compose: baseTool.compose,
    getType: baseTool.getType,
    deepCloneByChannel: baseTool.deepCloneByChannel,
    plainArr: baseTool.plainArr,
    debounce: baseTool.debounce,
    throttle: baseTool.throttle
  }
}