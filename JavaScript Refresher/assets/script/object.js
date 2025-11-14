const user = {
    name: "Marco",
    age: 28,
    getName() {
        return this.name;
    }
}

export function stampaFileObject() {
    console.log(user);
    console.log(user.age);
    console.log(user.getName());
}


export class User {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getAge() {
        return this.age;
    }

    getName() {
        return this.name;
    }

    getNominativo() {
        return this.name + this.age;
    }

}