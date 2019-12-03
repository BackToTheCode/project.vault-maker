import connect from '../../../store/connect';
import { Hero } from '../hero';

function mapStateToProps(state: any) {
  return {
    isConnected: state.connection.isConnected,
    isCreated: state.vault.isCreated
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    dispatchConnect: (payload: any) => dispatch({ type: 'CONNECT', payload }),
    dispatchDisconnect: (payload: any) =>
      dispatch({ type: 'DISCONNECT', payload }),
    dispatchSelectToken: (payload: any) =>
      dispatch({ type: 'SELECT_TOKEN', payload }),
    dispatchTokens: (payload: any) => dispatch({ type: 'TOKENS', payload })
  };
}

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(Hero);

Hero.Wrapped = Wrapped;

export { Hero };
