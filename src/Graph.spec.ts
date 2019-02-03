import {Graph} from "./Graph";

describe('Graph', () => {
        let graph;
        beforeAll(() => {
            graph = new Graph();

            // 1: [2]
            // 2: [1, 3, 4]
            // 3: [2]
            // 4: [2, 5]
            graph.addEdge('1', '2');
            graph.addEdge('2', '3');
            graph.addEdge('2', '4');
            graph.addEdge('4', '5');
        });

        it("should find the nodes when they're connected", () => {
            expect(graph.breadthFirstSearch('1', '3')).toEqual({
                path: ["2", "3"],
                success: true,
                visited: 2
            });

            expect(graph.breadthFirstSearch('1', '5')).toEqual({
                path: ['2', '4', '5'],
                success: true,
                visited: 4
            });

        });

        it('should not bother searching if one of the nodes is not in the graph', () => {
            expect(graph.breadthFirstSearch('1', 'does not exist')).toEqual({
                success: false,
                visited: 0
            });

            expect(graph.breadthFirstSearch('1', '10')).toEqual({
                success: false,
                visited: 0
            });
        });

        it('should not bother searching if the target and root values are the same', () =>
            expect(graph.breadthFirstSearch('1', '1')).toEqual({
                success: false,
                visited: 0
            }))
    }
);
