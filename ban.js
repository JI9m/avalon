const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
      
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Я тебе не подчиняюсь!");
    let rUser = bot.rUser;
    if(!args[0]) return bot.send("Укажи пользователя");
    if(!rUser) return bot.send("Не знаю таких...");
    let embed = new Discord.RichEmbed()
    .setDescription("Бан")
    .setColor('#ff0000')
    .addField("Великий",message.author.username)
    .addField("Забанил",`${rUser.user.username}`);
    
    message.guild.member(rUser).ban("Бан");
    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "ban"
};
