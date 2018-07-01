const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
    if(!args[0]) {
      message.channel.send("**N'oubliez pas votre candidature !**");
      return;
    }

  const candidMessage = args.join(" ");

  const mdembed = new Discord.RichEmbed()
  .setTitle("Candidature")
  .addField("auteur :", message.author.tag)
  .addField('Candidature :', candidMessage);

  message.guild.channels.find('name', "👮-débat-candid").send(mdembed)
    .then((newMessage) => {
      newMessage.react("👍");
      newMessage.react("👎");
      newMessage.pin()
  });

}

module.exports.help = {
  name: "mod"
}
