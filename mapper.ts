interface Person {
  name: string;
  age: number;
  email: string;
  weight: number;
  height: number;
}

class Man {
  name: string;
  age: number;
  email: string;
  weight: number;
  height: number;

  constructor(person: Person) {
    this.name = person.name;
    this.age = person.age;
    this.email = person.email;
    this.weight = person.weight;
    this.height = person.height;
  }
}
