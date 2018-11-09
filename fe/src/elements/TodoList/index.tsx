import * as React from 'react';
import List, { IList } from '../../component/List';

interface ITodoList extends IList {
    done: () => void;
    edit: () => void;
}

const TodoList = ({list}: ITodoList) => <List list={list}/>;

export default TodoList;
