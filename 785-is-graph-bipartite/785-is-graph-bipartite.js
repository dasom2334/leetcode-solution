/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    let result = true;
    const visited = [];
    const bipart = [true];
    
    for (const index in graph) {
        if (!visited[index]) {
            const queue = [index];
            let current = bipart[index] ?? true;

            visited[index] = true;
            while (queue.length > 0) {
                const cursur = queue.shift();
                for (const node of graph[cursur]) {
                    if (bipart[node] !== undefined) {
                        if (bipart[node] !== !bipart[cursur]) {
                            return false;
                        } else {
                            bipart[node] = !bipart[cursur];
                        }
                    } else {
                        bipart[node] = !bipart[cursur];
                    }
                    if (!visited[node]) {
                        queue.push(node);
                        visited[node] = true;
                        console.log(queue);
                    }
                }
                current = !current;
            }
        }
    }
    
    return result;
};
