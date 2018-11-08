import { connect } from 'react-redux';
import TestCounter from '.';
import IState from '../../state';
import action from './action';

const mapStateToProps = (state: IState) => state.counterState;

const mapDispatchToProps = (dispatch: Function) => ({
    decrement: () => dispatch(action.decrement()),
    increment: () => dispatch(action.increment()),
});

const TestCounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TestCounter);

export default TestCounterContainer;
