/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels = [...'aeiou'];
    const str = [...s.toLowerCase()];
    const a = str.slice(0, s.length / 2).filter(e => vowels.includes(e));
    const b = str.slice(s.length / 2).filter(e => vowels.includes(e));
    
    return a.length === b.length;
};