# Write your MySQL query statement below
SELECT T.request_at AS Day
    , ROUND(SUM(IF(T.status = 'completed', 0, 1)) / COUNT(*), 2) AS 'Cancellation Rate'
    # , SUM(CASE WHEN T.status != 'completed' then 1 else 0 end) , SUM(CASE WHEN T.status = 'completed' then 1 else 0 end)
    # , COUNT(*)
FROM TRIPS AS T
LEFT JOIN USERS AS C ON C.users_id = T.client_id
LEFT JOIN USERS AS D ON D.users_id = T.driver_id
WHERE C.banned = 'No'
    AND D.banned = 'No'
    AND T.request_at BETWEEN '2013-10-01' AND '2013-10-03'
GROUP BY T.request_at
