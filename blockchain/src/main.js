const { Blockchain, Transaction } = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
  "f952ddf94d1e91e3b3c39951de188affde19296937987f3200226eba38bc073c"
);
const myWalletAddress = myKey.getPublic("hex");

let recycleCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "public key goes here", 10);
tx1.signTransaction(myKey);
recycleCoin.addTransaction(tx1);

recycleCoin.minePendingTransactions(myWalletAddress);

recycleCoin.chain[1].transactions[0].amount = 1;

const toplamCoin = recycleCoin.getBalanceOfAddress(myWalletAddress);
module.exports = toplamCoin;
