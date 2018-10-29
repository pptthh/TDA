import * as React from 'react';

export interface IListItem {
    text: string;
    time: number;
}
export interface IList {
    list: IListItem[];
}

const List = ({list}: IList): JSX.Element =>
<ul className='list'>
    {list.map((item: IListItem) => <li key={item.time} className='listItem'>{item.text}</li>)}
</ul>;

export default List;
