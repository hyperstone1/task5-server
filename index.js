require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./router/index');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));

app.use(cors());
app.use(express.json());
app.use('/api', router);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server starting on port ${PORT}`));
  } catch (error) {
    console.log('Error with connect to database: ', error);
  }
};
start();
