const Discord = require('discord.js');
const client = new Discord.Client();
const {token, prefix} = require ("./config.json")


async function presence(){
client.user.setPresence({
status: "online",
  activity: {
    name: "https://tracmarty.ml",
    type: "WATCHING"
  }
})
}

client.on('ready', () => {
  console.log(`Estoy logueado como ${client.user.tag}`);
  presence();
});



client.on("message", async (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix)) return;
  if (!message.guild) return;

 const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
if (message.content.startsWith(prefix + 'say')) {
let r = args.join(" ");
if(!r) return message.channel.send("Dime lo que quieres que yo diga");

message.channel.send(r);
  
}


if (message.content.startsWith(prefix + 'help')) {
const embed = new Discord.MessageEmbed()
.setTitle("Comandos del bot")
.setDescription("Esto es un ejemplo de guía (discord.js)")
.setColor("RANDOM")
.setThumbnail("link del gif")
.setFooter("Comando ejecutado por: " + message.member.displayName, message.author.displayAvatarURL())
.setTimestamp();
  message.channel.send(embed);
  console.log('Embed enviado correctamente')
}
  
   
  
});











client.login(token);
