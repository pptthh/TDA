import { connect } from 'react-redux';
import AddNote from '.';
import IState from '../../state';
import action from './action';

const mapStateToProps = (state: IState) => state.addNoteState;

const mapDispatchToProps = (dispatch: Function) => ({
    onChange: (data: React.ChangeEvent<HTMLInputElement>) => dispatch(action.onChange(data)),
    onClick: () => dispatch(action.onClick()),
});

const AddNoteContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddNote);

export default AddNoteContainer;
