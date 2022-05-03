const main = async () => {

    const waveContractFactory = await hre.ethers.getContractFactory("waveportal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
  
    console.log("Contract deployed to:", waveContract.address);
    console.log("\n");
    // console.log("Contract deployed by:", owner.address);
  
    let waveCount;
    // waveCount = await waveContract.getTotalWaves();
    // console.log("\n")
    // console.log("Total Wave Count: ", waveCount.toNumber());
    
    let waveTxn = await waveContract.wave("First message!!");
    await waveTxn.wait(); // wait for the transaction to be mined
    const [_, randomPerson] = await hre.ethers.getSigners();
    waveTxn = await waveContract.connect(randomPerson).wave("Second message");
    await waveTxn.wait();
    
    waveCount = await waveContract.getTotalWaves();
    console.log("%d waves", waveCount);
    let allWaves = await waveContract.getAllWaves();
    console.log("all waves: ", allWaves);
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