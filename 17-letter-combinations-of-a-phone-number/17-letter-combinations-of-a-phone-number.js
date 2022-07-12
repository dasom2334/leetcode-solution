/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const letters = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };
    const dfs = (letter = '') => {
        if (letter.length < digits.length) {
            const pushed = digits[letter.length];
            // console.log(letter.length, pushed);
            let ls = [];
            for (const c of letters[pushed]) {
                ls = [...ls, ...dfs(letter + c)];
            }
            
            return ls;
        } else {
            if (letter == "") {
                return [];
            } else {
                return [letter];
            }
        }
    }
    // console.log(dfs());
    return dfs();
};