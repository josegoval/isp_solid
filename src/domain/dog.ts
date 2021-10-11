import { Animal } from "./animal";

class Dog implements Animal {
    fly() { }

    run() {
        console.log("Dog is running");
    }

    bark() {
        console.log("Dog is barking");
    }
}