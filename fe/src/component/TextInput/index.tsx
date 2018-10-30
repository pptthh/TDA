import * as React from 'react';

export interface ITextInput {
    name?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// const TextInput = ({name, value, onChange}: ITextInput): JSX.Element =>
const TextInput = (props: ITextInput): JSX.Element =>
<input type='text' className='TextInput' {...props}/>;

export default TextInput;
