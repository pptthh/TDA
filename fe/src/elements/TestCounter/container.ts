import { connect } from 'react-redux';
import IState from 'src/state';
import TestCounter from '.';
import { decrement, increment } from './reducer';

const mapStateToProps = (state: IState) => state.counterState;

const mapDispatchToProps = (dispatch: Function) => ({
    decrement: (data: number) => dispatch(decrement(data)),
    increment: (data: number) => dispatch(increment(data)),
});

const TestCounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TestCounter);

export default TestCounterContainer;
