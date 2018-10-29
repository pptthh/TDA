import * as React from 'react';

export interface IButton {
    name: string;
    label: string;
    title?: string;
    onClick: React.MouseEventHandler<HTMLSpanElement>;
}

const Button = ({name, label, onClick, title = ''}: IButton) =>
    <button
        name={name}
        title={title}
        onClick={onClick}
        >{label}</button>;

export default Button;
