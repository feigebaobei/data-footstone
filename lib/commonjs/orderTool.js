// 与排序相关的工具方法


let swap = (arr, ai, bi) => {
  let aux = arr[ai]
  arr[ai] = arr[bi]
  arr[bi] = aux
}
let bubbleSort = (arr) => {
  for (let i = 0, iLen = arr.length; i < iLen; i++) {
    for (let j = 0, jLen = arr.length - i - 1; j < jLen; j++) {
      if (arr[j + 1] < arr[j]) {
        swap(arr, j, j+1)
      }
    }
  }
}
let selectSort = (arr) => {
  let minIndex = null
  for (let i = 0, iLen = arr.length - 1; i < iLen; i++) {
    minIndex = i
    for (let j = i, jLen = arr.length; j < jLen; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (i !== minIndex) {
      swap(arr, i, minIndex)
    }
  }
}
let insertSort = (arr) => {
  let temp = null
  for (let i = 1, iLen = arr.length; i < iLen; i++) {
    let j = i
    temp = arr[j]
    while (j > 0 && temp < arr[j - 1]) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = temp
  }
}
let quickSort = (arr, orderType = true) => {
  // orderType ture 升序 false 降序
  if (arr.length < 1) {
    return arr
  }
  let pivotIndex = Math.floor(arr.length / 2),
      pivot = arr.splice(pivotIndex, 1)[0],
      left = [],
      right = []
  for (let i = 0, iLen = arr.length; i < iLen; i++) {
    if (orderType) {
      // if (arr[i] < pivot) {
      //   left.push(arr[i])
      // } else {
      //   right.push(arr[i])
      // }
      arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
    } else {
      arr[i] > pivot ? left.push(arr[i]) : right.push(arr[i])
    }
  }
  return quickSort(left, orderType).concat([pivot], quickSort(right, orderType))
}
let partition = (arr, left, right) => {
  let pivotIndex = Math.floor((left + right) / 2)
  let pivot = arr[pivotIndex]
  let i = left,
      j = right
  while (i <= j) {
    while (arr[i] < pivot) {
      i++
    }
    while (arr[j] > pivot) {
      j--
    }
    if (i <= j) {
      let t = arr[j]
      arr[j] = arr[i]
      arr[i] = t
      i++
      j--
    }
  }
  return i
}
let qss = (arr, left, right) => {
  let index = null
  if (arr.length > 1) {
    index = partition(arr, left, right)
    if (left < index - 1) {
      qss(arr, left, index - 1)
    }
    if (index < right) {
      qss(arr, index, right)
    }
  }
}
let quickSortSelf = (arr) => {
  qss(arr, 0, arr.length - 1)
}
// 在数组arr中二分查找item。
// 返回item在数组中的下标。
let binarySearch = (arr, item) => {
  arr = quickSort(arr)
  let low = 0,
      high = arr.length - 1
      // mid = Math.floor()
      mid = null,
      element = null
  // let mid = Math.floor(匠)
  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    element = arr[mid]

    if (element < item) {
      low = mid + 1
    } else if (item < element) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return -1
}
// 堆排序
// 桶排序
// 基数排序
// 计数排序
// let quickSort = () => {}
// let quickOrder = () => {}
// let quickOrder = () => {}
// let quickOrder = () => {}
// let quickOrder = () => {}
// let quickOrder = () => {}
// let quickOrder = () => {}

module.exports = {
  bubbleSort,
  selectSort,
  insertSort,
  quickSort,
  quickSortSelf,
  binarySearch
}