import { connect } from 'react-redux';
import AddNote from '.';
import IState from '../../state';
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
