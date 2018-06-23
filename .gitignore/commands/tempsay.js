const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

const sayMessage = args.join(" ");

let sayembed = new Discord.RichEmbed()
.setTitle(`${message.author.tag} has defined tempsay`)
.addField('to say', sayMessage)
.addField('time', saytime);


  if(!sayMessage) return message.reply("there is'nt message to say")
  let saytime = args[1];
  if(!saytime) return message.reply("You didn't specify a time!");

  await(message.channel.send(sayMessage));
  message.reply()

}

module.exports.help = {
  name: "tempsay"
}
