
var Trie = function() {
    this.trie = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let cur = this.trie;
    let i = 0;
    for (; i < word.length - 1; i++) {
        if (!(word[i] in cur)) cur[word[i]] = {};
        cur = cur[word[i]];
    }
    
    if (!(word[i] in cur)) cur[word[i]] = {};
    cur[word[i]]['word'] = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    
    let cur = this.trie;
    for (let i = 0; i < word.length; i++) {
        if (!(word[i] in cur)) return false;
        cur = cur[word[i]];
    }
    
    return (cur['word'] === true) ? true : false;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let cur = this.trie;
    for (let i = 0; i < prefix.length; i++) {
        if (!(prefix[i] in cur)) return false;
        cur = cur[prefix[i]];
    }
    
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */