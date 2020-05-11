const express = require('express');
const connectDB = require('./config/db');
const app = express();

//Connect DB
connectDB();

// Init mIddleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
  res.json({ msg: 'hello world this is the contact keeper API' }),
);

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on ${PORT}`));
