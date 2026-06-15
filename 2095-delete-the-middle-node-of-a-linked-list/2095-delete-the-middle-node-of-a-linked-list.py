# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        total = 1
        cur = head
        while cur.next:
            total += 1
            cur = cur.next

        half = total // 2
        # print(total, half)
        cur_index = 0
        cur = head
        while cur_index < half - 1:
            cur_index += 1
            cur = cur.next
        if cur.next and cur.next.next:
            cur.next = cur.next.next
        elif cur.next:
            cur.next = None
        else:
            head = None
        return head
