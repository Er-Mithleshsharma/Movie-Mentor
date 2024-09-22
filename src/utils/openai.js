
import { OPENAI_KEY } from './constants';
import { GoogleGenerativeAI } from "@google/generative-ai";


// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(OPENAI_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
export default model;
