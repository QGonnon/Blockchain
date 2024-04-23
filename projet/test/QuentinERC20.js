const { expect } = require('chai');

// ethers.js est une librairie qui permet d'interagir avec les contracts

describe("On s'apprete a tester le deploiement du token", function () {
    it("should send the total to the owner", async function () {
        const [owner] = await ethers.getSigners();
        const name = "QuentinERC20";
        const symbol = "Q20";
        const decimals = 0;

        const QuentinERC20 = await ethers.deployContract("QuentinERC20", [name, symbol, decimals])

        const ownerBalance = await QuentinERC20.balanceOf(owner.address);

        expect(await QuentinERC20.totalSupply()).to.equal(ownerBalance);
    })
})
