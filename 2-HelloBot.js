var restify = require("restify");
var builder = require('botbuilder');

var connector = new builder.ConsoleConnector().listen();
var bot = new builder.UniversalBot(connector);
bot.dialog('/', [
    function(session) {
        builder.Prompts.text(session, 'What is your name?');
    },
    function(session, results) {
        session.send('Hello, ' + results.response);
    }
]);