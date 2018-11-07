import { connect } from 'react-redux';
import IState from 'src/state';
import AddNote from '.';
import { onChange, onClick } from './reducer';

const mapStateToProps = (state: IState) => state.textInputState;

const mapDispatchToProps = (dispatch: Function) => ({
    onChange: (data: string) => dispatch(onChange(data)),
    onClick: (data: string) => dispatch(onClick(data)),
});

const AddNoteContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddNote);

export default AddNoteContainer;
