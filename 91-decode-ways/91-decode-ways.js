/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s[0] == 0) return 0;
    
    let result = 1;
    let l1 = 1;
    let l2 = 0;
    let t1 = 0;
    let t2 = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] == 0) {
            if (s[i-1] > 2 || s[i-1] == 0) return 0;
            l2 = l1;
            l1 = 0;
        } else {
            t1 = l1;
            t2 = l2;
            l1 += t2;
            
            if ((s[i - 1] == 2 && s[i] <= 6) || s[i - 1] == 1) {
                l2 = t1;
            } else {
                l2 = 0;
            }
        }
        // console.log (l1, l2)
    }
    
    return l1 + l2;
};



// 2 [2] 1 o =1
// 2 [2 2]              [22] 2 o = 1 t = 1
// 6 [2 2 6]   [2 26]   [22 6] 3  o = 2 t = 1
// 2 [2 2 6 2]                               [2 26 2]                             [22 6 2] 3 o = 3
// 2 [2 2 6 2 2]                [2 2 6 22]   [2 26 2 2]               [2 26 22]   [22 6 2 2]               [22 6 22] 6 o =3 t = 3
// 6 [2 2 6 2 2 6] [2 2 6 2 26] [2 2 6 22 6] [2 26 2 2 6] [2 26 2 26] [2 26 22 6] [22 6 2 2 6] [22 6 2 26] [22 6 22 6]  9 o = 6 t = 3

// 2 [2] 1  o = 1 t = 0
// 2 [2 2]              [22] 2 o = 1 t = 1
// 6 [2 2 6]   [2 26]   [22 6] 3 o = 2 t = 1
// 2 [2 2 6 2]                               [2 26 2]                             [22 6 2] 3 o = 3
// 2 [2 2 6 2 2]                [2 2 6 22]   [2 26 2 2]               [2 26 22]   [22 6 2 2]               [22 6 22] 6 o =3 t = 3
// 0 [2 2 6 2 20]                  x         [2 26 2 20]                 x        [22 6 2 20]              x o = 0 t = 3
// "1" [1] o 1
// "12" [1 2] [12] o 1 t 1
// "120" [1 20] t 1
// "1201" [1 20 1] o 1
// "12012" [1 20 1 2] [1 20 12] o 1 t 1
// "120123" [ 1 20 1 2 3] [ 1 20 1 23] [1 20 12 3] o 2 t 1
// "1201234" [1 20 1 2 3 4] [1 20 1 23 4] []
// "1" [1] 1
// "11" [1 1] [11] 1 1
// "111" [1 1 1]             [1 11]   [11 1] 2 1
// "1111" [1 1 1 1]               [1 1 11]   [1 11 1]            [11 1 1]              [11 11] 3 2
// "11111" [1 1 1 1 1] [1 1 1 11] [1 1 11 1] [1 11 1 1] [1 11 11] [11 1 1 1] [11 1 11] [11 11 1] 5 3
// "111111" []
// "1111111"
// "11111111"
2
3
5
8
12
18
27

2
3
5
8
13
21
34