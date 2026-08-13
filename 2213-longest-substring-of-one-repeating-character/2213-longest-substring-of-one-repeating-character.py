class Solution:
    def longestRepeating(self, s: str, queryCharacters: str, queryIndices: List[int]) -> List[int]:
        n = len(s)
        size = 1
        while size < n:
            size *= 2
        prefix = [0] * (size * 2)
        suffix = [0] * (size * 2)
        best = [0] * (size * 2)
        lefts = [""] * (size * 2)
        rights = [""] * (size * 2)
        lengths = [0] * (size * 2)

        def merge(i: int):
            l = i * 2
            r = i * 2 + 1

            if lengths[l] == 0:
                lengths[i] = lengths[r]
                prefix[i] = prefix[r]
                suffix[i] = suffix[r]
                best[i] = best[r]
                lefts[i] = lefts[r]
                rights[i] = rights[r]
                return
            if lengths[r] == 0:
                lengths[i] = lengths[l]
                prefix[i] = prefix[l]
                suffix[i] = suffix[l]
                best[i] = best[l]
                lefts[i] = lefts[l]
                rights[i] = rights[l]
                return
            
            lengths[i] = lengths[l] + lengths[r]
            lefts[i] = lefts[l]
            rights[i] = rights[r]
            prefix[i] = prefix[l]
            suffix[i] = suffix[r]
            best[i] = max(best[l], best[r])

            if prefix[l] == lengths[l] and rights[l] == lefts[r]:
                prefix[i] = lengths[l] + prefix[r]
            if suffix[r] == lengths[r] and rights[l] == lefts[r]:
                suffix[i] = suffix[l] + lengths[r]

            if rights[l] == lefts[r]:
                best[i] = max(
                    best[i],
                    suffix[l] + prefix[r]
                )

            return
        for i in range(n):
            pos = size + i

            lengths[pos] = 1
            prefix[pos] = 1
            suffix[pos] = 1
            best[pos] = 1

            lefts[pos] = s[i]
            rights[pos] = s[i]
        for i in range(size - 1, 0, -1):
            merge(i)

        answers = []

        for idx, ch in zip(queryIndices, queryCharacters):
            pos = size + idx

            lefts[pos] = ch
            rights[pos] = ch

            pos //= 2

            while pos >= 1:
                merge(pos)
                pos //= 2

            answers.append(best[1])

        return answers