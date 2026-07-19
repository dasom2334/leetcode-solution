class Solution:
    def smallestSubsequence(self, s: str) -> str:
        last_idx = {c: i for i, c in enumerate(s)}
        stack = []
        visited = set()

        for i, c in enumerate(s):
            if c not in visited:
                while stack and stack[-1] > c and last_idx[stack[-1]] > i:
                    lc = stack.pop()
                    visited.remove(lc)
                stack.append(c)
                visited.add(c)

        return "".join(stack)