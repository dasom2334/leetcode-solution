/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    
    const m = board.length;
    const n = board[0].length;
    const maxL = 10;
    
    const map = new Map();
    const dp = new Array(m).fill(null).map(e => new Array(n).fill(0));
    const result = new Set();
    
    
    for (const word of words) {
        const last = word.at(-1);
        if (!map.has(last)) map.set(last, []);
        map.get(last).push(word);
    }
    
    // console.log(map);
    const dfs = (y, x, str = "") => {
        if (y >= m || x >= n || y < 0 || x < 0 || dp[y][x] === 1 || str.length >= maxL) return;
        dp[y][x] = 1;
        
        str += board[y][x];
        if (map.get(board[y][x])?.includes(str)) {
            result.add(str);
        }
        
        dfs(y+1, x, str);
        dfs(y-1, x, str);
        dfs(y, x+1, str);
        dfs(y, x-1, str);
        
        dp[y][x] = 0;
    };
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j);
        }
    }
    
    
    return [...result];
};