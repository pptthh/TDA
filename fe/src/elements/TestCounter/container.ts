import { connect } from 'react-redux';
import IState from 'src/state';
import TestCounter from '.';
import { decrement, increment } from './reducer';

const mapStateToProps = (state: IState) => state.counterState;

const mapDispatchToProps = (dispatch: Function) => ({
    decrement: (data: number) => dispatch(decrement),
    increment: (data: number) => dispatch(increment),
});

const TestCounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TestCounter);

export default TestCounterContainer;
