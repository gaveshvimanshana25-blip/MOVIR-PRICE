const express = require("express");
const app = express();

app.use(express.json());

let movies = [
  { name: "Avengers Endgame", price: "Rs.150" },
  { name: "Stranger Things", price: "Rs.200" },
  { name: "The Power", price: "Rs.180" }
];

app.get("/movies", (req, res) => {
  res.json(movies);
});

app.listen(3000, () => {
  console.log("Movie Bot running on port 3000");
});
