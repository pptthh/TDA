import IAddNoteState from 'src/elements/AddNote/state';
import ICounterState from 'src/elements/TestCounter/state';

interface IState {
    counterState: ICounterState;
    textInputState: IAddNoteState;
}

export default IState;
