'use strict';

var Sequelize = require('sequelize');
const { sequelize } = require('../models');

/**
 * Actions summary:
 *
 * createTable "categories", deps: []
 * createTable "tasks", deps: [categories]
 *
 **/

var info = {
    "revision": 1,
    "name": "create-tables",
    "created": "2021-02-02T14:22:50.963Z",
    "comment": ""
};

var migrationCommands = function(transaction) {
     return [        
        {
            fn: "createTable",
            params:[
                "candidateLists",
                {
                    "candidateListID": {
                        "type": Sequelize.INTEGER,
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false,
                        "field": 'candidateListID'
                      },
                      "studentID": {
                          "type": Sequelize.INTEGER,
                          "allowNull": false,
                          "field": 'studentID'
                      },
                      "description": {
                        "type": Sequelize.STRING,
                        "allowNull": false,
                        "field": 'description'
                      }
                }
            ]
        }
    ];
};
var rollbackCommands = function(transaction) {
    return [
        {
            fn: "dropTable",
            params: ["candidateLists", {
                transaction: transaction
            }]
        }
    ];
};

module.exports = {
    pos: 0,
    useTransaction: true,
    execute: function(queryInterface, Sequelize, _commands)
    {
        var index = this.pos;
        function run(transaction) {
            const commands = _commands(transaction);
            return new Promise(function(resolve, reject) {
                function next() {
                    if (index < commands.length)
                    {
                        let command = commands[index];
                        console.log("[#"+index+"] execute: " + command.fn);
                        index++;
                        queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                    }
                    else
                        resolve();
                }
                next();
            });
        }
        if (this.useTransaction) {
            return queryInterface.sequelize.transaction(run);
        } else {
            return run(null);
        }
    },
    up: function(queryInterface, Sequelize)
    {
        return this.execute(queryInterface, Sequelize, migrationCommands);
    },
    down: function(queryInterface, Sequelize)
    {
        return this.execute(queryInterface, Sequelize, rollbackCommands);
    },
    info: info
};