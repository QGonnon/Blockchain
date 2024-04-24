const { expect } = require('chai');

// ethers.js est une librairie qui permet d'interagir avec les contracts

describe("On s'apprete a tester le deploiement du contrat de mariage", function () {
    it("should marry two people", async function () {
        const Mariage = await ethers.deployContract("Mariage", ["0x76a40a3F729418dbCc8EFAAac969f2ad416880DC", "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"]);

        const conjoint1 = await Mariage.conjoint1();
        const conjoint2 = await Mariage.conjoint2();

        expect(await Mariage.getConjointOf(conjoint1)).to.equal(conjoint2);
    })
})
