
import { GoogleGenAI } from "@google/genai";
import { ResearcherRole, ResearchTask } from '../types';

if (!process.env.API_KEY) {
  // This is a fallback for development; in a real environment, the key should be set.
  // We throw an error to make it clear that the API key is missing.
  console.error("API_KEY environment variable is not set. The application will not function correctly.");
  // To avoid a hard crash, we could return a mocked response or a specific error message.
  // For this application, we'll let it fail at the call site to make the missing key obvious.
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export async function generateResearchQuestion(
  topic: string,
  role: ResearcherRole,
  task: ResearchTask
): Promise<string> {
  const prompt = `
    You are an expert medical research advisor. Your task is to formulate a raw, well-structured research question based on the provided components. The question should be clear, focused, and suitable for a formal research proposal. It should be phrased as a single question.

    **Research Context:** Medical / Clinical Research
    **Researcher Role:** As a ${role}, I want to...
    **Primary Task:** ${task}
    **Research Topic/Idea:** ${topic}

    Generate one single, concise research question based on the information above. Do not add any preamble, explanation, or quotation marks.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 150,
      }
    });
    
    const text = response.text;

    if (typeof text === 'string' && text.trim()) {
      return text.trim();
    }
    
    throw new Error("The AI returned an empty or invalid response. Please try rephrasing your topic, as it might be too specific or complex.");

  } catch (error) {
    console.error("Error generating research question:", error);
    if (error instanceof Error) {
        throw new Error(`An error occurred while communicating with the AI service: ${error.message}`);
    }
    throw new Error("An unknown error occurred while generating the question.");
  }
}
