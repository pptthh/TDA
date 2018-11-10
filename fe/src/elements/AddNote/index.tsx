import * as React from 'react';
import Button from '../../component/Button';
import TextInput from '../../component/TextInput';
import IAddNoteState from './state';

interface IAddNote extends IAddNoteState {
    addNewNote: () => void;
    textChanged: (data: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddNote = ({
    addNewNote,
    textChanged,
    text,
}: IAddNote) =>
<div className='AddNote'>
    <TextInput
        placeholder='Add Note Here'
        onChange={ textChanged }
        value={ text }
        />
    <Button
        label='Add Note'
        disabled={ text.length === 0 }
        onClick={ addNewNote }
        />
</div>;

export default AddNote;
