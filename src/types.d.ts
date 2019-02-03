export interface IGraphMatrix {
    [key: string]: {
        [key: string]: boolean
    };
}

export interface IGraphNode {
    value: string;
    isVisited: boolean;
    parent?: IGraphNode;
}

export interface ISearchResult {
    success: boolean,
    visited: number,
    path?: any[]
}
