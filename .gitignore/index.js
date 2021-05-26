const Discord = require('discord.js');
const bot = new Discord.Client();

//instance
bot.on('ready', function () {
	bot.user.setGame('!help').catch(console.error);
})


bot.login('ODQ3MTA3MzE4Mzk4MDU4NTA3.YK5QKw.zwLKc5bzCNKRrZCU6zca8WVWfzU')
