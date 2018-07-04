const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!planning') {
    	message.reply('Voici le planning de cette semaine: ', {files: ["http://www.versustv.ch/wp-content/uploads/2018/07/planning27.png"]});
  	}
    if (message.content === '!rs'){
        message.reply('Notre page Facebook : https://www.facebook.com/CHVersusTV/');
        message.reply('Notre page Twitter : https://www.twitter.com/versustv1');
        message.reply('Notre page Instagram : https://www.instagram.com/versus.tv/');
        message.reply('Notre page Twitch : https://www.twitch.tv/tvversus');
        message.reply('Notre page web : https://www.versustv.ch/');
    }
});

client.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send('Bienvenue sur le serveur de Versus ' + member.displayName+' !')
  }).catch(console.error)
  message.send('Erreur !!');
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
