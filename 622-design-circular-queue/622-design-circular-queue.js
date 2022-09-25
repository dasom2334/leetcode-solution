/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.head = new Array(k).fill(-1);
    this.size = 0;
    this.pointer = 0;
};
MyCircularQueue.prototype.getRearPointer = function(value) {
    let target = this.size - 1 + this.pointer;
    return (target < this.head.length)? target : this.head.length - target;
}

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (!this.isFull()) {
        this.size += 1;
        this.head[this.getRearPointer()] = value;
        return true;
    }
    return false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (!this.isEmpty()) { 
        this.size -= 1;
        this.head[this.pointer] = -1;
        this.pointer += 1;
        if (this.pointer >= this.head.length) this.pointer = 0;
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) return -1;
    return this.head[this.pointer]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) return -1;
    return this.head[this.getRearPointer()];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.size == 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.size == this.head.length;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */