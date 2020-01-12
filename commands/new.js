const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])) || message.author
    message.delete()
    let embed = new Discord.RichEmbed()
    //.setDescription("Информация для новых участников")
    .setColor('#cc0000')
    .addField(`ᅠᅠᅠᅠᅠᅠᅠᅠ:star: Добро пожаловать! :star:`, `<@${rUser.id}>, приветствуем тебя в нашем дружелюбном клане.`, true)
    .addField("Cсылка на клан", "https://excalibur-craft.ru/index.php?do=clans&go=profile&id=5")
    .addField("Ссылка на наше сообщество", "https://forum.excalibur-craft.ru/clubs/11-avalon/")
    .addField("Отписаться в присяге по шаблону", "http://forum.excalibur-craft.ru/topic/89273-подтверждение-ознакомления-с-правилами/")
    .addField("Добавить в друзья Главу клана и офицеров","Лара <@260172262618038273>\n Ярик <@291968231361609729>\n Артём <@532620652348440578>\n Вадим <@305804778892427264>")
    .addField("Вносить голоса в клан.", "ᅠ ")
    .addField ("Познакомиться с клановыми темами и правилами проекта", "https://forum.excalibur-craft.ru/topic/119726-иерархия-клана/\n https://forum.excalibur-craft.ru/topic/119213-устав-клана/\n https://forum.excalibur-craft.ru/topic/119781-легенда-avalon/\n https://excalibur-craft.ru/rules.html")
    .addField ("Правила поведения в конференции", "1. Мат допустим в разумных пределах.\n 2. Не удалять сообщения.\n 3. Не флудить и писать предложения с большой буквы.")
    //.setThumbnail('https://excalibur-craft.ru/clans/logo/5.png')

    message.channel.send(embed);

};
module.exports.help = {
    name: "new"
}
