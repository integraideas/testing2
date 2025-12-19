
import { GoogleGenAI, Type } from "@google/genai";
import { Devotional } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getDailyDevotional = async (): Promise<Devotional> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Genera una frase devocional corta para hoy. Incluye una 'Palabra del Día' impactante, un versículo bíblico relevante y un breve mensaje de aliento de máximo 20 palabras. Responde en JSON.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            wordOfDay: { type: Type.STRING },
            verse: { type: Type.STRING },
            reference: { type: Type.STRING },
            message: { type: Type.STRING }
          },
          required: ["wordOfDay", "verse", "reference", "message"]
        }
      }
    });
    
    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Error fetching devotional:", error);
    return {
      wordOfDay: "FORTALEZA",
      verse: "Todo lo puedo en Cristo que me fortalece",
      reference: "Filipenses 4:13",
      message: "Confía en que hoy tienes la fuerza necesaria para superar cualquier obstáculo que se presente en tu camino."
    };
  }
};

export const createAIChatSession = () => {
  return ai.chats.create({
    model: 'gemini-3-pro-preview',
    config: {
      systemInstruction: "Eres 'Guía Espiritual y Físico', un asistente virtual experto en la Biblia, bienestar emocional y entrenamiento físico. Tu objetivo es motivar a los usuarios a cuidar su 'templo' (el cuerpo) mientras crecen espiritualmente. Mantén un tono alentador, sabio y respetuoso.",
    },
  });
};
