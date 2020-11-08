class Account {
  constructor(name) {
    this.name = name;
    this.creditAmount = 0;
  }

  credit(amount) {
    this.creditAmount = amount;
  }

  describe() {
    return `owner: ${this.name}, balance: ${this.creditAmount}`;
  }
}

module.exports = Account;
