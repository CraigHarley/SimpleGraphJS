import "allocator/tlsf";
import {IGraphNode} from "./types";

export class Graph {
    protected matrix: Array<Array<boolean>> = [];
    protected highestVertex: i32 = 0;

    public addEdge(i: i32, j: i32): void {
        if (this.highestVertex < i) {
            this.highestVertex = i;
        }
        if (this.highestVertex < j) {
            this.highestVertex = j;
        }

        if (!this.matrix[i]) {
            this.matrix[i] = [];
        }
        this.matrix[i][j] = true;

        if (!this.matrix[j]) {
            this.matrix[j] = [];
        }
        this.matrix[j][i] = true;
    }

    public breadthFirstSearch(i: i32, j: i32): boolean {
        if (i === j || !this.matrix[i] || !this.matrix[j]) {
            // return {
            //     success: i === j,
            //     visited: 0,
            //     path: []
            // };

            return false;
        }

        const queue: Array<IGraphNode> = [];
        const visitedNodes: Array<i32> = [];

        this.getNeighbors(i)
            .forEach((value: i32, index: i32, array: Array<i32>): void => {
                    queue.push({
                        value,
                        // parent: null,
                        isVisited: false
                    });
                }
            );


        const isNotAlreadyVisited = (value: i32): boolean => visitedNodes.indexOf(value) === -1;

        while (true) {
            const currentNode: IGraphNode = queue.shift();
            if (currentNode) {
                currentNode.isVisited = true;

                if (currentNode.value === j) {
                    // const path: IGraphNode[] = [];
                    // path.push(currentNode);

                    // let parentNode = currentNode.parent;
                    // while (parentNode) {
                    //     path.unshift(parentNode);
                    //     parentNode = parentNode.parent;
                    // }

                    // return {
                    //     success: true,
                    //     visited: visitedNodes.length,
                    //     path: path.map((node: IGraphNode): i32 => node.value)
                    // };
                    return true;
                }

                if (isNotAlreadyVisited(currentNode.value)) {
                    const neighbors = this.getNeighbors(currentNode.value)
                        .filter(isNotAlreadyVisited)
                        .map((value: i32): IGraphNode => ({
                                value,
                                // parent: currentNode,
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

        // return {
        //     success: false,
        //     visited: visitedNodes.length,
        //     path: []
        // };
        return false;
    }

    protected getNeighbors(i: i32): i32 [] {
        if (this.matrix[i]) {
            const output: Array<i32> = [];

            // todo this will be horrible for performance...
            for (let j: i32 = 0; i < this.highestVertex; j++) {
                if (this.matrix[i][j]) {
                    output.push(j);
                }
            }
            return output;
        }

        return [];
    }
}