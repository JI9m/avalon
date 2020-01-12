const Discord = module.require("discord.js");


module.exports.run = async (bot, message, args) => {
 
let embed = new Discord.RichEmbed()
    .setColor("#cc0000")
    .addField("Сервера:", bot.guilds.map(x => `| **Название: ${x.name}** | \n| **ID: ${x.id}** | \n| **Участников: ${x.memberCount}** |\n`) )
    .setFooter(message.author.tag,message.author.avatarURL)
    .setTimestamp()
    message.channel.send(embed)

}

module.exports.help = {
    name: "serverlist",
    aliases: []
};