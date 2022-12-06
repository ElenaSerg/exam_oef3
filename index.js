import Schilder from "./modules/Schilder.js";

// console.log("test");

const schilder1 = new Schilder("Vincent", "van Gogh", "Postimpressionismeme");

schilder1.addPainting("Zonnebloemen", "123x72", 1245765);
schilder1.addPainting("De aardappeleters", "27x72", 1245765);
schilder1.addPainting("Slaapkamer te Arles", "20x72", 1245765);
schilder1.removePainting("Slaapkamer te Arles");
//console.log(schilder1);
//console.log(schilder1.getTotalWidth());
console.log(schilder1.getList());
