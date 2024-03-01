import express, { response } from "express";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/status", (request, response) => {
  console.log(request.body);
  const status = { status: "Running" };
  response.send(status);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
