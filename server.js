import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Kosh backend activo ✅");
});

app.post("/api/kosh", (req, res) => {
  const msg = req.body.message || "";
  res.json({ reply: "Kosh responde: " + msg });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
