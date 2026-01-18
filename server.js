import express from "express";

const app = express();
app.use(express.json());

app.post("/api/kosh", async (req, res) => {
  try {
    const userText = req.body.message || "";

    const r = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: `You are Kosh, a crypto assistant. Reply in Spanish.\nUser: ${userText}`
      })
    });

    const data = await r.json();
    const text =
      data.output_text ||
      data.output?.[0]?.content?.[0]?.text ||
      "No pude responder ahora.";

    res.json({ reply: text });

  } catch {
    res.json({ reply: "Error del servidor" });
  }
});

app.get("/", (req, res) => res.send("Kosh backend OK"));

app.listen(process.env.PORT || 3000);
