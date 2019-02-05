import {Graph} from "../Graph";

describe('Graph', () => {
        let graph: Graph;
        beforeAll(() => {
            graph = new Graph();
            graph.addEdge(1, 2);
            graph.addEdge(2, 3);
            graph.addEdge(2, 4);
            graph.addEdge(4, 5);
            graph.addEdge(5, 6);
            graph.addEdge(5, 11);
            graph.addEdge(5, 12);
            graph.addEdge(5, 14);
            graph.addEdge(5, 8);
            graph.addEdge(5, 9);
            graph.addEdge(5, 10);
            graph.addEdge(6, 7);
        });

        it("should find the nodes when they're connected", () => {
            expect(graph.breadthFirstSearch(1, 3)).toEqual({
                path: [2, 3],
                success: true,
                visited: 2
            });

            expect(graph.breadthFirstSearch(1, 5)).toEqual({
                path: [2, 4, 5],
                success: true,
                visited: 4
            });

            expect(graph.breadthFirstSearch(1, 2)).toEqual({
                path: [2],
                success: true,
                visited: 0
            });
        });

        it('should not bother searching if one of the nodes is not in the graph', () => {
            expect(graph.breadthFirstSearch(1, 9999999)).toEqual({
                success: false,
                visited: 0
            });

            expect(graph.breadthFirstSearch(999999, 10)).toEqual({
                success: false,
                visited: 0
            });
        });

        it('should not bother searching if the target and root values are the same', () =>
            expect(graph.breadthFirstSearch(1, 1)).toEqual({
                success: false,
                visited: 0
            }));

        it('should find a deep node using bfs', () => {
            expect(graph.breadthFirstSearch(1, 7)).toEqual({
                path: [
                    2,
                    4,
                    5,
                    6,
                    7
                ],
                success: true,
                visited: 6
            });
        })
    }
);
