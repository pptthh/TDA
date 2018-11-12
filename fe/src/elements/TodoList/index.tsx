import * as React from 'react';
import Label from '../../component/Label';
import List from '../../component/List';
import { IListItem } from '../../component/List/listItem';
import ITodoListState from './state';

interface ITodoList extends ITodoListState {
    done: () => void;
}

const strToJSX = (
    s: string,
    onClick: Function,
) =>
    <Label onClick={() => onClick(s)}>{s}</Label>;

const TodoList = ({list, done}: ITodoList) =>
<List list={
    list.map(
        (value: string, index: number): IListItem => ({
            text: strToJSX(value, done),
            time: index,
        }),
    )
}/>;

export default TodoList;
