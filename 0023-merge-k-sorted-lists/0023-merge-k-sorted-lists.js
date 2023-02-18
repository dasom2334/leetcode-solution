/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const map = new Map()
    lists.forEach((e, i) => {
        if (e) map.set(i, e)
    })
    const result = new ListNode()
    let cur = result
    while (map.size > 0) {
        const minKey = getMinKey(map)
        const temp = lists[minKey] 
        if (lists[minKey].next) {
            const temp2 = lists[minKey].next
            lists[minKey] = temp2
            map.set(minKey, temp2)
        } else {
            map.delete(minKey)
        }
        temp.next = null
        cur.next = temp
        cur = cur.next
    }
    return result.next
};

const getMinKey = (map) => {
    let min = Infinity
    let key = -1
    for (const [k, v] of map) {
        const n = v.val
        if (n < min) {
            min = n
            key = k
        }
    }
    return key
}