import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from "./routes/users.js";

const app = express();

//Port Setting
const PORT = 8000;

// send or req data use json type
app.use(bodyParser.json())

app.use("/people", usersRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
