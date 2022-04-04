class Graph {
  constructor() {
    // adjacency list
    this.adj = {};
  }

  // edge from vertex u to vertex v
  addEdge(u, v) {
    if (!this.adj[u]) {
      this.adj[u] = [];
    }
    this.adj[u].push(v);
  }

  print() {
    Object.entries(this.adj).forEach(([key, values]) => {
      console.log(key, "->", values);
    });
  }
}

/**
 * Queue-based implementation of BFS.
 * @param  {Graph}  g: a graph with adjacency list adj such that g.adj[u] is a list of u’s neighbors.
 * @return {string} s: source
 */
function bfs(g, s) {
  // I'm using JavaScript's array as queue as it has push and pop methods that
  const queue = [];

  // bfsResult structure
  const visited = {
    [s]: {
      level: 0,
      parent: null,
    },
  };

  queue.push(s);

  let level = 0;
  while (queue.length) {
    level += 1;
    const vertex = queue.pop();
    g.adj[vertex].forEach((n) => {
      if (!visited[n]) {
        visited[n] = {
          level,
          parent: vertex,
        };
        queue.push(n);
      }
    });
  }

  return visited;
}

function test() {
  const graph = new Graph();
  const [a, b, c] = ["a", "b", "c"];
  graph.addEdge(b, a);
  graph.addEdge(a, c);
  graph.addEdge(c, b);
  graph.addEdge(b, c);
  graph.print();
  const bfsResult = bfs(graph, a);
  console.log(JSON.stringify(bfsResult, null, 2));
}

test();
