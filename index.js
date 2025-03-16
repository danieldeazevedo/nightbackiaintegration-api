
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("GEMINI_API_KEY");

async function main() {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = "Explain how AI works";
  const result = await model.generateContent(prompt);
  console.log(result.response.text());
}

main().catch(console.error);
