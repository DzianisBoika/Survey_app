const express = require("express");
const fs = require("fs");

const app = express();
const jsonParser = express.json();

app.use(express.static(__dirname + "/public"));

const filePath = "surveys.json";

app.get("/api/surveys", function (req, res) {
  const content = fs.readFileSync(filePath, "utf8");
  const surveys = JSON.parse(content);
  res.send(surveys);
});

// получение одного пользователя по id
app.get("/api/surveys/:id", function (req, res) {
  const id = req.params.id; // получаем id
  const content = fs.readFileSync(filePath, "utf8");
  const surveys = JSON.parse(content);
  let survey = null;
  // находим в массиве пользователя по id
  for (var i = 0; i < surveys.length; i++) {
    if (surveys[i].id == id) {
      survey = surveys[i];
      break;
    }
  }
  // отправляем пользователя
  if (survey) {
    res.send(survey);
  } else {
    res.status(404).send();
  }
});

// получение отправленных данных
app.post("/api/surveys", jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);

  const surveyName = req.body.name;
  const surveyAge = req.body.age;
  let survey = { name: surveyName, age: surveyAge };

  let data = fs.readFileSync(filePath, "utf8");
  let surveys = JSON.parse(data);

  // находим максимальный id
  const id = Math.max.apply(
    Math,
    surveys.map(function (o) {
      return o.id;
    })
  );
  // увеличиваем его на единицу
  survey.id = id + 1;
  // добавляем пользователя в массив
  surveys.push(survey);
  data = JSON.stringify(surveys);
  // перезаписываем файл с новыми данными
  fs.writeFileSync("surveys.json", data);
  res.send(survey);
});

// удаление пользователя по id
app.delete("/api/surveys/:id", function (req, res) {
  const id = req.params.id;
  let data = fs.readFileSync(filePath, "utf8");
  let surveys = JSON.parse(data);
  let index = -1;
  // находим индекс пользователя в массиве
  for (var i = 0; i < surveys.length; i++) {
    if (surveys[i].id == id) {
      index = i;
      break;
    }
  }
  if (index > -1) {
    // удаляем пользователя из массива по индексу
    const survey = surveys.splice(index, 1)[0];
    data = JSON.stringify(surveys);
    fs.writeFileSync("surveys.json", data);
    // отправляем удаленного пользователя
    res.send(survey);
  } else {
    res.status(404).send();
  }
});

// изменение пользователя
app.put("/api/surveys", jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);

  const surveyId = req.body.id;
  const surveyName = req.body.name;
  const surveyAge = req.body.age;

  let data = fs.readFileSync(filePath, "utf8");
  const surveys = JSON.parse(data);
  let survey;
  for (var i = 0; i < surveys.length; i++) {
    if (surveys[i].id == surveyId) {
      survey = surveys[i];
      break;
    }
  }
  // изменяем данные у пользователя
  if (survey) {
    survey.age = surveyAge;
    survey.name = surveyName;
    data = JSON.stringify(surveys);
    fs.writeFileSync("surveys.json", data);
    res.send(survey);
  } else {
    res.status(404).send(survey);
  }
});

app.listen(3001, function () {
  console.log("Сервер ожидает подключения...");
});
