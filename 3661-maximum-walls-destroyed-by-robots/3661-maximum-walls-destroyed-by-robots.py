import bisect

class Solution:
    def maxWalls(self, robots: List[int], distance: List[int], walls: List[int]) -> int:
        lengths = len(robots)

        sorted_idxs = sorted(range(lengths), key=lambda x: robots[x])
        sorted_walls = sorted(walls)

        l_destroed, r_destroed, r_wall_pointer = [0, 0, 0]
        last_robot_rigt = 0
        for i in range(lengths):
            cur_robot_idx = sorted_idxs[i]
            robot, dist = robots[cur_robot_idx], distance[cur_robot_idx]
            
            l_dest = 0
            rl_dest = 0
            r_dest = 0

            befo_robot = robots[sorted_idxs[i - 1]] if i - 1 >= 0 else -1
            next_robot = robots[sorted_idxs[i + 1]] if i + 1 < lengths else sorted_walls[-1] + 1

            left_limit = max(robot - dist, befo_robot + 1)
            right_limit = min(robot + dist, next_robot - 1)

            idx_left = bisect.bisect_left(sorted_walls, left_limit)
            idx_robot_right = bisect.bisect_right(sorted_walls, robot)
            l_dest = max(0, idx_robot_right - idx_left)

        
            rl_dest = max(0, idx_robot_right - max(r_wall_pointer, idx_left))

            idx_right = bisect.bisect_right(sorted_walls, right_limit)
            idx_robot_left = bisect.bisect_left(sorted_walls, robot)
            r_dest = max(0, idx_right - idx_robot_left)

            
            l_cur_destroed = max(r_destroed + rl_dest, l_destroed + l_dest)
            r_cur_destroed = max(l_destroed, r_destroed) + r_dest

            l_destroed = l_cur_destroed
            r_destroed = r_cur_destroed
            r_wall_pointer = idx_right

            # print(
            #     robot, dist,
            #     left_limit, right_limit,
            #     # l_dest,
            #     # rl_dest,
            #     # r_dest,
            #     # l_destroed,
            #     # r_destroed,
            #     l_wall_pointer,
            #     r_wall_pointer,
            #     sorted_walls[l_wall_pointer],
            #     # sorted_walls[r_wall_pointer],
            #     # lwp, rwp
            # )

        return max(l_destroed, r_destroed)