
export default function LinkedList () {
  this.listHead = null
  // Build the following functions in your linked list class:

  // append(value) adds a new node containing value to the end of the list
  this.append = (value) => {
    // if listHead == null, make this the listHead
    if (this.listHead == null) {
      this.listHead = value

      // set next node to null
      this.listHead.nextNode = null
    } else {
      // else, go to end of list and add the node
      let temp = this.listHead
      while (temp.nextNode != null) temp = temp.nextNode
      temp.nextNode = value
    }
  }

  // prepend(value) adds a new node containing value to the start of the list
  this.prepend = (value) => {
    let temp = null
    if (this.listHead != null) temp = this.listHead
    this.listHead = value
    this.listHead.nextNode = temp
  }

  // size returns the total number of nodes in the list
  this.size = () => {
    if (this.listHead == null) return 0

    let listSize = 1
    let temp = this.listHead
    while (temp.nextNode != null) {
      temp = temp.nextNode
      listSize++
    }
    return listSize
  }

  // head returns the first node in the list
  this.head = () => {
    return this.listHead
  }

  // tail returns the last node in the list
  this.tail = () => {
    let temp = this.listHead
    while (temp.nextNode != null) temp = temp.nextNode
    return temp
  }

  // at(index) returns the node at the given index
  this.at = (searchIndex) => {
    let temp = this.listHead
    let counter = 0

    while (!(counter === searchIndex)) {
      counter++
      temp = temp.nextNode
    }
    return temp
  }

  // pop removes the last element from the list
  this.pop = () => {
    // if head is null, return null
    if (this.listHead == null) return null

    const lastNode = this.tail()

    // get length of list, since indexed at 0, use that length and pop off that amount
    let temp = this.listHead

    // go to the node before end of list and set its next node to null
    while (temp.nextNode !== lastNode) temp = temp.nextNode

    // set the second to last node's next node to niull
    temp.nextNode = null

    return lastNode
  }

  // contains(value) returns true if the passed in value is in the list and otherwise returns false.
  this.contains = (value) => {
    if (this.listHead == null) return false

    let temp = this.listHead
    while (temp.nextNode !== null) {
      if (temp.value === value) {
        return true
      }
      temp = temp.nextNode
    }

    return false
  }

  // find(value) returns the index of the node containing value, or null if not found.
  this.find = (value) => {
    if (this.listHead == null) return 'not present'

    let temp = this.listHead
    let counter = 0
    while (temp.nextNode !== null) {
      if (temp.value === value) {
        return counter
      }
      temp = temp.nextNode
      counter++
    }

    return 'not present'
  }

  /*
        toString represents your LinkedList objects as strings, so you can print them out and preview them...
        in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
        */
  this.toString = () => {
    let listString = ''

    let temp = this.listHead
    while (temp.nextNode != null) {
      listString = listString + `( ${temp.value} ) -> `
      temp = temp.nextNode
    }
    listString += `( ${temp.value} ) -> ( ${temp.nextNode} )`
    return listString
  }
}
