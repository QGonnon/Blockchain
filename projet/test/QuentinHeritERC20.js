const { expect } = require('chai');

// ethers.js est une librairie qui permet d'interagir avec les contracts

describe("On s'apprete a tester le deploiement du token QuentinHeritERC20", function () {
    it("should send the total to the owner", async function () {
        const [owner] = await ethers.getSigners();
        const name = "QuentinHeritERC20";
        const symbol = "QH";
        const decimals = 0;

        const QuentinHeritERC20 = await ethers.deployContract("QuentinHeritERC20", [name, symbol, decimals])
        await QuentinHeritERC20.mint(owner.address, 1000000);


        const ownerBalance = await QuentinHeritERC20.balanceOf(owner.address);

        expect(await QuentinHeritERC20.totalSupply()).to.equal(ownerBalance);
    })
})
