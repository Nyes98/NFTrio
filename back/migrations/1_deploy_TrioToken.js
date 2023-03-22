const TrioToken = artifacts.require("TrioToken");
// const Swap = artifacts.require("Swap");

module.exports = async function (deployer) {
  // try {
  await deployer.deploy(TrioToken, "TrioToken", "TRIO", 1000);
  // const token = await TrioToken.deployed();
  // console.log(token.address); // TrioToken CA

  // await deployer.deploy(Swap, token.address);
  // const ethSwap = await Swap.deployed();
  // } catch (error) {
  // console.log(error);
  // }
};
