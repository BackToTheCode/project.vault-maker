const CONNECT = 'CONNECT';
const DISCONNECT = 'DISCONNECT';

const SELECT_TOKEN = 'SELECT_TOKEN';
const TOKENS = 'TOKENS';

const STEP = 'STEP';
const LOCK_COLLATERAL = 'LOCK_COLLATERAL';
const DRAW_DAI = 'DRAW_DAI';

const SET_MAKER = 'SET_MAKER';
const SET_WEB3 = 'SET_WEB3';
const SET_CDP = 'SET_CDP';

export const types = {
  connection: { CONNECT, DISCONNECT },
  services: { SET_MAKER, SET_WEB3, SET_CDP },
  tokens: { SELECT_TOKEN, TOKENS },
  vault: { STEP, LOCK_COLLATERAL, DRAW_DAI }
};
