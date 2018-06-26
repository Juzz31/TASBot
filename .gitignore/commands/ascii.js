const Discord = require("discord.js");
const ascii = require("ascii-art");

module.exports.run = async (bot, message, args) => {

  if(message.member.roles.find("name", "Meilleurs vendeur | VIP")) {

    ascii.font(args.join(' '), 'Doom', function(rendered) {

      rendered = rendered.trimRight();

      if (rendered.lenght > 2000) return message.channel.send("Ce message est trop long !");

      message.channel.send(rendered, {

        code : 'md'

      });

    });

  } else {
    message.channel.send(`<@${message.author.id}> vous n'avez pas accès à cette commande, achetez un VIP au shop !`);
    return;
  }

}

module.exports.help = {
  name: "ascii"
}
