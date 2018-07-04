const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    else if(message.content === '!planning'){
        message.reply('@everyone, Voici le planning de cette semaine: ', {files: ["http://www.versustv.ch/wp-content/uploads/2018/07/planning27.png"]});
    }
    else if(message.content === '!cmd'){
        message.replay('les commandes possible sont:\n - !planning : pour connaitre le planning de la semaine\n - !rs : pour connaitre tous les réseaux sociaux de l''asscociation Versus\n - !cmd : Pour afficher le guide des commandes disponible sur le serveur Versus');   
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
