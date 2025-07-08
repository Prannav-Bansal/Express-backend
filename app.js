const express = require('express');

const app = express();
const authRouter = require('./router/authRoute');
const cookieParser = require('cookie-parser');
const  databaseconnect = require('./config/databaseConfig');
const cors = require('cors');

databaseconnect();

app.use(express.json());
app.use(cookieParser());
app.use('/api/auth' ,authRouter);
app.use(cors({
    origin: 'http://localhost:3000', // Update with your frontend URL
    credentials: true, // Allow cookies to be sent
}));



app.use('/', (req, res) => {
    res.status(200).json({ data : 'JWTauth server -updated' });
});

module.exports = app;