import connect from '../../../../../store/connect';
import { Swap } from '../swap';

function mapStateToProps(state: any) {
  const { isTransitioning } = state.routing;
  const { selectedToken, tokens } = state.tokens;

  return {
    isTransitioning,
    selectedToken,
    tokens
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    dispatchSelectToken: (payload: any) => dispatch({ type: 'SELECT_TOKEN', payload }),
    dispatchStep: (payload: any) => dispatch({ type: 'STEP', payload })
  };
}

const WrappedSwap = connect(mapStateToProps, mapDispatchToProps)(Swap);

export { WrappedSwap };
