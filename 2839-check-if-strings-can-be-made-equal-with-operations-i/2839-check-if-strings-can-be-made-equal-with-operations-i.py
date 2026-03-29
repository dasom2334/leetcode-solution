class Solution:
    def canBeEqual(self, s1: str, s2: str) -> bool:
        q11, q12 = [], []
        q21, q22 = [], []

        for i in range(len(s1)):
            if i % 2 == 0:
                q11.append(s1[i])
            else:
                q12.append(s1[i])
        for i in range(len(s2)):
            if i % 2 == 0:
                q21.append(s2[i])
            else:
                q22.append(s2[i])
        return "".join(sorted(q11)) == "".join(sorted(q21)) and "".join(sorted(q12)) == "".join(sorted(q22))
