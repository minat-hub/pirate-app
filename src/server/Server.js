const express = require('express');
const cors = require('cors');
const app = express();
require('./config/mongoose.config');
app.use(cors({ origin: 'http://127.0.0.1:3000', }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./routes/routes')(app);


app.listen(27017, () => {
    console.log("Listening at Port 27017")
})