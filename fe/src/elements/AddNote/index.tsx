import * as React from 'react';
import Button from '../../component/Button';
import TextInput from '../../component/TextInput';
import IAddNoteState from './state';

interface IAddNote extends IAddNoteState {
    onClick: (data: string) => void;
    onChange: (data: string) => void;
}

const AddNote = ({
    onClick,
    onChange,
    text,
}: IAddNote) =>
<div className='AddNote'>
    <TextInput
        placeholder='Add Note Here'
        onChange={({target: {value}}) => onChange(value)}
        value={text}
        />
    <Button
        label='Add Note'
        onClick={() => onClick(text)}
        />
</div>;

export default AddNote;
