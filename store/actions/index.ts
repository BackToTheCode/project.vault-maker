const CONNECT = 'CONNECT';
const DISCONNECT = 'DISCONNECT';
const INITIALISE_CONNECT = "INITIALISE_CONNECT";

const SELECT_TOKEN = 'SELECT_TOKEN';
const TOKENS = 'TOKENS';
const INITIALISE_TOKENS = "INITIALISE_TOKENS";

const STEP = 'STEP';
const LOCK_COLLATERAL = 'LOCK_COLLATERAL';
const DRAW_DAI = 'DRAW_DAI';
const INITIALISE_VAULT = "INITIALISE_VAULT";

const SET_MAKER = 'SET_MAKER';
const SET_WEB3 = 'SET_WEB3';
const SET_CDP = 'SET_CDP';
const INITIALISE_SERVICES = "INITIALISE_SERVICES";

const CHANGE_ICON = "CHANGE_ICON";
const TRANSITION_START = "TRANSITION_START";
const TRANSITION_FINISH = "TRANSITION_FINISH";

export const types = {
  connect: { CONNECT, DISCONNECT, INITIALISE_CONNECT },
  routing: { CHANGE_ICON, TRANSITION_START, TRANSITION_FINISH},
  services: { SET_MAKER, SET_WEB3, SET_CDP, INITIALISE_SERVICES },
  tokens: { SELECT_TOKEN, TOKENS, INITIALISE_TOKENS },
  vault: { STEP, LOCK_COLLATERAL, DRAW_DAI, INITIALISE_VAULT }
};
