
'use strict';

const Validator = require('./validator.js');
const Notes = require('../models/notes-schema.js');
const mongoose = require('mongoose')

class Notes {
    constructor(args) {

        {
            if (args.valid()) this.execute(args.command);
            else console.error('ERROR! Invalid arguments sent to app.');
        }

    }

    execute(command) {
        mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true } )
        console.log('Correct! Let us execute');
        switch (command.action) {
            case 'add':
                this.add(command.payload);
                break;
            case 'list':
                return this.get();
                break;
            case 'delete':
                return this.delete(command.categoryId)
                break;
            default:
                break;
        }
    };

    async add(input) {
        this.note ={note: input.payload };
        if(input.categoryId) {
            this.note.categoryId = [input.categoryId]
        }
        try{

            await new Notes(this.note).save();
            console.log(`New note added : ${this.note}`)
            
        }catch {
            console.error('e');
        }
    }

    async list(input) {
        let allNotes = await Notes.find();
         if(input.categoryId){
            allNotes = allNotes.filter(entry => {
                return entry.categoryId.includes(input.categoryId);
            });
         }
    }

    async delete(entry) {
        if(!entry.id){

            console.error('e')
        }else {
            let deleteItem = await Notes.delete({_id: entry.id});
            console.log(`Deleted item ${deleteItem}`);
        }
    }

    // add(payload) {
    //     console.log('Adding note');
    //     console.log(id + ':', payload);
    // };


    // valid() {
    //     const schema = {
    //         id: {type:'number' , required:true},
    //         text: {type: 'string', required: true}
    //     }

    //     const validator = new Validator(schema);
    //     return validator.isValid(this.payload);
    // }

}

module.exports = Notes;