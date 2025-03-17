import { GoogleGenerativeAI } from "@google/generative-ai";


export async function TextGeneratorIA(modelo, ia, api, maxPutTokens, training = null) {

try{
  const genAI = new GoogleGenerativeAI(api);
  
  const model = genAI.getGenerativeModel({ model: modelo,
                                         systemInstruction: training,
                                         })
const result = await model.generateContent({
  contents: [
        {
          role: 'user',
          parts: [
            {
              text:ia,
            }
          ],
        }
    ],
    generationConfig: {
      maxOutputTokens: maxPutTokens,
    }
        });
//console.log(result.response.text());

  return result.response.text();

  
} catch (err){
console.log("Error404: verify if your apiKey/InputModel is valid");
}

  
}
