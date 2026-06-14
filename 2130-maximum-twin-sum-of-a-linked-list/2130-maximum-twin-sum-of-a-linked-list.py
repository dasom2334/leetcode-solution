# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        cur = head
        cur_next = head
        first = None

        while cur_next and cur_next.next:
            cur_next = cur_next.next.next
            cur.next, first, cur = first, cur, cur.next
        
        result = 0
        while cur:
            result = max(result, first.val + cur.val)
            first, cur = first.next, cur.next
        return result

