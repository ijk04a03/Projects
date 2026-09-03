// import { LinkedList, Node } from './ll.js';
// import { createLinkedList, createNode } from './linkedlist.js';
import { HashMap, Node } from './assignmentHM.js';

// const list = new LinkedList();
// list.append('dog');
// list.append('cat');
// list.append('parrot');
// list.append('hamster');
// list.append('snake');
// list.append('turtle');

// console.log('Class version:');
// console.log(list.toString());


let test = new HashMap();
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.get('apple'));
console.log(test.has('kite'));
console.log(test.keys());


console.log(test.entries());