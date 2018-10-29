import * as React from 'react';
import { NOOP } from '../../util/util';

export interface ILabel {
    elementClass?: string;
    tooltip?: string;
    children: string;
    onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

// fixme: check props for valid text!!
const Label = ({onClick = NOOP, tooltip = '', children, elementClass = ''}: ILabel): JSX.Element => {
    // fixme: this is for old SASS compatibility >> refactor it later to use local resources!
    return  <span className={elementClass} title={tooltip} onClick={onClick}>{children}</span>;
};

export default Label;
