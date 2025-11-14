import { hobbies } from "./array";

export default function(){
const password = prompt("Your Password")

if ( password === "Hello" ){
    console.log("Entrato con " + password)
} else if (password === "hello") {
    console.log("Entrato con " + password)
} else {
    console.log("Non entrato");
}

for (let hobby of hobbies){
    console.log(hobby);
}
}