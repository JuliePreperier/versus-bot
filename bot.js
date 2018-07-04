const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
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
});

client.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send('Bienvenue sur mon serveur ' + member.displayName)
  }).catch(console.error)
  // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
