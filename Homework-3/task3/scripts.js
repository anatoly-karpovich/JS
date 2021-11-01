import { Animal } from "./Animal.js";
import { Snake } from "./Snake.js";
import { Worker } from "./Worker.js";
import { CatLike } from "./Catlike.js";
import { Bird } from "./Bird.js";
import { Zoo } from "./Zoo.js";

const myZoo = new Zoo("Minsk", "300 sq.m.", "31.10.2021", 10);

myZoo.addAnimal("Snake");
myZoo.addAnimal("Elephant");

myZoo.addWorker("Yauhen");
myZoo.addWorker("Anatoly");

const chicken = new Bird("chichen", "white", 2, 0.01, "Belarus", false);
const cobra = new Snake("snake", "black", 20, 1, "africa", true);

console.log(lion.animalInfo);

const dataWrapper = document.getElementById("root");
const div = document.createElement("div");
div.innerHTML += `
    <h1>Data of the Zoo</h1>
        <p>Adress: ${myZoo._address}</p>
        <p>Area: ${myZoo._area}</p>
        <p>Established date: ${myZoo._established_date}</p>
        <p>Ticket price: ${myZoo._ticket_price}</p>
        <p>Animals: ${myZoo._animals}</p>
        <p>Workers: ${myZoo._workers}</p>
        <h1>Animals we've got:</h1>
        <h2>Chicken:</h2>
        <p>Color: ${chicken._color}</p>
        <p>Weight: ${chicken._weight} kg</p>
        <p>Can fly: ${chicken._isFlying}</p>
        <h2>Cobra:</h2>
        <p>Color: ${cobra._color}</p>
        <p>Weight: ${cobra._weight} kg</p>
        <p>Can fly: ${cobra._isPoisonous}</p>

`;
dataWrapper.append(div);
