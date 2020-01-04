import connect from '../../../../../store/connect';
import { State } from '../../../../../store/store';
import { Lock } from '../lock';


function mapStateToProps(state: State) {
  const { selectedToken } = state.tokens;
  const { lockAmount } = state.wizard;

  return {
    lockAmount,
    selectedToken
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    dispatchLockCollateral: (payload: any) => dispatch({ type: 'LOCK_COLLATERAL', payload }),
    dispatchStep: (payload: any) => dispatch({ type: 'STEP', payload }),
  };
}

const WrappedLock = connect(mapStateToProps, mapDispatchToProps)(Lock);

export { WrappedLock };
