const CONNECT = "connect";
const SELECT = 'select';
const SWAP = 'swap';
const LOCK = 'lock';
const DRAW = 'draw';
const CONFIRM = 'confirm';
const OPEN = 'open';
const COMPLETE = 'complete';

const CONNECT_NUM = 1;
const SELECT_NUM = 2;
const SWAP_NUM = 3;
const LOCK_NUM = 4;
const DRAW_NUM = 5;
const CONFIRM_NUM = 6;
const OPEN_NUM = 7;
const COMPLETE_NUM = 8;

const steps = {
  [CONNECT]: CONNECT_NUM,
  [SELECT]: SELECT_NUM,
  [SWAP]: SWAP_NUM,
  [LOCK]: LOCK_NUM,
  [DRAW]: DRAW_NUM,
  [CONFIRM]: COMPLETE_NUM,
  [OPEN]: OPEN_NUM,
  [COMPLETE]: COMPLETE_NUM
};

export {
  CONNECT,
  SELECT,
  SWAP,
  LOCK,
  DRAW,
  CONFIRM,
  OPEN,
  COMPLETE,
  CONNECT_NUM,
  SELECT_NUM,
  SWAP_NUM,
  LOCK_NUM,
  DRAW_NUM,
  CONFIRM_NUM,
  OPEN_NUM
}

export default steps;