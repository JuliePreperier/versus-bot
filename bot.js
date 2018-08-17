const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log('I am ready!');
});

client.on('guildMemberAdd', member => {
    let role = message.guild.roles.get("464149068914884619");
    member.guild.channels.get('accueil').send('Bienvenue sur le serveur de Versus ' + member.displayName +' !');
    member.addRole(role);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
