class Solution:
    def smallestPalindrome(self, s: str) -> str:
        n = len(s)
        sorted_arr = sorted(s[:n // 2])
        arr1 = sorted_arr
        mid = s[n // 2] if n % 2 == 1 else ""
        arr2 = list(reversed(sorted_arr))
        return "".join(arr1 + [mid] + arr2)