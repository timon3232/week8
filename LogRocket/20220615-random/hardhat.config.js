require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",

  networks: {
    "goerli": {
       url: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
       accounts: ["0xd8a3aba6ac3929f2a3d671b4e5aed007a7e96a979742f6b239e6ac6e47eb9b56"]
    }
  }

};
