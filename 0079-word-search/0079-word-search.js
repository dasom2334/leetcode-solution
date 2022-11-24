/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    const wl = word.length;
    const dfs = (x, y, c = 0) => {
        if (x < 0 || y < 0 || m <= x || n <= y) return;
        const current = board[x][y];
        if (current !== word[c]) return;
        if (c === word.length - 1) return true;
        c++;
        board[x][y] = '';
        const matched = dfs(x+1, y, c) || dfs(x-1, y, c) || dfs(x, y+1, c) || dfs(x, y-1, c);
        board[x][y] = current;
        return matched;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j)) return true;
        }
    }
    
    
    return false;
};