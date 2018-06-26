const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let bicon = bot.user.displayAvatarURL;
let helpembed = new Discord.RichEmbed()
.setTitle("Help menu")
.setDescription("Bot by Juzz")
.setThumbnail(bicon)
.setColor("#00FF04")
.addField('8ball', "poser une question au bot, utilisation : !8ball [question]")
.addField('botinfo', "Les informations du bot")
.addField('ping', "Le ping du Bot")
.addField('report', "Signaler un utilisateur, utilisation : !report [utilisateur] [raison]")
.addField('serverinfo', "Les infos du serveur")
.addField('notif', "Recevez les notifications relatives aux nouveautés du serveur");

message.channel.send(helpembed);

let modembed = new Discord.RichEmbed()
.setTitle("Moderator help menu")
.setDescription("il est nécessaire de créer un channel #logs")
.setThumbnail(bicon)
.setColor("#FF0000")
.addField('ban', "Bannir un utilisateur, utilisation : !ban [utilisateur] [raison]")
.addField('clear', "Clear des message(s), utilisation : !clear [number]")
.addField('kick', "Kicker un utilisateur, utilisation : !kick [user] [Reason]")
.addField('say', "Faire parler le bot, utilisation : !say [message]")
.addField('tempmute', "mute un utilisateur temporellement, utilisation : !tempmute [utilisateur] [temps 1 d/h/m/s] [raison]")
.addField('warn', "warn un utilisateur, utilisation : !warn [utilisateur] [raison]")
.addField('warnlevel', "Trouver les warns d'un utilisateur , utilisation : !warnlevel [utilisateur]")
.addField('ascii', "Envoyer un message sous forme d'ascii");


message.channel.send(modembed);

}

module.exports.help = {
  name: "help"
}
