/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    let dict = {};
    
    for (const path of paths) {
        const commands = path.split(' ');
        const directory = commands[0];
        
        for (let i = 1; i < commands.length; i++) {
            const sp = commands[i].split('(');
            const [name, content] = [sp[0], sp[1].slice(0, -1)];
            if (!(content in dict)) dict[content] = [];
            dict[content].push(directory + '/' + name);
        }
        
    }
    return Object.values(dict).filter(e => e.length > 1);
};