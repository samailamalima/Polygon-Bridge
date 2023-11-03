const { ethers } = require("hardhat");

async function main() {
  const signers = await ethers.getSigners();
  const signer = signers[0]; // Use the first signer by default

  // Get ERC721 contract instance on Polygon Mumbai
  const MaliNFT = await ethers.getContractFactory("MALINFT");
  const malinft = await MALINFT.attach("0xfD973848FFFD188838340e8fdd0f830e32d47D4C");

  // Address to check balance for
  const addressToCheck = "0x4D05f6803aa852Ef8531f9566f903C6ff9B5A718";

  // Test balanceOf on Polygon Mumbai
  const balance = await malinft.balanceOf(addressToCheck);
  console.log("\nBalance of", addressToCheck, "on Polygon Mumbai:", balance.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
