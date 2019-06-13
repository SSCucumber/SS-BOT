var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
token: auth.token,
autorun: true
});
bot.on('ready', function (evt) {
logger.info('Connected');
logger.info('Logged in as: ');
logger.info(bot.username + ' – (' + bot.id + ')');
});


bot.on('message', function (user, userID, channelID, message, evt) {
// Our bot needs to know if it will execute a command
// It will listen for messages that will start with `!`
if (message.substring(0, 1) == '!') {
var args = message.substring(1).split(' ');
var cmd = args[0];
args = args.splice(1);
switch(cmd) {
// !ping
    
case 'soup':
bot.sendMessage({
to: channelID,
message: 'Heres a bowl of soup'
});
break;

case 'nou':
bot.sendMessage({
to: channelID,
message: 'NO U'
});
break;

case 'hello':
bot.sendMessage({
to: channelID,
message: 'Hello'
});
break;

case 'version':
bot.sendMessage({
to: channelID,
message: 'Version 1.0.0 Copyright Soup Studios 2019 Ltd.'
});
break;

var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function() {
console.log("Listening on Port 3000");
});

// Just add any case commands if you want to..
}
}
});
