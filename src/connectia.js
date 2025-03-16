import { GoogleGenerativeAI } from "@google/generative-ai";
//import { prompt } from './index.js';

export async function IaConnection(modelo, ia, api) {

try{
  const genAI = new GoogleGenerativeAI(api);
  
  const model = genAI.getGenerativeModel({ model: modelo })
const result = await model.generateContent(ia);
console.log(result.response.text());

  
} catch (err){
console.log("Error404: verify if your apiKey/InputModel is valid");
}

  
}
