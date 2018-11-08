import IAddNoteState from '../elements/AddNote/state';
import ICounterState from '../elements/TestCounter/state';

interface IState {
    addNoteState: IAddNoteState;
    counterState: ICounterState;
}

export default IState;
