const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const NAME = "QuentinERC20";
const SYMBOL = "Q20";
const DECIMALS = 0;
const ONE_GWEI = 1_000_000_000n;

module.exports = buildModule("QuentinERC20Module", (m) => {
  const name = m.getParameter("name", NAME);
  const symbol = m.getParameter("symbol", SYMBOL);
  const decimals = m.getParameter("decimals", DECIMALS);
  const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

  const quentinERC20 = m.contract("QuentinERC20", [name, symbol, decimals], {
    value: lockedAmount,
  });

  return { quentinERC20 };
});
