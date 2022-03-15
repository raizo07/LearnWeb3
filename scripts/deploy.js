// Import ethers
const { ethers } = require("hardhat");


async function main() {
    // 1. Tell the script to deploy 'NFTee.sol' contract
    const contract = await ethers.getContractFactory("NFTee");

//2.  Deploy Contract
    const deployedcontract = await contract.deploy
//2.1 Wait for the deployment to finish
await deployedContract.deployed();

//3 print the address of the deployed contract
console.log("NFT Contract deployed to: ", deployedContract.address);

}

    main()
        .then(() => process.exit(0))
         .catch((error) => {
            console.error(error);
            process.exit(1);
         });
