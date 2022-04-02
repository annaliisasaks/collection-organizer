import cors from "cors";
import express from "express"
import router from "./routes/v1";
import bodyParser from "body-parser";

const app = express();

// Setup CORS
app.use(cors())
app.options('*', cors());

app.use(bodyParser.json());

// Setup router
app.use("/api/v1", router);

// Give error for all unmapped routes
app.all('*', (req, res) => {
    res.status(451);
    res.json({ error: "🚫🚫🚫No 🔥 for you🚫🚫🚫" });
})

export default app;