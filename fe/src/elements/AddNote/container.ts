import { connect } from 'react-redux';
import AddNote from '.';
import IState from '../../state';
import Action from './action';

const mapStateToProps = (state: IState) => state.addNoteState;

const mapDispatchToProps = (dispatch: Function) => ({
    addNewNote: () => dispatch(Action.addNewNote()),
    textChanged: (data: React.ChangeEvent<HTMLInputElement>) => dispatch(Action.textChanged(data)),
});

const AddNoteContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddNote);

export default AddNoteContainer;
