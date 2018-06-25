const Discord = require("discord.js");
const economy = require("discord-eco");

module.exports.run = async (bot, message, args) => {

  economy.fetchBalance(message.author.id).then((i) => {

    const membed = new Discord.RichEmbed()
    .setTitle(`Banque ${message.guild.name}`)
    .setColor(0xD4AF37)
    .addField('Compte de :', message.author.username, true)
    .addField('Solde du compte :', i.money, true);

    message.channel.send(membed);

  })

}

module.exports.help = {
  name: "money"
}
