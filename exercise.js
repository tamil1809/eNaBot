var restify = require('restify');
var builder = require('botbuilder');

//setup restify server
//3978 default port line 
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function() {
    console.log('%s Listening to %s', server.name, server.url);
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

//Listen for messages from users
//calling  api/messages from module
//connector to listen message from listen method
server.post('/api/messages', connector.listen());

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(
    connector, (session) => {
        session.send('Your Text: %s', session.message.text);
    });