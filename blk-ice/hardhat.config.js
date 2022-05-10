require("@nomiclabs/hardhat-vyper");

// autogenerated by brownie
// do not modify the existing settings
module.exports = {
    networks: {
        hardhat: {
            hardfork: "london",
            // base fee of 0 allows use of 0 gas price when testing
            initialBaseFeePerGas: 0,
            // brownie expects calls and transactions to throw on revert
            throwOnTransactionFailures: true,
            throwOnCallFailures: true
       },
       vyper: {
        compilers: [{ version: "0.2.1" }, { version: "0.3.0" }],
      },
    }
}