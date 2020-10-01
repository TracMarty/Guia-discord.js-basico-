const Discord = require('discord.js');
const client = new Discord.Client();
const {token, prefix} = require ("./config.json")

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on("message", message =>{
if(message.content.startsWith(prefix + 'help')){
const embed = new Discord.MessageEmbed()
.setTitle("Comandos del bot")
.setDescription("Esto es un ejemplo de guía (discord.js)")
.setColor("RANDOM")
.setThumbnail("link del gif")
.setFooter("Comando ejecutado por: " + message.member.displayName, message.author.displayAvatarURL())
.setTimestamp();
}
});

///////////////////un ejemplo de un embed para tu bot:)







client.login('acá va tu token');
