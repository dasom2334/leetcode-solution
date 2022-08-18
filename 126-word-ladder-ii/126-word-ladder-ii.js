/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    const goal = wordList.indexOf(endWord);
    let result = [];
    if (goal == -1) return result;
    if (beginWord === endWord) return [[beginWord]]
    
    let links = {};
    
    for(let i = 0; i < wordList.length; i++) {
        for(let j = i; j < wordList.length; j++) {
            let count = 0;
            for (let m = 0; m < beginWord.length; m++) {
                if(wordList[i][m] == wordList[j][m]) count++;
            }
            
            if (!(wordList[i] in links)) {
                links[wordList[i]] = [];
            }
            if (!(wordList[j] in links)) {
                links[wordList[j]] = [];
            } 
            if (count == beginWord.length - 1) {
                links[wordList[i]].push(j);
                links[wordList[j]].push(i);
            }
        }
    }
    if (!(beginWord in links)) {
        links[beginWord] = [];
        for(let j = 0; j < wordList.length; j++) {
            let count = 0;
            for (let m = 0; m < beginWord.length; m++) {
                if(beginWord[m] == wordList[j][m]) count++;
            }
            if (count == beginWord.length - 1) {
                links[beginWord].push(j);
            }
        }
    }
    
    let levels = {};
    let toVisit = [[beginWord, (wordList.includes(beginWord))?0:-1]];
    while(toVisit.length > 0) {
        const [word, level] = toVisit.shift();
        if (word in levels) continue;
        levels[word] = level;
        if (!(wordList[goal] in levels)) {
            for (const t of links[word]) {
                if (!levels[t]) toVisit.push([wordList[t], level + 1]);
            }
        }
    }
    // console.log(links);
    // console.log(levels);
    
    
    const dfs = (nodes, level) => {
        if (levels[nodes[0]] == 0) {
            if (beginWord != nodes[0]) {
                result.push([beginWord, ...nodes]);   
            } else {
                result.push(nodes);
            }
        } else {
            for (const index of links[nodes[0]]) {
                if (levels[wordList[index]] == level - 1) dfs([wordList[index], ...nodes], level - 1);
            }   
        }
        
    }
    
    dfs([endWord], levels[endWord]);
    
    // return result.map(e => [beginWord, ...e.map(e1 => wordList[e1])]);
    return result;
};