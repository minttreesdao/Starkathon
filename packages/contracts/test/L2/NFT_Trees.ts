import { starknet } from "hardhat";

async function NFT_Trees() { 
  const counterFactory = await starknet.getContractFactory(
    "NFT_Trees"
  );
  const rps = await counterFactory.deploy();
  console.log(rps)
}

NFT_Trees();