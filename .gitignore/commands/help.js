const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let bicon = bot.user.displayAvatarURL;
let helpembed = new Discord.RichEmbed()
.setTitle("Help menu")
.setDescription("Bot by Juzz")
.setThumbnail(bicon)
.setColor("#00FF04")
.addField('8ball', "Ask a question to the bot, usage : !8ball [question]")
.addField('botinfo', "The information of the bot")
.addField('ping', "Ping of the bot")
.addField('report', "Report a user, usage : !report [user] [reason]")
.addField('serverinfo', "The information of the server");

message.channel.send(helpembed);

let modembed = new Discord.RichEmbed()
.setTitle("Moderator help menu")
.setDescription("it's necessary to create a #logs channel")
.setThumbnail(bicon)
.setColor("#FF0000")
.addField('ban', "Ban a user, usage : !ban [user] [reason]")
.addField('clear', "Clear message(s), usage : !clear [number]")
.addField('kick', "Kick a user, usage : !kick [user] [Reason]")
.addField('say', "make it talk the bot, usage : !say [message]")
.addField('tempmute', "mute a user temporarily, usage : !tempmute [user] [time 1 d/h/m/s] [reason]")
.addField('warn', "warn a user, usage : !warn [user] [reason]")
.addField('warnlevel', "find the warnings of a user , usage : !warnlevel [user]")
.addField('ascii', "Send a message with ascii art");


message.channel.send(modembed);

}

module.exports.help = {
  name: "help"
}
