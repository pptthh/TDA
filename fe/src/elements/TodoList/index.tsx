import * as React from 'react';
import List from '../../component/List';
import { IListItem } from '../../component/List/listItem';
import ITodoListState from './state';

interface ITodoList extends ITodoListState {
    done: () => void;
    // edit: () => void;
}

const TodoList = ({list}: ITodoList) =>
<List list={list.map(
    (value: string, index: number): IListItem => ({
        text: value,
        time: index,
    }),
    )}
/>;

export default TodoList;
