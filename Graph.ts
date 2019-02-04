import {IGraphNode, ISearchResult} from "./types";

export class Graph {
    protected matrix: boolean[][] = [];

    public addEdge(i: i32, j: i32): void {
        if (!this.matrix[i]) {
            this.matrix[i] = [];
        }
        this.matrix[i][j] = true;

        if (!this.matrix[j]) {
            this.matrix[j] = [];
        }
        this.matrix[j][i] = true;
    }

    public breadthFirstSearch(i: i32, j: i32): ISearchResult {
        if (i === j || !this.matrix[i] || !this.matrix[j]) {
            return {
                success: i === j,
                visited: 0,
                path: null
            };
        }

        const queue: IGraphNode[] = [];
        const visitedNodes: i32[] = [];

        this.getNeighbors(i)
            .forEach((value: i32): i32 =>
                queue.push({
                    value,
                    parent: null,
                    isVisited: false
                })
            );


        const isNotAlreadyVisited = (value: i32): boolean => visitedNodes.indexOf(value) === -1;

        while (true) {
            const currentNode = queue.shift();
            if (currentNode) {
                currentNode.isVisited = true;

                if (currentNode.value === j) {
                    const path: IGraphNode[] = [];
                    path.push(currentNode);

                    let parentNode = currentNode.parent;
                    while (parentNode) {
                        path.unshift(parentNode);
                        parentNode = parentNode.parent;
                    }

                    return {
                        success: true,
                        visited: visitedNodes.length,
                        path: path.map((node: IGraphNode): i32 => node.value)
                    };
                }

                if (isNotAlreadyVisited(currentNode.value)) {
                    const neighbors = this.getNeighbors(currentNode.value)
                        .filter(isNotAlreadyVisited)
                        .map((value: i32): IGraphNode => ({
                                value,
                                parent: currentNode,
                                isVisited: false
                            })
                        );

                    neighbors.forEach((neighbor: IGraphNode): number => queue.unshift(neighbor));
                }
                visitedNodes.push(currentNode.value);
            } else {
                break;
            }
        }

        return {
            success: false,
            visited: visitedNodes.length,
            path: null
        };
    }

    protected getNeighbors(i: i32): i32 [] {
        if (this.matrix[i]) {
            // todo
            // return this.matrix[i];
        }

        return [];
    }
}