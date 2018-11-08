import { connect } from 'react-redux';
import AddNote from '.';
import IState from '../../state';
import Action from './action';

const mapStateToProps = (state: IState) => state.addNoteState;

const mapDispatchToProps = (dispatch: Function) => ({
    onChange: (data: React.ChangeEvent<HTMLInputElement>) => dispatch(Action.onChange(data)),
    onClick: () => dispatch(Action.onClick()),
});

const AddNoteContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddNote);

export default AddNoteContainer;
