const express = require('express');
const app = express();
const { config } = require('./config/index');
const moviesApi = require('./routes/movies');
const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandlers');
const validationHandler = require('./utils/middleware/notFoundHandler')
;

/* middlewares */

app.use(express.json());
//routes
moviesApi(app);

//404 error handler
app.use(validationHandler);

//error mw
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);



app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`);
});
















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

