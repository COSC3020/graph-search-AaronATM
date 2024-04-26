// looked at examples/psuedocode from geeks for geeks and baeldung to put them together
// https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/
// https://www.baeldung.com/cs/dfs-vs-bfs-vs-dijkstra


// data structure for graph is adjacency list
function depthFirstSearch(graph, startNode, targetNode) 
{
    var visited = new Array(graph.length);
    var order = [];

    for (var i = 0; i < graph.length; i++)
    {
        visited[i] = false;
    }
    
    var result = dfsHelper(graph, startNode, targetNode, visited, order);
    result.unshift(startNode);

    return result;
}

function dfsHelper(graph, currNode, targetNode, visited, order)
{
    var adjacentValues = [];
    visited[currNode] = true;
    
    if (currNode == targetNode)
    {
        return [currNode];
    }

    for (var j = 0; j < graph[currNode].length; j++)
    {
        adjacentValues.push(graph[currNode][j]);
    }

    for (var i = 0; i < adjacentValues.length; i++)
    {
        var n = adjacentValues[i];

        if (!visited[n])
        {
            if (dfsHelper(graph, n, targetNode, visited, order) != null)
            {
                order.unshift(n);
                return order;
            }
        }
    }

    return null;
}

// Temporary testing code

// case 1: start 1, find 5
// case 2: start 2, find 6
var testGraph1 = [[1, 5], [0, 2, 4], [1], [4, 6], [1, 3], [0], [3]];

// case 3: start 1, find 6
// case 4: start 3, find 2
var testGraph2 = [[1, 5], [0, 2, 3, 4], [1], [1, 4, 6], [1, 3], [0], [3]];

// testing DFS
var resCase1 = depthFirstSearch(testGraph1, 1, 5);
var resCase2 = depthFirstSearch(testGraph1, 2, 6);
var resCase3 = depthFirstSearch(testGraph2, 1, 6);
var resCase4 = depthFirstSearch(testGraph2, 3, 2);

console.log(resCase1);
console.log(resCase2);
console.log(resCase3);
console.log(resCase4);