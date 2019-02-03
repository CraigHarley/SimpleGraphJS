import {IGraphMatrix, IGraphNode, ISearchResult} from "./types";

export class Graph {
    protected matrix: IGraphMatrix = {};

    public addEdge(i: string, j: string): void {
        if (!this.matrix[i]) {
            this.matrix[i] = {};
        }
        this.matrix[i][j] = true;

        if (!this.matrix[j]) {
            this.matrix[j] = {};
        }
        this.matrix[j][i] = true;
    }

    public breadthFirstSearch(i: string, j: string): ISearchResult {
        if (i === j || !this.matrix[i] || !this.matrix[j]) {
            return {
                success: false,
                visited: 0
            };
        }

        const queue: IGraphNode[] = [];
        const visitedNodes: string[] = [];

        this.getNeighbors(i)
            .forEach((value) =>
                queue.push({
                    value,
                    parent: null,
                    isVisited: false
                })
            );


        const isNotAlreadyVisited = (value: string) => visitedNodes.indexOf(value) === -1;

        while (true) {
            const currentNode = queue.shift();
            currentNode!.isVisited = true;


            if (currentNode!.value === j) {
                const path: IGraphNode[] = [];
                path.push(currentNode!);

                let parentNode = currentNode!.parent;
                while (parentNode) {
                    path.unshift(parentNode);
                    parentNode = parentNode.parent;
                }

                return {
                    path: path.map((node: IGraphNode) => node.value),
                    success: true,
                    visited: visitedNodes.length
                };
            }

            if (isNotAlreadyVisited(currentNode!.value)) {
                const neighbors = this.getNeighbors(currentNode!.value)
                    .filter(isNotAlreadyVisited);

                queue.unshift(
                    ...neighbors.map((value: string) => ({
                            value,
                            parent: currentNode!,
                            isVisited: false
                        })
                    )
                );
            }
            visitedNodes.push(currentNode!.value);

            if (!currentNode) {
                break;
            }
        }

        return {
            success: false,
            visited: visitedNodes.length
        };
    }

    protected getNeighbors(i: string): string [] {
        if (this.matrix[i]) {
            return Object.keys(this.matrix[i]);
        }

        return [];
    }
}