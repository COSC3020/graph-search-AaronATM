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
