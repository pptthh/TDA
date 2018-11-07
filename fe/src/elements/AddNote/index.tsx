import * as React from 'react';
import { LOG } from 'src/utils';
import Button from '../../component/Button';
import TextInput from '../../component/TextInput';

const AddNote = () =>
<div className='AddNote'>
    <TextInput
        placeholder='Add Note Here'
        onChange={({target: {value}}) => LOG('Add Note Changed:', value)}
        />
    <Button
        label='Add Note'
        onClick={() => LOG('Add Note Clicked')}
        />
</div>;

export default AddNote;
