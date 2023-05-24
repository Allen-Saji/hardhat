require("@nomicfoundation/hardhat-toolbox");

const fs = require("fs");
const SEPOLIA_PRIVATE_KEY = fs.readFileSync(".sepolia").toString().trim();
let infuraProjectID = fs.readFileSync(".infura").toString().trim();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/` + infuraProjectID,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: fs.readFileSync(".etherscan").toString().trim(),
  },
};
