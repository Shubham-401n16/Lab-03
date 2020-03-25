'use strict';

const minimist = require('minimist');

class Input {
    constructor(args) {
        let formatted = minimist(args);
        console.log('formatted', formatted);


        this.command = {};

        let objectKeyArray = Object.keys(formatted);

        for (let i = 0; i < objectKeyArray.length; i++) {

            let key = objectKeyArray[i];
            let val = formatted[key];

            switch (key) {
                case 'a':
                case 'add':
                    this.command = { action: 'add', payload: val,categoryId: false };
                    break;
                case 'c':
                case 'category':
                        this.command.categoryId = typeof formatted[key] === 'string'
                        ? val
                        : false;
                        break;
                case 'l':
                case 'list':
                    this.command =
                    {action: 'list', 
                    payload: 
                    typeof formatted[key] === 'string'
                        ? val
                        : false,};
                    break;
                case 'd':
                case 'delete':
                    this.command = {action: 'delete', payload: 
                    typeof formatted[key] === 'string'
                    ? val
                    : false,};
                    break;
                default:
                    break;
            }
        }
        console.log(this.command);

    }

}




module.exports = Input;