import { apiKey, abc } from "./util";
import defaultApiKey from "./util";
import * as util from "./util";
import { abc as alias} from "./util";
import funzione from "./function"
import funzione2 from "./function2"
import { stampaFileObject, User } from "./object"
import * as array from "./array"
import * as destruction from "./descruction"
import { mergeHobbies, unionHobbies, spreadOperatorObject } from "./spreadoperator";
import defaultFunction from "./controlStructure"
import defaultDomManipulation from "./domManipolation"
import { handleTimout, handleTimeout2, greeter } from "./functionValue";
import { init } from "./functionIntoFunction";


let userMessage = "Hello world!!!";
const constUserMessagge = userMessage;

console.log(apiKey);
console.log(defaultApiKey);
console.log(abc);
console.log(util.apiKey);
console.log(alias);
console.log(userMessage);
console.log(constUserMessagge);

let divisione = 10 / 5;
let sommaNumerica = 10 + 5;
let sommaStringhe = "Hello " + "world!!!";
let booleanUguale = 10 === 5;
let booleanMaggiore = 10 > 5;
let booleanMinore = 10 < 5;
let booleanMaggioreUguale = 10 >= 5;
let booleanMinoreUguale = 10 <= 5;

if ( 10 === 10 ) {
    console.log("TRUE")
}

function greet() {
    console.log("greet")
}
greet()

function greetWithParameters(userName, message){
    console.log(userName);
    console.log(message);
}
greetWithParameters("Marco", "Bello mio")

function greetWithDefaulParameters(usurName, messagge = "Default message") {
    console.log(usurName);
    console.log(messagge);
}
greetWithDefaulParameters("Marco")
greetWithDefaulParameters("Marco", "Senza messaggio default")

function createGreeting(usurName, messagge = "Default message"){
    return usurName + " " + messagge;
}
console.log(createGreeting("Marco"));
console.log(createGreeting("Marco", "Senza messaggio default"));

funzione();

console.log(funzione2("Marco", "Ciao"));

() => console.log("A");

variabile => console.log(variabile);

(variabile1, variabile2) => variabile1 * variabile2;

(variabile1, variabile2, variabile3) => ({nome: variabile1, cognome: variabile2, nato: variabile3});

stampaFileObject();

const user1 = new User("User", 45);
console.log(user1);
console.log(user1.getName());
console.log(user1.getNominativo());

console.log(array.hobbies[0]);
array.hobbies.push("Working");
let index = array.hobbies.findIndex((item)=> {
    return item === "Sport"
});
array.hobbies.findIndex(item=> item === "Sport");
console.log(index);
const hobbiesEdites = array.hobbies.map(item => item + "!");
console.log(hobbiesEdites);
const editedHobby = array.hobbies.map((item) => ({name: item}));
console.log(editedHobby);

console.log(destruction.name);
console.log(destruction.userNameDescructureObject);

console.log(destruction.destructionParameterFunction(new User("Pippo", 5)));
console.log(destruction.destructionParameterFunction2({name:"Pippo", age: 5}));

console.log(mergeHobbies);
console.log(unionHobbies);
console.log(spreadOperatorObject);

defaultFunction();

defaultDomManipulation();

setTimeout(handleTimout, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
    console.log("More timing out...");
}, 4000);
greeter( () => {
    console.log("Invocazione funzione tramite parametro");
})

init();