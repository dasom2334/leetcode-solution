class Solution:
    def processStr(self, s: str) -> str:
        result = []
        
        for c in s:
            if c == '*':
                if len(result) > 0:
                    result.pop()
            elif c == '#':
                result = result[:] + result[:]
            elif c == '%':
                result.reverse()
            else:
                result.append(c)

        return ''.join(result)