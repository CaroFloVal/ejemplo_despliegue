const express = require('express');
const app = express();
const { getUsers } = require('./consultas.js');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());


app.listen(3000, () => {
    console.log('Server is running on port ' + port);
}
);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', async (req, res) => {
    await getUsers()
    .then(result => res.json(result))
    .catch(e => console.log(e))
})