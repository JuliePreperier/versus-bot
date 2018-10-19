const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping'){
        message.reply('pong');
    }
    else if (message.content === '!planning') {
    	message.reply('Voici le planning de cette semaine : ', {files: ["https://www.versustv.ch/wp-content/uploads/2018/10/planning42.png"]});
  	}
    else if (message.content === '!rs'){
        message.reply('Notre page Facebook : https://www.facebook.com/CHVersusTV/');
        message.reply('Notre page Twitter : https://www.twitter.com/versustv1');
        message.reply('Notre page Instagram : https://www.instagram.com/versus.tv/');
        message.reply('Notre page Twitch : https://www.twitch.tv/tvversus');
    }
});

client.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'Les Gens');
   
    member.addRole(role);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
