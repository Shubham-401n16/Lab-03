'use strict';

const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
  note: { type: String , required: true },
  categoryId: {type: String, required: false}
});
  


const notesModel = mongoose.model('notes',notesSchema);

module.exports = notesModel;