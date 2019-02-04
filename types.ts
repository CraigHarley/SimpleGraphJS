export interface IGraphNode {
    value: i32;
    isVisited: boolean;
    parent: IGraphNode | null;
}

export interface ISearchResult {
    success: boolean;
    visited: i32;
    path: i32[] | null;
}
