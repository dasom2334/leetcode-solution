/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {    
    const m = board.length;
    const n = board[0].length;
    const maxL = 10;
    
    const trie = {};
    const result = [];
    
    
    for (const word of words) {
        let tr = trie;
        for (let i = 0; i < word.length; i++) {
            if (!(word[i] in tr)) tr[word[i]] = {};
            tr = tr[word[i]];
        }
        tr['word'] = word;
    }
    
    const dfs = (y, x, node) => {
        const cur = board[y]?.[x];
        if (!cur || !node?.[cur]) return;
        board[y][x] = null;
        
        dfs(y+1, x, node[cur]);
        dfs(y-1, x, node[cur]);
        dfs(y, x+1, node[cur]);
        dfs(y, x-1, node[cur]);
        
        if (node[cur] && 'word' in node[cur]) {
            result.push(node[cur]['word']);
            delete node[cur]['word'];
            if (Object.keys(node[cur]).length == 0) {
                delete node[cur];
            }
        }
        
        board[y][x] = cur;
    };
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j, trie);
        }
    }
    
    
    return result;
};