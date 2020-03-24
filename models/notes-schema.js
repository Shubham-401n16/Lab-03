'use strict';

const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
  note: { type: 'string' , required: true },
  categoryId: {type: 'array', required: false}
});
  


const notesModel = mongoose.model('notes',notesSchema);

module.exports = notesModel;