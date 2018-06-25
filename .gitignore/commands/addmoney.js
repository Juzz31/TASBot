const Discord = require("discord.js");
const economy = require("discord-eco");
const admRole = 'Administrator';
const botconfig = require("../botconfig.json");
var prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {

  let cont = message.content.slice(prefix.lenght).split(" ");

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`** à fait une tentative de vol ! Arrêtez le !**`);
  if (!args[0]) {
    message.channel.send(`**Vous devez définir un montant ! --> ${prefix}addmoney [montant] [cible] **`);
    return;
  }

  if (!args[1]) {
    message.channel.send("**Vous devez définir une cible !**");
    return;
  }

  if (isNaN(args[0])) {
    message.channel.send("**Votre montant doit être un chiffre");
    return;
  }

  let defineduser = '';
        if (!args[1]) {
            defineduser = message.author.id;
        } else {
            let firstMentioned = message.mentions.users.first();
            defineduser = firstMentioned.id;
        }

  economy.updateBalance(defineduser, args[0]).then((i) => {

    let firstMentioned = message.mentions.users.first();
    message.channel.send(firstMentioned + ` **a reçu ${args[0]} sur son compte en banque**`)

  });

}

module.exports.help = {
  name: "addmoney"
}
