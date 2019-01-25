//require('dotenv').config();
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "iron debris caught stone chalk lyrics cheap approve uniform bonus vivid nothing"; // 12 word mnemonic
//var provider = new HDWalletProvider(mnemonic, "http://localhost:8545");





module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/38128af236c34efaaa791e51cc4958ba")
      },
      network_id: 4,
      gas:  4700000
    },
    solc: {
      optimizer: true,
      run:  200
    }
  }
};
