import connect from '../../../../../store/connect';
import { Lock } from '../lock';

function mapStateToProps(state: State) {
  const { selectedToken } = state.tokens;

  return {
    selectedToken
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    dispatchLockCollateral: (payload: any) => dispatch({ type: 'SELECT_TOKEN', payload }),
    dispatchStep: (payload: any) => dispatch({ type: 'STEP', payload })
  };
}

const WrappedLock = connect(mapStateToProps, mapDispatchToProps)(Lock);

export { WrappedLock };
