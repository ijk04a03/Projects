import { LinkedList, Node } from './ll.js';
import { createLinkedList, createNode } from './linkedlist.js';

const list = new LinkedList();
list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');

console.log('Class version:');
console.log(list.toString());