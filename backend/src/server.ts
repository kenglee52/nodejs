import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import UnitRouter from "./routes/unit.router";
import CategoryRouter from "./routes/category.router";
import TableRouter from "./routes/table.router";
const port = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/unit", UnitRouter);
app.use("/api/category", CategoryRouter);
app.use("/api/table", TableRouter);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})