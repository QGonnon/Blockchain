const { expect } = require('chai');

// ethers.js est une librairie qui permet d'interagir avec les contracts

describe("On s'apprete a tester le deploiement du token", function () {
    it("should send the total to the owner", async function () {
        const [owner] = await ethers.getSigners();

        const Quentin = await ethers.deployContract("Quentin")

        const ownerBalance = await Quentin.balanceOf(owner.address);

        expect(await Quentin.totalSupply()).to.equal(ownerBalance);
    })
})