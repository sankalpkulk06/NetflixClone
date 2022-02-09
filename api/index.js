const express = require('express');
const app = express();
// getting-started.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/authentication')

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    // useNewUrlPareser: true,
    useUnifiedTopology: true
    // useCreateIndex: true
}).then(() => {
    console.log('DB connection successful!');
}).catch((err) => {
    console.log(err);
});

app.use(express.json());

app.use('/api/auth', authRoute);

app.listen(8800, () => {
    console.log(`Backend server is running at https://localhost:8800`)
})