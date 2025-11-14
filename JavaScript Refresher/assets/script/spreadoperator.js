import { hobbies } from "./array";
import { User } from "./object";

let newHobbies = ["Reading"];

export let mergeHobbies = [...hobbies, ...newHobbies];
export let unionHobbies = [hobbies, newHobbies];

let user2 = new User("Nonno", 6);

export let spreadOperatorObject = {
    var: "var",
    ...user2
};

