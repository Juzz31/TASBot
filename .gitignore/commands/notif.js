const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let notifrole = message.guild.roles.find(`name`, "Notifs | BASICS");

  message.member.addRole(notifrole);

  message.channel.send(`Vous serez dès à présent notifié dès qu'il y aura une mise a jour du serveur !`);

}

module.exports.help = {
  name: "notif"
}
