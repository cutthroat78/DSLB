var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var Cleverbot = require ('cleverbot-node')
var clbot = new Cleverbot;
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console,{
    colorize: true
});
logger.level = 'debug';
var client = new Discord.Client({
   token: auth.token,
   autorun: true
});
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
         }
     }
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        args = args.splice(1);
        switch(cmd) {
            case 'whatareyou?':
                bot.sendMessage({
                    to: channelID,
                    message: 'I Am a Bot, Made For Dashs Discord Server'
                })
            break;
         }
     }
});
bot.on('message', function (user, userID, channelID, message, evt) {

    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {

            case 'whoisyourcreator?':
                bot.sendMessage({
                    to: channelID,
                    message: 'My Creator is CutThroat'
                });
            break;
         }
     }
});
bot.on('message', function (user, userID, channelID, message, evt) {

    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {

            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: '```Here Are My Commands: \nInfo and Help Commands: \n !help \n !whatareyou? \n !whoisyourcreator? \n !ping \n !whatdoesyournamestandfor? \n !dashslinks \n !updateinfo \nArt Commands: \n !refsheet \nSecret Commands: \nThese are secret i wont tell you what they do or how to do them ```'
                });
            break;
         }
     } 
});
bot.on('message', function (user, userID, channelID, message, evt) {

    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {

            case 'whatdoesyournamestandfor?':
                bot.sendMessage({
                    to: channelID,
                    message: 'My Name Stands For Dashys Little Discord Bot'
                });
            break;
         }
     } 
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '<') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case '@468150371995353089>':
                bot.sendMessage({
                    to: channelID,
                    message: 'DONT @ ME!!! \nbut if you need help type !help'
                });
            break;
         }
     }
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'apt-get_moo':
                bot.sendMessage({
                    to: channelID,
                    message: '```         (__)  \n         (oo)  \n   /------\\/   \n  / |    ||    \n *  /\\---/\\    \n    ~~   ~~    \n ...."Have you mooed today?"...  ```'
                });
            break;
         }
     }
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'dashslinks':
                bot.sendMessage({
                    to: channelID,
                    message: 'Dashs Youtube Channel:{YT Link Here} \nDashs DA:{DA Link Here}'
                });
            break;
         }
     }
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'updateinfo':
                bot.sendMessage({
                    to: channelID,
                    message: 'i have been updated with the command'
                });
            break;
         }
     }
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'refsheet':
                bot.sendMessage({
                    to: channelID,
                    message: 'Which of Dashs OCs Would you like a refsheet for \n henna \n colten \n alex \n sona \n (example of command !refsheet_sona)'
                });
            break;
         }
     }
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'refsheet_sona':
                bot.sendMessage({
                    to: channelID,
                    message: '{link to refsheet here}'
                });
            break;
         }
     }
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'refsheet_alex':
                bot.sendMessage({
                    to: channelID,
                    message: '{link to refsheet here}'
                });
            break;
         }
     }
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'refsheet_colten':
                bot.sendMessage({
                    to: channelID,
                    message: '{link to refsheet here}'
                });
            break;
         }
     }
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'refsheet_henna':
                bot.sendMessage({
                    to: channelID,
                    message: '{link to refsheet here}'
                });
            break;
         }
     }
});
