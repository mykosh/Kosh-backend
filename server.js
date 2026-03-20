import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
const port = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Endpoint principal
app.post("/api/kosh", async (req, res) => {
  try {
    const msg = req.body.message || "";

    if (!msg.trim()) {
      return res.json({ reply: "Escríbeme algo para poder responderte." });
    }

    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      input: msg
    });

    const reply =
      response.output?.[0]?.content?.[0]?.text ||
      "No pude responder.";

    res.json({ reply });
  } catch (error) {
    console.error("ERROR REAL:", error);
    res.status(500).json({ reply: "Error en Kosh 😅" });
  }
});

// Ruta base
app.get("/", (req, res) => {
  res.send("Kosh está vivo 🚀");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
