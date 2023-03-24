const express = require('express');
const cors = require('cors');
const app = express();
require('./server/config/mongoose.config');
const port = 8000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./server/routes/pirate.routes')(app);


app.listen(port, { maxHttpHeaderSize: 16384 }, () => console.log(`Listening on port: ${port}`));