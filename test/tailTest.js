const tail = require("../tail.js");
const assertEqual = require("../assertEqual.js");

let result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
