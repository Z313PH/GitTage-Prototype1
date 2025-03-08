/*const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("FundManager Contract", function () {
  let FundManager;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    FundManager = await ethers.getContractFactory("FundManager");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    fundManager = await FundManager.deploy();
    await fundManager.deployed();
  });

  describe("Deposits", function () {
    it("Should accept deposits and update balances", async function () {
      await fundManager.connect(addr1).deposit({ value: ethers.utils.parseEther("1.0") });
      const balance = await fundManager.getBalance();
      expect(balance).to.equal(ethers.utils.parseEther("1.0"));
    });
  });

  describe("Withdrawals", function () {
    it("Should allow withdrawals and update balances", async function () {
      await fundManager.connect(addr1).deposit({ value: ethers.utils.parseEther("2.0") });
      await fundManager.connect(addr1).withdraw(ethers.utils.parseEther("1.0"));
      const balance = await fundManager.connect(addr1).getBalance();
      expect(balance).to.equal(ethers.utils.parseEther("1.0"));
    });

    it("Should fail if withdrawal amount exceeds balance", async function () {
      await fundManager.connect(addr1).deposit({ value: ethers.utils.parseEther("1.0") });
      await expect(
        fundManager.connect(addr1).withdraw(ethers.utils.parseEther("2.0"))
      ).to.be.revertedWith("Insufficient balance");
    });
  });

  describe("Balance Tracking", function () {
    it("Should return the correct balance for each user", async function () {
      await fundManager.connect(addr1).deposit({ value: ethers.utils.parseEther("1.0") });
      await fundManager.connect(addr2).deposit({ value: ethers.utils.parseEther("2.0") });

      const balance1 = await fundManager.connect(addr1).getBalance();
      const balance2 = await fundManager.connect(addr2).getBalance();

      expect(balance1).to.equal(ethers.utils.parseEther("1.0"));
      expect(balance2).to.equal(ethers.utils.parseEther("2.0"));
    });
  });
}); */