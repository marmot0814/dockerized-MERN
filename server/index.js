const express = require('express');
const cors = require('cors');

const app = express();
app.set('trust proxy', 1);
app.use(cors());

app.use(express.json());

const morgan = require('morgan');
app.use(morgan('combined'));

const session = require('express-session');
const MongoStore = require('connect-mongo');

app.use(session({
  name: 'session',
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: true,
  store: MongoStore.create({
    mongoUrl: process.env.DATABASE_URL
  }),
  cookie: {
    maxAge: 6 * 60 * 60 * 1000, // 6hr
    httpOnly: false,
  },
}));


app.get('/', (req, res, next) => {
  return res.json({ message: "Hello World!" });
});

const routes = require('./routes');
// New routes
// app.get('/api', routes.something);

app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    error: {
      message: err.message || 'Something went wrong.',
    },
  })
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
