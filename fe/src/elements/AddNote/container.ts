import { connect } from 'react-redux';
import IState from 'src/state';
import AddNote from '.';
import { init, onChange, onClick } from './reducer';

const mapStateToProps = (state: IState) => state.textInputState || init;

const mapDispatchToProps = (dispatch: Function) => ({
    onChange: (data: string) => dispatch(onChange(data)),
    onClick: (data: string) => dispatch(onClick(data)),
});

const AddNoteContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddNote);

export default AddNoteContainer;
