# Project Dependencies

## Backend (Smart Contract & Hardhat)
- **[Hardhat](https://hardhat.org/)** – Ethereum development environment
- **@nomicfoundation/hardhat-toolbox** – Essential plugins for testing and deploying smart contracts
- **ethers.js** – Library for interacting with Ethereum
- **chai** – Assertion library for testing
- **mocha** – JavaScript test framework

## Frontend (React & Web3 Integration)
- **React.js** – Frontend framework
- **ethers.js** – Library for connecting the frontend to the blockchain
- **MetaMask** – Browser wallet for interacting with the Ethereum network

## Installation
Ensure you have **Node.js** installed, then run:
```sh
npm install
```

For Hardhat-specific dependencies, run:
```sh
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox chai mocha ethers
```

For the frontend, install React dependencies:
```sh
npx create-react-app client
cd client
npm install ethers

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
