export interface IGraphNode {
    value: i32;
    isVisited: boolean;
    // parent: IGraphNode | null;
}

// todo just returning a boolean for now as this isn't working properly
// export interface ISearchResult {
//     success: boolean;
//     visited: i32;
//     path: Array<i32>;
// }
