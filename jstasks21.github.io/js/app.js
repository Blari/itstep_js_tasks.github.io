function Person(
  name = "name",
  surname = "surname",
  age = "18",
  phone = 0,
  address = "none"
) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.phone = phone;
  this.address = address;

  this.fullInfo = () => {
    return `Name: ${this.firstName} \nLast Name: ${this.lastName} \nAge: ${this.age} \nPhone: ${this.phone} \nAddress: ${this.address}`;
  };

  this.getAddress = () => {
    return `Adddress: ${this.address}`;
  };

  this.clearAll = () => {
    for (let value in this) delete this[value];
    return true;
  };

  this.setPhone = () => {
    this.phone = prompt("Enter phone number");
    return true;
  };

  this.render = () => {
    let app = document.querySelector(".app");
    app.append(this.fullInfo());
    return true;
  };
}

let personOne = new Person("Sasha", "Rubanov", 33, 80295508198, "Minsk");

console.log(personOne);
console.log(personOne.fullInfo());
console.log(personOne.getAddress());
console.log(personOne.setPhone());
console.log(personOne.render());
