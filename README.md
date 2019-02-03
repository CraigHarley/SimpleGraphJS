[![Build Status](https://travis-ci.org/CraigHarley/SimpleGraphJS.svg?branch=master)](https://travis-ci.org/CraigHarley/SimpleGraphJS)
[![Coverage Status](https://coveralls.io/repos/github/CraigHarley/SimpleGraphJS/badge.svg?branch=master)](https://coveralls.io/github/CraigHarley/SimpleGraphJS?branch=master)

# SimpleGraph.js

A very simple graph implementation for use in JS or Typescript, using an adjacency matrix.

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

Then run a breadth first search like this:
```typescript
graph.breadthFirstSearch('1', '3')
```

You will then get back an `ISearchResult`, which looks like this:
```json
{
   "path": ["2", "3"],
   "success": true,
   "visited": 2
}
```

## Todo
- Option to switch to using an adjacency list.
- Depth First Search traversal.
- Support for Weighted Graphs.
- Support for Directed Graphs.

## License
This code is under the MIT licence.