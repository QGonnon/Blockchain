const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const NAME = "QuentinHeritERC20";
const SYMBOL = "QH";
const DECIMALS = 0;
const ONE_GWEI = 1_000_000_000n;

module.exports = buildModule("QuentinHeritERC20Module", (m) => {
  const name = m.getParameter("name", NAME);
  const symbol = m.getParameter("symbol", SYMBOL);
  const decimals = m.getParameter("decimals", DECIMALS);
  const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

  const quentinHeritERC20 = m.contract("QuentinHeritERC20", [name, symbol, decimals]);

  return { quentinHeritERC20 };
});
