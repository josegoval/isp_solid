import { Barker } from "./interfaces/barker";
import { Runner } from "./interfaces/runner";

class Dog implements Runner, Barker {
    run() {
        console.log("Dog is running");
    }

    bark() {
        console.log("Dog is barking");
    }
}