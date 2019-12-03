import Maker from '@makerdao/dai';
import McdPlugin, { ETH, BAT, MDAI } from '@makerdao/dai-plugin-mcd';
import dsTokenAbi from './dsToken.abi.json';

let maker = null;
let web3 = null;

const setup = async (network, provider, infuraOptions) => {
  if (maker) return maker;

  let options = {
    plugins: [
      [
        McdPlugin,
        {
          network: network,
          cdpTypes: [
            { currency: ETH, ilk: 'ETH-A' },
            { currency: BAT, ilk: 'BAT-A' }
            // { currency: REP, ilk: 'REP-A' },
          ]
        }
      ]
    ]
  };

  // Provide infura project url when testing
  // if (provider !== 'browser') {
    options = { ...options, ...infuraOptions };
  // }

  maker = await Maker.create(provider, options);

  await maker.authenticate();
  await maker.service('proxy').ensureProxy();

  let proxy = await maker.currentProxy();

  return maker;
};

const getWeb3 = async () => {
  if (web3) {
    return web3;
  }
  web3 = await maker.service('web3')._web3;
  return web3;
};

// const requestTokens = async () => {
//     try {
//          ('trying to call function gulp in faucet')
//         let accounts = await web3.eth.getAccounts()
//         let REP = '0xc7aa227823789e363f29679f23f7e8f6d9904a9b'
//         const faucetABI = FaucetABI;
//         const faucetAddress = '0x94598157fcf0715c3bc9b4a35450cce82ac57b20'
//         const faucetContract = new web3.eth.Contract(faucetABI, faucetAddress);
//         await faucetContract.methods.gulp(REP).send({ from: accounts[0] }, (error, result) => console.log(error))

//     } catch (error) {
//         console.log('Request Tokens error', error)
//     }
// }

const approveProxyInREP = async () => {
  try {
    let accounts = await web3.eth.getAccounts();
    let proxy = await maker.currentProxy();
    let REPAddress = '0xc7aa227823789e363f29679f23f7e8f6d9904a9b';
    const REPAbi = dsTokenAbi;
    const REPContract = new web3.eth.Contract(REPAbi, REPAddress);
    return new Promise(async (resolve, reject) => {
      await REPContract.methods
        .approve(
          proxy,
          'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
        )
        .send({ from: accounts[0] }, (error, result) => {
          if (error) {
            console.log('error in approving REP token', error);
            reject(error);
          }
          console.log('result in approving REP token', result);
          resolve(result);
        });
    });
  } catch (error) {
    console.log(error);
  }
};
const approveProxyInDai = async () => {
  try {
    let accounts = await web3.eth.getAccounts();
    let proxy = await maker.currentProxy();
    let daiAddress = '0x1f9beaf12d8db1e50ea8a5ed53fb970462386aa0';
    const daiAbi = dsTokenAbi;
    const REPContract = new web3.eth.Contract(daiAbi, daiAddress);
    return new Promise(async (resolve, reject) => {
      await REPContract.methods
        .approve(
          proxy,
          'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
        )
        .send({ from: accounts[0] }, (error, result) => {
          if (error) {
            console.log('error in approving DAI token', error);
            reject(error);
          }
          console.log('result in approving DAI token', result);
          resolve(result);
        });
    });
  } catch (error) {
    console.log(error);
  }
};

export { setup, getWeb3, approveProxyInREP, approveProxyInDai, BAT, ETH, MDAI };
