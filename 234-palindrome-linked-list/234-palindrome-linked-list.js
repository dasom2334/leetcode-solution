/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    let p = [];
    let node = head;
    while(node) {
        p.push(node.val);
        node = node.next;
    }
    let floor = Math.floor(p.length/2);
    // console.log(p.slice(0, floor), p.slice(floor+ ((p.length%2 == 1)?1:0)).reverse(), floor, ceil, ceil+ ((p.length%2 == 1)?1:0));
    return p.slice(0, floor).join('') == p.slice(floor+ ((p.length%2 == 1)?1:0)).reverse().join('');
};