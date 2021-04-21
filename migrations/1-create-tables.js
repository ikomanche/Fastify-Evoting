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
            params: [
                "students",
                {
                    "studentid": {
                        "type": Sequelize.INTEGER,
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false,  
                        "field": "studentid"                      
                      },
                      "name": {
                        "type": Sequelize.STRING,
                        "allowNull": false,
                        "field": "name"
                      },
                      "surname": {
                          "type": Sequelize.STRING,
                          "allowNull": false,
                          "field": 'surname'
                      },
                      "departmant": {
                          "type": Sequelize.STRING,
                          "allowNull": false,
                          "field": 'departmant'
                      },
                      "hasVoted": {
                          "type": Sequelize.BOOLEAN,
                          "allowNull": true,
                          "field": 'hasVoted',
                          "default": false
                      },
                      "email": {
                          "type": Sequelize.STRING,
                          "allowNull": false,
                          "field": 'email'
                      },                      
                      "studentPW": {
                          "type": Sequelize.STRING,
                          "allowNull": false,
                          "field": 'studentPW'
                      },
                      "generatedPW": {
                          "type": Sequelize.STRING,                          
                          "allowNull": true,
                          "field": 'generatedPW',
                          "default": ''
                      },
                      "totalVote": {
                        "type": Sequelize.INTEGER,
                        "allowNull": true,
                        "field": 'totalVote',
                        "default": 0
                      },
                      "isCandidate": {
                        "type": Sequelize.BOOLEAN,
                        "allowNull": true,
                        "field": 'isCandidate',
                        "default": false
                      }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params:[
                "admins",
                {
                    "adminid": {
                        "type": Sequelize.INTEGER,
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false,
                        "field": 'adminid'
                      },
                      "adminPW": {
                          "type": Sequelize.STRING,
                          "allowNull": false,
                          "field": 'adminPW'
                      },
                      "name": {
                        "type": Sequelize.STRING,
                        "allowNull": false,
                        "field": 'name'
                      },
                      "surname": {
                          "type": Sequelize.STRING,
                          "allowNull": false,
                          "field": 'surname'
                      },
                      "email": {
                          "type": Sequelize.STRING,
                          "allowNull": false,
                          "field": 'email'
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
            params: ["students", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["admins", {
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