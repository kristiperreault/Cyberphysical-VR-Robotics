require('dotenv').config() // configure your values in a .env file
 
const Web3 = require('web3')
const axios = require('axios')
const EthereumTx = require('ethereumjs-tx').Transaction
const log = require('ololog').configure({ time: true })
const ansi = require('ansicolor').nice
 
const url = `https://mainnet.infura.io/v3/YOUR_ACCOUNT_ID` // Insert your infura ID
const web3 = new Web3(new Web3.providers.HttpProvider(url))
web3.eth.defaultAccount = process.env.WALLET_ADDRESS
const amountToSend = "0.00100000" // Ether amount to transfer

const main = async () => {
 
  let details = {
    "to": process.env.DESTINATION_WALLET_ADDRESS,
    "value": web3.utils.toHex(web3.utils.toWei(amountToSend, 'ether')),
    "gas": 21000,
    "gasPrice": 83 * 1000000000, // converts the gwei price to wei
    "chainId": 1 // mainnet: 1, rinkeby: 4
  }

  var privKey = new Buffer.from(process.env.WALLET_PRIVATE_KEY, 'hex');
  var tx = new EthereumTx(details);

  tx.sign(privKey);
  var serializedTx = tx.serialize();
  const transactionId = web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex') )
 
  log(`Note: please allow for 30 seconds before transaction appears on Etherscan`.magenta)
}
 
main()