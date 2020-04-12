class Node {
  value;
  next;
  prev;

  constructor(value = null, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

/**
 * Initialize your data structure here.
 */
const MyLinkedList = function() {
  this.head = null;
  this.tail = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  let top = this.head;
  let i = 0;

  while (top !== null && i < index) {
    top = top.next;
    i++;
  }

  if (top !== null) {
    return top.value;
  }

  return -1;
};

/**
 * Add a node of value val before the first element of the linked list.
 * After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  const node = new Node(val, this.head);

  if (this.head !== null) {
    this.head.prev = node;
  }

  this.head = node;

  if (this.tail === null) {
    this.tail = node;
  }
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  const node = new Node(val, null, this.tail);

  if (this.tail !== null) {
    this.tail.next = node;
  }

  this.tail = node;

  if (this.head === null) {
    this.head = node;
  }
};

/**
 * Add a node of value val before the index-th node in the linked list.
 * If index equals to the length of linked list, the node will be appended to the end of linked list.
 * If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  let top = this.head;
  let i = 0;

  if (index === 0) {
    this.addAtHead(val);
    return;
  }

  while (top !== null && i < index) {
    top = top.next;
    i++;
  }

  if (top !== null) {
    const node = new Node(val, top, top.prev);
    top.prev.next = node;
    top.prev = node;
  }

  if (top === null && i === index) {
    this.addAtTail(val);
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  let top = this.head;
  let i = 0;

  while (top !== null && i < index) {
    top = top.next;
    i++;
  }

  if (top !== null) {
    if (top.next !== null) {
      top.next.prev = top.prev;
    } else {
      this.tail = top.prev;
    }

    if (top.prev !== null) {
      top.prev.next = top.next;
    } else {
      this.head = top.next;
    }
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

const linkedList = new MyLinkedList();
linkedList.addAtHead(3);
linkedList.addAtHead(2);
linkedList.addAtHead(1);
linkedList.deleteAtIndex(0);

console.log(linkedList);
