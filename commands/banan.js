const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    let id = ['305804778892427264']
    if(id.indexOf(message.author.id) == -1 && !message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send('Бык?');
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])) || message.author
    message.channel.send(`<@${rUser.id}> **Has been bananed!**`)

};
module.exports.help = {
    name: "banan"
}
