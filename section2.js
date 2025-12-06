class employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    details() {
        console.log("Name", this.name, "Price:", this.salary)
    }
}

const employee1 = new employee("anil", 69000)

const employee2 = new employee("sumit", 6000)

const employee3 = new employee("raman", 60000)

employee1.details()
employee2.details()
employee3.details()

// Reason why class is better
// We can do this things with normal constructor function as well and create prototype details but they thing will not be encapsulated like this it will scattered and hard to debug in large code base 