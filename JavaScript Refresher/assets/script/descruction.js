export let [name, userName] = ["userNameDescructureObject", "Petraccini"]

export let { name: userNameDescructureObject, age} = {
    name: "Marco",
    age: 29
};

export function destructionParameterFunction({name, age}){
    return name + " " + age;
};

export function destructionParameterFunction2(User){
    return User.name + " " + User.age;
};