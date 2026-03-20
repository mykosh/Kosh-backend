OpenAI from "openai";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/api/kosh", async (req, res) => {
  try {
    const msg = req.body.message || "";

    if (!msg.trim()) {
      return res.json({ reply: "Escríbeme algo para ayudarte." });
    }

    const completion = await openai.responses.create({
      model: "gpt-4o-mini",
      input: msg
    });

    const reply = completion.output_text || "No pude responder.";

    res.json({ reply });

  } catch (error) {
    console.error("ERROR EN KOSH:", error);
    res.status(500).json({ reply: "Error en Kosh 😅" });
  }
});

app.get("/", (req, res) => {
  res.send("Kosh está vivo 🚀");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: "Error en Kosh 😅" });
  }
});

app.get("/", (req, res) => {
  res.send("Kosh está vivo 🚀");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
