// This script batch mints MaliNFT ERC721A tokens.

// Import required libraries
const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  // Get private key from env
  const privateKey = process.env.PRIVATE_KEY;

  // The URL of the network provider
  const networkAddress = "https://eth-sepolia.g.alchemy.com/v2/adWMnDUcqmiSGSOzzSmo1fCkonljKqHr";

  // Create a provider using the URL
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  // Create a signer from the private key and provider
  const signer = new ethers.Wallet(privateKey, provider);

  // Title address of the deployed contract
  const contractAddress = "0xfD973848FFFD188838340e8fdd0f830e32d47D4C";

  // Get the contract factory and attach it to the signer
  const MaliNFT = await ethers.getContractFactory("MaliNFT", signer);
  const contract = await MaliNFT.attach(contractAddress);

  // Call the mint function on the contract to mint 5 tokens
  await contract.mint(5);

  // Log a message to the console to indicate that the tokens have been minted
  console.log("Minted 5 tokens");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
