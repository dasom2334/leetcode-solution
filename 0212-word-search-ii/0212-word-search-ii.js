/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {    
    const m = board.length;
    const n = board[0].length;
    const maxL = 10;
    
    // const map = new Map();
    const trie = {};
    const dp = new Array(m).fill(null).map(e => new Array(n).fill(0));
    const result = new Set();
    const map = new Map();
    
    
    // for (const word of words) {
    //     const last = word.at(-1);
    //     if (!map.has(last)) map.set(last, []);
    //     map.get(last).push(word);
    // }
    
    for (const word of words) {
        
        let tr = trie;
        for (let i = word.length - 1; i >= 0; i--) {
            if (!(word[i] in tr)) tr[word[i]] = {};
            tr = tr[word[i]];
        }
        tr['word'] = true;
    }
    
    
    // console.log(map);
    const doTrie = (str) => {
        if (map.has(str)) {
            return;
        } else {
            map.set(str, 1);
        }
        for (let i = str.length - 1; i >= 0; i--) {
            if (!(str[i] in trie)) continue;
            
            let tr = trie;
            let j = i;
            while (str[j] in tr) {
                tr = tr[str[j]];
                if (tr['word'] === true) {
                    result.add(str.slice(j, i+1));  
                } 
                j--;
            }
        }
    }
    
    const dfs = (y, x, str = "") => {
        if (y >= m || x >= n || y < 0 || x < 0 || dp[y][x] === 1 || str.length >= maxL) {
            return false;
        }
        dp[y][x] = 1;
        
        str += board[y][x];
        
        // if (map.get(board[y][x])?.includes(str)) {
        //     result.add(str);
        // }
        
        const wasd = [dfs(y+1, x, str), dfs(y-1, x, str), dfs(y, x+1, str), dfs(y, x-1, str)];
        // console.log(wasd);
        if (!wasd[0] && !wasd[1] && !wasd[2] && !wasd[3]) {
        // if (!dfs(y+1, x, str) && !dfs(y-1, x, str) && !dfs(y, x+1, str) && !dfs(y, x-1, str)) {
        // if (!wasd.includes(true)) {
            // console.log(str);
            doTrie(str); 
        }
        
        dp[y][x] = 0;
        return true;
    };
    
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j);
        }
    }
    
    
    return [...result];
};