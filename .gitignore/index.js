const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
let purple = botconfig.purple;
var prefix = botconfig.prefix;



fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("faire des achats --> !help ");

});

const ServerStats = {

  TotalUsersID: '459780626745262091',
  guildID: '459444722201657364'

};

bot.on("message", async message => {

  if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let msg = message.content.toUpperCase();
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);


  var suffix = message.content.split(' ').slice(1);

  if(message.content.startsWith("salut")) {

    message.reaction.emoji("👋");

  }

});


bot.on("guildMemberAdd", member => {

  if(member.guild.id !== serverStats.guildID) return;

  bot.channels.get(ServerStats.TotalUsersID).setName(`Membres Totaux : ${member.guild.memberCount}`);

});

bot.on("guildMemberRemove", member => {

  if(member.guild.id !== serverStats.guildID) return;

  bot.channels.get(ServerStats.TotalUsersID).setName(`Membres Totaux : ${member.guild.memberCount}`);
});






bot.login(process.env.TOKEN);
