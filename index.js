import { IaConnection } from './src/connectia.js';

//turn config.json in .gitnore for your security"
//import { ApiKey } from "./config.json"
async function main() {
  const ApiKey = require('./config.json')
  IaConnection("gemini-2.0-flash", "explique a revolução francesa", ApiKey);
}

console.time("execution time");
main();
console.timeEnd("execution time");