const Web3 = require('web3');

let web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/bd90ad3056aa4ff3888e6f5c8e66dd8a'));

var Transactions = class {

  getTransactionsByAccount(myaccount, startBlockNumber, endBlockNumber) {
    if (endBlockNumber == null) {
      endBlockNumber = web3.eth.blockNumber;
      console.log("Using endBlockNumber: " + endBlockNumber);
    }
    if (startBlockNumber == null) {
      startBlockNumber = endBlockNumber - 10;
      console.log("Using startBlockNumber: " + startBlockNumber);
    }
    console.log("Searching for transactions to/from account \"" + myaccount + "\" within blocks " + startBlockNumber + " and " + endBlockNumber);

    for (var i = startBlockNumber; i <= endBlockNumber; i++) {
      console.log("Searching block " + i);
      web3.eth.getBlock(i, true, (err, block) => {
        if(err) {
          console.log(err);
        }
        if (block != null && block.transactions != null) {
          block.transactions.forEach( (e) => {
            if (myaccount == "*" || myaccount == e.from || myaccount == e.to) {
              console.log("  tx hash          : " + e.hash + "\n"
                + "   nonce           : " + e.nonce + "\n"
                + "   blockHash       : " + e.blockHash + "\n"
                + "   blockNumber     : " + e.blockNumber + "\n"
                + "   transactionIndex: " + e.transactionIndex + "\n"
                + "   from            : " + e.from + "\n"
                + "   to              : " + e.to + "\n"
                + "   value           : " + e.value + "\n"
                + "   time            : " + block.timestamp + " " + new Date(block.timestamp * 1000).toGMTString() + "\n"
                + "   gasPrice        : " + e.gasPrice + "\n"
                + "   gas             : " + e.gas + "\n"
                + "   input           : " + e.input);
            }
          })
        }
      })
    }
  }
}

let transactions = new Transactions();
transactions.getTransactionsByAccount("0xe7BA37f4F5918d6C916A2d39003aa709Ad747D1a")
//module.exports = Transactions;

