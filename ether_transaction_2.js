const Web3 = require("web3");
const ethEnabled = () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
    request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: 'your-wallet-address-from',
            to: 'your-wallet-address-to',
            value: web3.utils.toWei('0.0001', "ether"),
            gasPrice: web3.utils.toWei('0.000000123', "ether"),
            gas: web3.utils.toWei('0.0000123', "ether"),
          },
        ],
      })
      .then((txHash) => console.log(txHash))
      .catch((error) => console.error);
    return true;
  }
  return false;
}