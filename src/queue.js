const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = null;
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if (!this.queue) {
      this.queue = new ListNode(value);
      return this.queue;
    }

    let curValue = this.queue;

    while (curValue.next) {
      curValue = curValue.next;
    }

    curValue.next = new ListNode(value);
  }

  dequeue() {
    let headValue = this.queue.value;
    this.queue = this.queue.next;

    return headValue;
  }
}

module.exports = {
  Queue,
};
