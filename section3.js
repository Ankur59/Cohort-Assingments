class BankAccount {
    constructor(accountHolder, balance) {
        this.owner = accountHolder
        this.balance = balance
    }

    deposit(amount) {
        console.log("Attempting to update balance")
        this.balance = this.balance + amount
        console.log("Balance:", this.balance)
    }
}

const account1 = new BankAccount("Ankur", 10000)
const account2 = new BankAccount("Raman", 20000)

account1.deposit(100)
console.log("1", account1.balance)
console.log("2", account2.balance)

// Ramans accout was not affected because we used the new to create instance of class and new gives us empty {} each time so the values are separated in different blocks 