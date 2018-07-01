const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

let purple = botconfig.purple;
var prefix = botconfig.prefix

const size    = botconfig.colors;
const rainbow = new Array(size);




for (var i=0; i<size; i++) {
  var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
  var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
  var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg

  rainbow[i] = '#'+ red + green + blue;
}

function sin_to_hex(i, phase) {
  var sin = Math.sin(Math.PI / size * 2 * i + phase);
  var int = Math.floor(sin * 127) + 128;
  var hex = int.toString(16);

  return hex.length === 1 ? '0'+hex : hex;
}

let place = 0;
const servers = botconfig.servers;

function changeColor() {
  for (let index = 0; index < servers.length; ++index) {
    bot.guilds.get(servers[index]).roles.find('name', botconfig.roleName).setColor(rainbow[place])
		.catch(console.error);

     if(config.logging){
      	   console.log(`[ColorChanger] Changed color to ${rainbow[place]} in server: ${servers[index]}`);
    	}
	  
    if(place == (size - 1)){
      place = 0;
    }else{
      place++;
    }
  }
}


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

const serverStats = {

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

  bot.channels.get(serverStats.TotalUsersID).setName(`Membres Totaux : ${member.guild.memberCount}`);


  let nmembed = new Discord.RichEmbed()
  .setTitle("Nouveau Membre !")
  .addField('Pseudo :', member.user.tag)
  .addField("Heure d'arrivée :", member.joinedAt)
  .addField("Nous sommes maintenant :", member.guild.memberCount);

  member.guild.channels.get('459456127801884682').send(nmembed);

  let nmlembed = new Discord.RichEmbed()
  .setTitle("Nouveau Membre")
  .addField('Pseudo :', member.user.tag)
  .addField('ID :', member.id);

  member.guild.channels.get('459714014595776522').send(nmlembed);


});

bot.on("guildMemberRemove", member => {

  if(member.guild.id !== serverStats.guildID) return;

  bot.channels.get(serverStats.TotalUsersID).setName(`Membres Totaux : ${member.guild.memberCount}`);

  let dmembed = new Discord.RichEmbed()
  .setTitle("Quelqu'un a quitté")
  .addField('Pseudo :', member.user.username)
  .addField('ID :', member.id);

  member.guild.channels.get('459714014595776522').send(dmembed);
});







bot.login(process.env.TOKEN);
