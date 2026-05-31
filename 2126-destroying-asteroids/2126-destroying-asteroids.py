class Solution:
    def asteroidsDestroyed(self, mass: int, asteroids: List[int]) -> bool:
        sorted_asteroids = sorted(asteroids)
        cur_mass = mass
        n = len(asteroids)
        for i in range(n):
            asteroid = sorted_asteroids[i]
            if cur_mass < asteroid:
                return False
            cur_mass += asteroid

        return True