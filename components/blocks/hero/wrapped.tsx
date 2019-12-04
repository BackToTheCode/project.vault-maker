import connect from '../../../store/connect';
import { Hero } from '../hero';

function mapStateToProps(state: any) {
  console.log('state-original', state);
  return {
    appState: state,
    cdp: state.services.cdp,
    drawAmount: state.vault.drawAmount,
    isConnected: state.connection.isConnected,
    lockAmount: state.vault.lockAmount,
    maker: state.services.maker,
    selectedToken: state.tokens.selectedToken,
    web3: state.services.web3,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    dispatchConnect: (payload: any) => 
      dispatch({ type: 'CONNECT', payload }),
    dispatchDisconnect: (payload: any) =>
      dispatch({ type: 'DISCONNECT', payload }),
    dispatchSelectToken: (payload: any) => 
      dispatch({ type: 'SELECT_TOKEN', payload }),
    dispatchSetCdp: (payload: any) => 
      dispatch({ type: 'SET_CDP', payload }),
    dispatchSetMaker: (payload: any) =>
      dispatch({ type: 'SET_MAKER', payload }),
    dispatchSetWeb3: (payload: any) => 
      dispatch({ type: 'SET_WEB3', payload }),
    dispatchTokens: (payload: any) => 
      dispatch({ type: 'TOKENS', payload })
  };
}

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(Hero);

Hero.Wrapped = Wrapped;

export { Hero };
