import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const body = await req.json();

    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini",

      messages: [
        {
          role: "system",
          content: `
          You are Evaara's luxury crystal assistant.

          Your tone is:
          - calming
          - elegant
          - spiritual
          - feminine
          - emotionally intelligent

          Recommend crystals gently.
          Keep responses concise.
          `,
        },

        {
          role: "user",
          content: body.message,
        },
      ],
    });

    return Response.json({
      reply: response.choices[0].message.content,
    });
  } catch (error) {
    console.log(error);

    return Response.json({
      reply: "Something went wrong.",
    });
  }
}