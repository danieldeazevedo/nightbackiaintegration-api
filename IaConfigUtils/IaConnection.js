import { TextGeneratorIA } from './IaGenerator/TextGenerator.js';
//import { ImageGeneratorIa } from './IaConfigUtils/IaGenerator/ImageGenerator.js';
export async function IaConnectionText(modelo, ia, api, maxPutTokens, training = null){
if(modelo, ia, api, maxPutTokens == null){

  console.error("You put a null value in the parameters");

}
  TextGeneratorIA(modelo, ia, api, maxPutTokens, training);

}

export async function IaConnectionImg(context) {

if(context == null){

  return console.error("you put a null parameters")
}


}