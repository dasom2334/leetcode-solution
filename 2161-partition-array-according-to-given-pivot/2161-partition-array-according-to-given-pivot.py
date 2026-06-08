class Solution:
    def pivotArray(self, nums: List[int], pivot: int) -> List[int]:
        def get_order_point(x: num):
            if x > pivot:
                return 2
            if x == pivot:
                return 1
            return 0
        reranged = sorted(
            nums,
            key=lambda x: get_order_point(x)
        )
        return reranged