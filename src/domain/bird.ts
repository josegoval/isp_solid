import { Flyer } from "./interfaces/flyer";
import { Runner } from "./interfaces/runner";

class Bird implements Runner, Flyer {
    run() {
        console.log("Bird is running");
    }
    fly() {
        console.log("Bird is flying");
    }
}
