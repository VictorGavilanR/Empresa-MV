// src/pages/api/ai-chat.ts
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { message } = await request.json();
    // Respuesta mock (rápida y segura)
    const reply = `Recibí: "${message}". ¿Quieres que lo convierta en una propuesta o que te sugiera pasos?`;

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Bad Request' }), { status: 400 });
  }
};
