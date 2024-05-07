import express from "express";
import fs from "node:fs";

let data = null;

try {
    data = fs.readFileSync("./family.json", "utf8");
} catch (err) {
    console.error(err);
}

const app = express();
app.use(express.json());
const port = 3000;

app.get("/family", (req, res) => {
    res.send(data);
});

app.post("/family", (req, res) => {
    const body = req.body;
    console.log(body);
    res.send("hi all");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
