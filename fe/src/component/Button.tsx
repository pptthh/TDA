import * as React from 'react';

export interface ButtonProps {
    name: string;
    label: string;
    title?: string;
    onClick: React.MouseEventHandler<HTMLSpanElement>;
}

const Button = ({name, label, onClick, title = ''}: ButtonProps) => 
    <button
        name={name}
        title={title}
        onClick={onClick}
        >{label}</button>;

export default Button;
