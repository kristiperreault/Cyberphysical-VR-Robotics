var Web3 = require('web3');
const format = require('ethjs-format');

web3 = new Web3(new Web3.providers.HttpProvider(''));
var addr = "";
var toAddress = "";
const amount = "0.001";
const amountToSend = web3.utils.toWei(amount, "ether"); //convert to wei value
var gasLimit = 3000000;
var nonce = web3.eth.getTransactionCount(addr);

const params = format.formatInputs('eth_sendTransaction', [{
    "from": addr,
    "nonce": web3.utils.toHex(nonce),
    "gasPrice": web3.utils.toWei('0.000000123', "ether"),
    "gas": web3.utils.toWei('0.0000123', "ether"),
    "to": toAddress,
    "value": amountToSend,
    "data": "" //change this
}])

ethereum.sendAsync({
    method: 'eth_sendTransaction',
    params: params,
    from: addr,
}, function(err, result){
    console.log('result:', result)
})
return (dispatch) => { }

/* var rawTransaction = {
  "from": addr,
  "nonce": web3.toHex(nonce),
  "gasPrice": web3.toHex(gasPrice * 1e9),
  "gasLimit": web3.toHex(gasLimit),
  "to": toAddress,
  "value": amountToSend,
  "chainId": 1 //change this
};

    var privKey = new Buffer(privateKey, 'hex');
    var tx = new Tx(rawTransaction);

    tx.sign(privKey);
    var serializedTx = tx.serialize();

    web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
      if (!err)
          {
            console.log('Txn Sent and hash is '+hash);
          }
      else
          {
            console.error(err);
          }
    }); */