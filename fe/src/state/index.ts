import IAddNoteState from '../elements/AddNote/state';
import ICounterState from '../elements/TestCounter/state';

interface IState {
    counterState: ICounterState;
    textInputState: IAddNoteState;
}

export default IState;
