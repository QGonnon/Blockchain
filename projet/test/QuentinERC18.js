const { expect } = require('chai');

// ethers.js est une librairie qui permet d'interagir avec les contracts

describe("On s'apprete a tester le deploiement du token", function () {
    it("should send the total to the owner", async function () {
        const [owner] = await ethers.getSigners();
        const name = "QuentinERC18";
        const symbol = "Q18";
        const decimals = 0;

        const QuentinERC18 = await ethers.deployContract("QuentinERC18", [name, symbol, decimals])

        const ownerBalance = await QuentinERC18.balanceOf(owner.address);

        expect(await QuentinERC18.totalSupply()).to.equal(ownerBalance);
    })
})
