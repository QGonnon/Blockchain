const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const NAME = "QuentinERC18";
const SYMBOL = "Q18";
const DECIMALS = 0;

module.exports = buildModule("QuentinERC18Module", (m) => {
  const name = m.getParameter("name", NAME);
  const symbol = m.getParameter("symbol", SYMBOL);
  const decimals = m.getParameter("decimals", DECIMALS);

  const quentinERC18 = m.contract("QuentinERC18", [name, symbol, decimals]);

  return { quentinERC18 };
});
