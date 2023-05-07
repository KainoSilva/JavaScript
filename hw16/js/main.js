class Human {
  constructor(name = 'John', age = 16) {
    this.name = name;
    this.age = age;
  }

  getInfoPerson() {
    return `Name: ${this.name}. Age: ${this.age}`
  }
}

class Car extends Human {
  constructor(name, age, made = 'BMW', model = 'X5', year = 2011, numSign = 'JZX75') {
    super(name, age);
    this.made = made;
    this.model = model;
    this.year = year;
    this.numSign = numSign;
  }

  getOwner() {
    if(this.age >= 18) {
      return `
      Owner: ${this.name}, ${this.age} years old <br>
      Car: ${this.made} <br>
      Model:${this.model} <br>
      Year: ${this.year} <br>
      Sign number: ${this.numSign}. <br><br>`
    }
    else {
      return `${this.name}, you are to young to have a car. <br><br>`
    }
  }
}

let owner = new Car();
let owner1 = new Car('Jack', 18,'Nissan', 'GT-R 34', 2001, 'GT-R 34');
let owner2 = new Car('Silva', 22, 'Toyota', 'AE86', 1984, 'SILVA');

document.write(owner.getOwner())
document.write(owner1.getOwner())
document.write(owner2.getOwner())

console.log(owner.getOwner())
console.log(owner1.getOwner())
console.log(owner2.getOwner())