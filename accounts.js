import Accounts from 'web3-eth-accounts';

const accounts = new Accounts();

const { address, privateKey } = accounts.create();

web3.eth.accounts.wallet.create(5, accounts);