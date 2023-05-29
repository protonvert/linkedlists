import LinkedList from './linkedList.js'
import Node from './Node.js'

const list = new LinkedList()

list.append(Node(1))
console.log(list.toString()) // ( 1 ) -> ( null )

list.prepend(Node(0))
console.log(list.toString()) // ( 0 ) -> ( 1 ) -> ( null )

console.log(list.size()) // prints 2

console.log(list.contains(5)) // false
console.log(list.contains(0)) // true

console.log(list.find(0)) // prints index 0
console.log(list.find(1)) // prints index 1

console.log(list.at(0)) // returns { value: 0, nextNode: { value: 1, nextNode: null } }
console.log(list.pop()) // returns { value: 1, nextNode: null }
console.log(list.toString()) // ( 0 ) -> ( null ), successfully popped off the node { value: 1, nextNode: null }

list.append(Node(4))
list.append(Node(5))
list.append(Node(6))
list.prepend(Node(-1))
console.log(list.toString()) // ( -1 ) -> ( 0 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( null )

console.log(list.size()) // prints 5
