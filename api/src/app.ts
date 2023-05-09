import express from "express";
const app = express();
import cors from "cors";
import morgan from "morgan";
import router from "./routes";

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to API");
});

export default app;
