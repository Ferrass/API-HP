const express = require("express");
const app = express();

app.use(express.json());

const characters = [
  {
    id: 1,
    name: "Harry Potter",
    spacies: "Human",
    house: "Gryffindor",
    actor: "Daniel Redcliffe",
  },
  {
    id: 2,
    name: "Hermione",
    spacies: "Human",
    house: "Gryffindor",
    actor: "Emma Watson",
  },
];

//Rota get -READ
app.get("/", (req, res) => {
  res.send(characters);
});

//POST - CREATE
app.post("/character", (req, res) => {
  const character = req.body;

  character.id = characters.length + 1;
  characters.push(character);

  res.send({ message: "Personagem criado com sucesso!" });
});

//getBYid

app.get("/character/:id", (req, res) => {
  const id = +req.params.id;
  const character = characters.filter(Boolean).find((c) => c.id === id);

  if (!character) {
    res.send({ message: "Personagem não existe!" });
    return;
  }

  res.send(character);
});

//PUT - UPDATE
app.put("/character/:id", (req, res) => {
  const id = +req.params.id;
  const character = characters.filter(Boolean).find((c) => c.id === id);

  if (!character) {
    res.status(404).send({ message: "Personagem não existe" });
    return;
  }

  const { name, spacies, house, actor } = req.body;

  character.name = name;
  character.spacies = spacies;
  character.house = house;
  character.actor = actor;

  res.send(character);
});

// DELETE - DELETE

app.delete("character/:id", (req, res) => {
  const id = +req.params.id;
  const character = characters.filter(Boolean).find((c) => c.id === id);

  if (!character) {
    res.status(404).send({ messege: "Personagem não existe" });
    return;
  }

  const index = characters.indexOF(character);
  delete characters[index];

  res.send({ message: "Persongaem apagado com sucesso" });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
