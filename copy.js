const Copier = require("./Copier");

/**The following are some use cases for the methods from the Copier class */

const clone = new Copier(34);

clone.get().then((val) => console.log(val)); // Example after 1 sec: { msg: 'Hi!' }

clone.delete().catch((err) => console.error(err)); // Example after 2 sec: Error: Cannot delete!

console.log(clone.copy()); // Immediate example: { msg: 'Hi!' }
