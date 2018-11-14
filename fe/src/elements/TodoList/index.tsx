import * as React from 'react';
import Button from '../../component/Button';
import Label from '../../component/Label';
import List from '../../component/List';
import { IListItem } from '../../component/List/listItem';
import ITodoListState, { ITodoListData } from './state';

interface ITodoList extends ITodoListState {
    done: (id: number) => void;
    edit: (id: number) => void;
}

const strToJSX = (
    {note, id}: ITodoListData,
    index: number,
    {done, edit}: ITodoList,
) => <>
    <Button label='X' onClick={() => done(id)}/>
    <Button label='E' onClick={() => edit(id)}/>
    <Label tooltip={index.toString()}>{note}</Label>
</>;

const map = (props: ITodoList) =>
    props.list.map(
        (note: ITodoListData, index: number): IListItem => ({
            text: strToJSX(note, index, props),
            time: index,
        }),
    );
const TodoList = (props: ITodoList) => <List list={ map(props)}/>;

export default TodoList;
