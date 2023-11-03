// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fs = require("fs");

async function main() {
  // Get the contract factory
  const MALINFT = await hre.ethers.getContractFactory("MaliNFT");

  // Deploy the contract
  const malinft = await MALINFT.deploy();

  // Wait for the contract to be deployed
  await malinft.deployed();

  // Log the contract address
  console.log("MALINFT contract deployed to:", malinft.address);

}

// Execute the deployment function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
