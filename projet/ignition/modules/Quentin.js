const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("QuentinModule", (m) => {
  const quentin = m.contract("Quentin");

  return { quentin };
});
