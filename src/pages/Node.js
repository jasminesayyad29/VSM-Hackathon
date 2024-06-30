const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://kasav:1234@cluster0.61sugfk.mongodb.net/db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.log('Failed to connect to MongoDB', err);
});

const userSchema = new mongoose.Schema({
  // Define your user schema
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

app.post('/api/signup', async (req, res) => {
    console.log(req.body);
  const { name, email, password } = req.body;

  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error signing up user', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
