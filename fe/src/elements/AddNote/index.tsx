import * as React from 'react';
import Button from '../../component/Button';
import TextInput from '../../component/TextInput';
import IAddNoteState from './state';

interface IAddNote extends IAddNoteState {
    onClick: () => void;
    onChange: (data: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddNote = ({
    onClick,
    onChange,
    text,
}: IAddNote) =>
<div className='AddNote'>
    <TextInput
        placeholder='Add Note Here'
        onChange={ onChange }
        value={text}
        />
    <Button
        label='Add Note'
        onClick={ onClick }
        />
</div>;

export default AddNote;
