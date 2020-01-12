const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])) || message.author
    let embed = new Discord.RichEmbed()
    //.setDescription("Ссылки клана")
    .setColor('#cc0000')
    .setImage('https://i.imgur.com/TZZsrnE.png')
    message.channel.send(embed);
};

    module.exports.help = {
        name: "colorcode",
    }