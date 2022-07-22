/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (!head || !head.next) return head;
    let root = new ListNode();
    let less = root;
    less.next = head;
    let bnode = less;
    let node = head;
    while (bnode.next && bnode.next.val < x) {
        bnode = bnode.next;
    }
    node = bnode.next;
    less = bnode;
    if (!node) return root.next;
    while(node.next) {
        if (node.val < x) {
            
            bnode.next = node.next;
            
            node.next = less.next;
            less.next = node;
            
            less = less.next;
            node = bnode.next;
        } else {
            bnode = bnode.next;
            node = node.next;    
        }

    }
    
    if (node.val < x) {
        let tempNode = node;
        bnode.next = null;

        tempNode.next = less.next;
        less.next = tempNode;
        less = less.next;
        node = bnode.next;
    } 
    return root.next;
};


var partitionOld = function(head, x) {
    let p1 = new ListNode();
    let p2 = new ListNode();
    let pn1 = p1;
    let pn2 = p2;
    let node = head;
    while(node !== null) {
        if (node.val < x) {
            pn1.next = new ListNode(node.val);
            pn1 = pn1.next;
        } else {
            pn2.next = new ListNode(node.val);
            pn2 = pn2.next;
        }
        node = node.next;
    }
    // console.log(p1, p2);
    pn1.next = p2.next;
    return p1.next;
};