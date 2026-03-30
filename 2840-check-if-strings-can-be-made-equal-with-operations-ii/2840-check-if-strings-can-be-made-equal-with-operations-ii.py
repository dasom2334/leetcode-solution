class Solution:
    def checkStrings(self, s1: str, s2: str) -> bool:
        q11, q12 = Counter(s1[::2]), Counter(s1[1::2]) 
        q21, q22 = Counter(s2[::2]), Counter(s2[1::2]) 

        return q11 == q21 and q12 == q22
