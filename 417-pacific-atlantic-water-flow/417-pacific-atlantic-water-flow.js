/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    // heights = new Array(200).fill(0).map(e => new Array(200))
    let dp = new Array(heights.length).fill(0).map(e => new Array(heights[0].length).fill(0).map(e2 => ''));
    
    
    const dfs = (ocean, l, flow) => {
        if(l[0] < 0 || l[1] < 0 || l[0] >= heights.length || l[1] >= heights[0].length) return;
         // console.log(flow, l, heights[l[0]][l[1]],'|'+dp[l[0]][l[1]]+'|', '|'+ocean+'|', flow <= heights[l[0]][l[1]], !dp[l[0]][l[1]].includes(ocean));
        
        // console.log(dp);
        if (flow <= heights[l[0]][l[1]] && !dp[l[0]][l[1]].includes(ocean)) {
            dp[l[0]][l[1]] += ocean;
            
            if (dp[l[0]][l[1]].length == 2) result.push(l);
            
            dfs(ocean, [l[0]+1, l[1]], heights[l[0]][l[1]]);
            dfs(ocean, [l[0]-1, l[1]], heights[l[0]][l[1]]);
            dfs(ocean, [l[0], l[1]+1], heights[l[0]][l[1]]);
            dfs(ocean, [l[0], l[1]-1], heights[l[0]][l[1]]);
        }

    };

    let result = [];
    
    for (let i = 0; i < heights.length; i++) {
        for (let j = 0; j < heights[0].length; j++) {
            // console.log(i == 0 || j == 0);
            if (i == 0 || j == 0) dfs('p', [i, j], -1);
            if (i == heights.length - 1 || j == heights[0].length - 1) {
                dfs('a', [i, j], -1)
            };
        }
    }
    
    
    // console.log(dp);
    return result;    
};
    