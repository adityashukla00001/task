const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

let tasks = [];

app.get('/', (req, res) => {
  res.render('index', { tasks });
});

app.post('/tasks', (req, res) => {
  const task = req.body.task;
  tasks.push(task);
  res.redirect('/');
});

app.post('/tasks/:id/delete', (req, res) => {
  const id = req.params.id;
  tasks = tasks.filter((task, index) => index != id);
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
