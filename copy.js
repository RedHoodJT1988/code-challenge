const Copier = require("./Copier");

/**The following are some use cases for the methods from the Copier class */

const clone = new Copier(34);

clone.get().then((val) => console.log(val)); // After 1 sec: { msg: 'Hi!' }

clone.delete().catch((err) => console.error(err)); // After 2 sec: Error: Cannot Delete

console.log(clone.copy()); // Immediately: { msg: 'Hi!' }
