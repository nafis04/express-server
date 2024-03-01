import express, { response } from "express";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
  response.send(`Hello from express`);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
