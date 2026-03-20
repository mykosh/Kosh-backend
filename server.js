import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
const port = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Kosh está vivo 🚀");
});

app.post("/api/kosh", async (req, res) => {
  try {
    const msg = req.body?.message || "";

    if (!msg.trim()) {
      return res.json({ reply: "Escríbeme algo para responder." });
    }

    if (!process.env.OPENAI_API_KEY) {
      console.error("Falta OPENAI_API_KEY");
      return res.status(500).json({ reply: "Falta OPENAI_API_KEY en Render." });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      input: msg
    });

    const reply = response.output_text || "No pude responder.";
    return res.json({ reply });

  } catch (error) {
    console.error("ERROR REAL COMPLETO:", error);
    return res.status(500).json({
      reply: "Backend error: " + (error?.message || "desconocido")
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});  }
});

// Ruta base
app.get("/", (req, res) => {
  res.send("Kosh está vivo 🚀");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
