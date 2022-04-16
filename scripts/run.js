const main = async () => {
    const allAccs = await hre.ethers.getSigners(); // type array
    const owner = allAccs[0].address; // owners address :P
    const waveContractFactory = await hre.ethers.getContractFactory("waveportal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
  
    console.log("Contract deployed to:", waveContract.address);
    console.log("\n");
    // console.log("Contract deployed by:", owner.address);
  
    let waveCount;
    // let availableAcc = [];

    // for (let i = 0; i < allAccs.length; i++) {
    //     availableAcc.push(allAccs[i].address);
    // }
    
    for (let i = 0; i < allAccs.length; i++) {
        let letswave = await waveContract.connect(allAccs[i]).wave();
        await letswave.wait();
    }
    waveCount = await waveContract.getTotalWaves();
    console.log("\n")
    console.log("Yaayiii We have total of %d friends :D", allAccs.length);
    
};
  
const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();