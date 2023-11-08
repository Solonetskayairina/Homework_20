    class Human{
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        introduce() {
            console.log(`My name is ${this.name} and I'm ${this.age} years old`)
        }
    }

    class Car {
        constructor(brand, model, yearOfIssue, licensePlate) {
            this.brand = brand;
            this.model= model;
            this.yearOfIssue = yearOfIssue;
            this.licensePlate = licensePlate;
            this.owner = null;
        }

        assignOwner(human) {
            if(human.age > 18) {
                this.owner = human;
            }else {
                console.log('You are under 18')
            }
        }

        information() {
            console.log(`Car info:
            brand : ${this.brand}
            model : ${this.model} 
            yearOfIssue : ${this.yearOfIssue}
            licensePlate : ${this.licensePlate}`);
            this.owner.introduce();
        }
    }

    const human = new Human('Victor', 32);
    const human2 = new Human('Polina', 23);

    console.log(human);
    console.log(human2);

    const car = new Car('BMW', 'X5', 2014, 'AT3030AC');
    const car2 = new Car('Mitsubishi', 'Colt New', 2009, 'AT5605AC');

    car.assignOwner(human);
    car2.assignOwner(human2);

    car.information();
    car2.information();

