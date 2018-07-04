const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    var cmd = 'Voici les différentes commandes possibles sur le serveur Discord:';
    
    if (message.content === 'ping'){
        message.reply('pong');
    }
    if (message.content === '!planning') {
    	message.reply('Voici le planning de cette semaine : ', {files: ["http://www.versustv.ch/wp-content/uploads/2018/07/planning27.png"]});
  	}
    if (message.content === '!rs'){
        message.reply('Notre page Facebook : https://www.facebook.com/CHVersusTV/');
        message.reply('Notre page Twitter : https://www.twitter.com/versustv1');
        message.reply('Notre page Instagram : https://www.instagram.com/versus.tv/');
        message.reply('Notre page Twitch : https://www.twitch.tv/tvversus');
    }
    if (message.content === '!cmd'){
        message.reply(cmd);   
    }
    
});

client.on('guildMemberAdd', member => {
    let role = member.guild.roles.find("name", "Les Gens");
    member.guild.channels.find("name","général").send('Bienvenue sur le serveur de Versus ' + member.displayName +' !');
    member.addRole(role);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
