import * as React from 'react';
import Button from '../../component/Button';
import Label from '../../component/Label';
import List from '../../component/List';
import { IListItem } from '../../component/List/listItem';
import ITodoListState from './state';

interface ITodoList extends ITodoListState {
    done: () => void;
}

interface IMap<T> {
    list: T[];
    done: Function;
}

const strToJSX = (
    s: string,
    done: Function,
) => <>
    <Button label='X' onClick={() => done(s)}/>
    <Label>{s}</Label>
</>;

const map =
({list, done}: IMap<string>) =>
list.map(
    (value: string, index: number): IListItem => ({
        text: strToJSX(value, done),
        time: index,
    }),
);
const TodoList = (props: ITodoList) => <List list={ map(props)}/>;

export default TodoList;
