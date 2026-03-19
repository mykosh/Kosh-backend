import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY = https://kosh-backend-moui.onrender.com/api/kosh
});

app.post("/api/kosh", async (req, res) => {
  try {
    const msg = req.body.message || "";

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are Kosh, a smart business assistant." },
        { role: "user", content: msg }
      ]
    });

    const reply = completion.choices[0].message.content;

    res.json({ reply });

  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: "Error en Kosh 😅" });
  }
});
