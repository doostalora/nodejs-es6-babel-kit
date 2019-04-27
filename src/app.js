import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import users from './routes/users';
//import passport from 'passport';
//import bcrypt from 'bcryptjs';

const app = express();

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// Connect to mongoose
mongoose.connect('mongodb://localhost/katerra-planner', {
  useMongoClient: true
})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));




// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Index Route
app.get('/', (req, res) => {
  res.send('Welcome!');
});

// Add user Routes
app.use('/users',users);

const port = 4000;

app.listen(port, () =>{
  console.log(`Server started on port ${port}`);
});
