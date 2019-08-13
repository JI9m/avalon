const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])) || message.author
    
    let embed = new Discord.RichEmbed()
    .setDescription("Ссылки клана")
    .setColor('#cc0000')
    .addField("Клановый раздел", "https://forum.excalibur-craft.ru/forum/98-avalon/")
    .addField("Иерархия клана", "https://forum.excalibur-craft.ru/topic/119726-иерархия-клана/")
    .addField("Список участников клана", "https://forum.excalibur-craft.ru/topic/51909-список-участников-клана/")
    .addField("Деятельность клана","https://forum.excalibur-craft.ru/topic/110744-деятельность-клана/")
    .addField("Подтверждение ознакомления с правилами", "https://forum.excalibur-craft.ru/topic/89273-подтверждение-ознакомления-с-правилами/")
    .addField ("Устав клана", "https://forum.excalibur-craft.ru/topic/119213-устав-клана/")
    .addField ("Легенда клана Avalon", "https://forum.excalibur-craft.ru/topic/119781-легенда-avalon/")
    .addField("Правила проекта", "https://excalibur-craft.ru/rules.html")
    .setThumbnail(rUser.user)
    message.channel.send(embed);

};
module.exports.help = {
    name: "forum"
}
