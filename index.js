const token = process.env.cdb;

const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

client.once('ready', ()=> {
	console.log('The Secret Intuder has arrived - hi');
});

client.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === 'keeg'){
		message.channel.send('Anyone tryna do some molly?');
	}

	if(command === 'alex'){
		message.channel.send('*Alex thinking to himself*.. WWDD : What would David do?');
	}

	if(command === 'lebron'){
		message.channel.send('Hes hit for 10 damage!');
	}


	if(command === 'sam'){
		message.channel.send('Sam, the greatest dota player to ever walk the face of the earth ALSO the greatest league of legends player ALSO the best CS:GO player ALSO the best WOW player ALSO.... YOU GET THE POINT HES A GOD... SHIT!!!');
	}
});

client.login(token);
