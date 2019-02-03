# SimpleGraph.js

A very simple graph implementation for use in JS, using an adjacency matrix.

## Installing

Simply:
```bash
yarn add simplegraphjs
```

Then import the graph:
```typescript
import {Graph} from "simplegraphjs";
```

## Usage
Load the graph up with edges using:
```typescript
import {Graph} from "simplegraphjs";
const graph = new Graph();
graph.addEdge('1', '2');
graph.addEdge('2', '3');
graph.addEdge('2', '4');
graph.addEdge('4', '5');
```

## Todo
- Option to switch to using an adjacency list.
- Depth First Search traversal.
- Support for Weighted Graphs.
- Support for Directed Graphs.

## License
This code is under the MIT licence.