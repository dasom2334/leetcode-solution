/**
 * @param {string[]} words
 */
var WordFilter = function(words) {
    // console.log(words);
    this.words = words;
    this.index = {};
    for (const i in this.words) {
        const ps = this.getIndex(this.words[i]);
        if (this.index[ps] == undefined) {
            this.index[ps] = [i];
        } else {
            this.index[ps].push(i);
        }
    }
};

/** 
 * @param {string} prefix 
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function(prefix, suffix) {
    let result = -1;
    const key = this.getIndex(prefix+suffix);
    const dic = this.index[key];
    if (dic != undefined) {
        for (let i = dic.length - 1; i >= 0; i--){
            const word = this.words[parseInt(dic[i])]
            const pre = word.slice(0, prefix.length);
            const suf = word.slice(-suffix.length);
            // console.log(pre, suf);
            if (pre == prefix && suf == suffix) {
                result = parseInt(dic[i]);
                break;
            }
        }
       
    }
    return result;
};

WordFilter.prototype.getIndex = function(word) {
    const p = word[0];
    const s = word.slice(-1);
    const ps = [p, s].join('|');
    return ps;
}

/** 
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */