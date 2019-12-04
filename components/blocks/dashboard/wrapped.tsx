import connect from '../../../store/connect';
import { Dashboard } from '../dashboard';

function mapStateToProps(state: any) {
  return {
    cdp: state.services.cdp,
  };
}

// function mapDispatchToProps(dispatch: any) {
//   return {
//     dispatchConnect: (payload: any) => 
//       dispatch({ type: 'CONNECT', payload }),
//     dispatchDisconnect: (payload: any) =>
//       dispatch({ type: 'DISCONNECT', payload }),
//     dispatchSelectToken: (payload: any) => 
//       dispatch({ type: 'SELECT_TOKEN', payload }),
//     dispatchSetCdp: (payload: any) => 
//       dispatch({ type: 'SET_CDP', payload }),
//     dispatchSetMaker: (payload: any) =>
//       dispatch({ type: 'SET_MAKER', payload }),
//     dispatchSetWeb3: (payload: any) => 
//       dispatch({ type: 'SET_WEB3', payload }),
//     dispatchTokens: (payload: any) => 
//       dispatch({ type: 'TOKENS', payload })
//   };
// }

const Wrapped = connect(mapStateToProps, null)(Dashboard);

Dashboard.Wrapped = Wrapped;

export { Dashboard };
