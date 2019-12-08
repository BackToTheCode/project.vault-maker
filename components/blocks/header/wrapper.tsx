import connect from '../../../store/connect';
import { Header } from '../header';

function mapStateToProps(state: any) {
  const { isConnected, address } = state.connection;

  return {
    address,
    isConnected
  };
}

const WrappedHeader = connect(mapStateToProps, null)(Header);

export { WrappedHeader };
