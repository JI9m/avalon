const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
  moment.locale('ru');
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Информация о сервере.")
    .setColor("#cc0000")
    .setThumbnail(sicon)
    .addField("Название сервера:", message.guild.name)
    .addField("Дата создания:", `${moment.utc(message.guild.createdAt).format("Do MMM Y")}`)
    .addField('Регион', message.guild.region, true)
    .addField("Количество участников:", message.guild.memberCount)
    .addField('Ботов на сервере:', `${message.guild.members.filter(member => member.user.bot).size}`, true)
    .addField('Статус участников:', `В сети: ${message.guild.members.filter(o => o.presence.status === 'online').size}\n  Не в сети: ${message.guild.members.filter(off => off.presence.status === 'offline').size}\n Не беспокоить: ${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}`)
    message.channel.send(serverembed);
}

module.exports.help = {
  name:"server"
}

// .addField('Статус участников:', `В сети: ${message.guild.members.filter(o => o.presence.status === 'online').size}\n  Не в сети: ${message.guild.members.filter(off => off.presence.status === 'offline').size}\n Не беспокоить: ${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}\n  Не активны: ${message.guild.members.filter(i => i.presence.status === 'idle').size}`)
//.addField("Владелец:", message.guild.owner) Показать владельца сервера.
//.addField(" Ты присоединился к серверу:", `${moment.utc(message.guild.member.joinedAt).format("Do MMM Y")}`) Показывает, когда участник присоединился.