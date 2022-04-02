import "dotenv/config";
import mongoose from "mongoose";

import app from "./app";

const PORT = process.env.SERVER_PORT || 5000;

let MONGO_URL = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

mongoose.connect(MONGO_URL);

const db = mongoose.connection;
db.once("open", () => console.log("Connected to Mongo DB!!"));
db.on("error", (error) => console.error(error));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

