'use strict';

//3rd party dependencies
require('dotenv').config();
const mongoose = require('mongoose');

//My Dependencies
const Notes = require('./models/notes-schema.js');
const Categories =  require('./models/category-schema.js');
const Input = require('./lib/input.js')


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const categories = new Categories();
const input = new Input();
const note = new Notes(input);



   
mongoose.disconnect();
