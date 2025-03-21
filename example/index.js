import { IaConnection } from 'nightback-ia-integration';
//turn config.json in .gitnore for your security"
//import { ApiKey } from "./config.json"
async function main() {
  const config = await import('./config.json', { assert: { type: 'json' } });
  const ApiKey = config.ApiKey;
  IaConnection("gemini-2.0-flash", "explique a revolução francesa", ApiKey, 1000, "você é um professor de história francesa");
}

console.time("execution time");
main();
console.timeEnd("execution time");