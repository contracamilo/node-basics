const express = require('express');
const app = express();
const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`);
});


moviesApi(app);













/* practice


app.get('/', (req, res) => {
  res.send(`hello darkness my old friend`);
});

app.get('/json', (req, res) => {
  res.json({ hello: 'darkness my old friend' });
});

const isLeap = (year) => (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0);

app.get('/isleap/:year', (req, res) => {
  try {
    const year = Number(req.params.year);

    if (!year) {
      res.send(`please insert a year`);
    }

    res.send(isLeap(year) ? `${year} is leap` : `${year} is not leap`);
  } catch (error) {
    res.status(500).send({ error });
  }
}); */

