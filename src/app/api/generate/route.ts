import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from "@google/genai";
import OpenAI from 'openai';
import { templates } from '@/lib/templates';
import { GenerateRequest, GenerateResponse } from '@/types';
import { error } from "console";

const ai = new GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY!});

const groq = new OpenAI({
    apiKey:process.env.GROQ_API_KEY!,
    baseURL:'https://api.groq.com/openai/v1',
});
    

export async function POST(req: NextRequest) {
    let content: string = '';
    
    try {
        const body: GenerateRequest = await req.json()
        const { templateId, fields, tone } = body

        const template = templates.find(t => t.id === templateId)
        if (!template) {
            return NextResponse.json(
                { error: 'Template non trovato' }, 
                { status: 400 })
        }
        const prompt = `
Tono di comunicazione: ${tone}

Informazioni fornite:
${Object.entries(fields)
    .map(([key, value]) => `- ${key}: ${value}`)
    .join('\n')}

Genera il copy marketing richiesto.
    `.trim()


    try{
        const result = await ai.models.generateContent({ 
            model: 'gemini-3-flash-preview',
            contents: prompt,  
        });
        content = result.text;
    } catch(e1: any){
        console.warn('Gemini occuapto o non va',e1);
        const completion = await groq.chat.completions.create({
          model: 'llama3-8b-8192',
          messages: [
            { role: 'system', content: template.systemPrompt },
            { role: 'user', content: prompt },
          ],
        });
        content= completion.choices[0]?.message?.content || '';
    }
        return NextResponse.json({ content } as GenerateResponse)

    } catch (error: any) {
        console.error('Errore generazione multi-modello:', error);

        return NextResponse.json(
            { error: 'Errore nella generazione. Controlla la API key.' },
            { status: 500 }
        );
    }
}