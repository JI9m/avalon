const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
//Welcome
bot.on('guildMemberAdd', member => { 
    var channel = member.guild.channels.get("574607558333956107")
    channel.send(`Добро пожаловать на сервер, ${member}!`)
})
//Goobye
bot.on('guildMemberRemove', member => {
    var channel = member.guild.channels.get("574607558333956107")
    channel.send(`${member}, Покинул нас`);
  });
};

module.exports.help = {
    name: "welcome"
};
