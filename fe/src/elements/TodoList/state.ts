export interface ITodoListData {
    note: string;
    id: number;
}

interface ITodoListState {
    list: ITodoListData[];
}

export default ITodoListState;
