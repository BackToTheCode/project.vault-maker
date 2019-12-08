import connect from '../../../store/connect';
import { Header } from '../header';

function mapStateToProps(state: any) {
  const { isConnected, address } = state.connection;
  const { isTransitioning } = state.routing;

  return {
    address,
    isConnected,
    isTransitioning
  };
}


function mapDispatchToProps(dispatch: any) {
  return {
    dispatchTransitionFinish: () =>
        dispatch({ type: 'TRANSITION_FINISH'}),
    dispatchTransitionStart: () =>
      dispatch({ type: 'TRANSITION_START' })
  };
}

const WrappedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export { WrappedHeader };
