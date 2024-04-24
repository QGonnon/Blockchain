const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const CONJOINT1 = "0x76a40a3F729418dbCc8EFAAac969f2ad416880DC";
const CONJOINT2 = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

module.exports = buildModule("MariageModule", (m) => {
  const conjoint1 = m.getParameter("name", CONJOINT1);
  const conjoint2 = m.getParameter("name", CONJOINT2);

  const mariage = m.contract("Mariage", [conjoint1, conjoint2]);

  return { mariage };
});
