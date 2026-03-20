import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Kosh está vivo 🚀");
});

app.post("/api/kosh", (req, res) => {
  const msg = req.body?.message || "";
  return res.json({
    reply: "Kosh recibió: " + msg
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});    const reply = response.output_text || "No pude responder.";
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
