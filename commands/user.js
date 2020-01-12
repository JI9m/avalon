const Discord = require("discord.js");
const ms = require("ms");
const moment = require("moment");
const strftime = require('strftime')


const { RichEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]))
    let argsUser
    if (member) argsUser = member.user
    else argsUser = message.author

    let statuses = {
        online: 'В сети',
        idle: 'Отошёл',
        dnd: 'Не беспокоить',
        offline: 'Не в сети'
    }

    let game
    if (!argsUser.presence.game) game = `${statuses[argsUser.presence.status]}⠀\n `
    else if (argsUser.presence.game.type == 0) game = `Играет в **${argsUser.presence.game.name}**⠀\n `
    else if (argsUser.presence.game.type == 1) game = `Стримит [**${argsUser.presence.game.name}**](${argsUser.presence.game.url}⠀\n )`
    else if (argsUser.presence.game.type == 2) game = `Слушает **${argsUser.presence.game.name}**⠀\n `
    else if (argsUser.presence.game.type == 3) game = `Cмотрит **${argsUser.presence.game.name}**⠀\n `


    let day = 1000 * 60 * 60 * 24
    let date1 = new Date(message.createdTimestamp)
    let date2 = new Date(argsUser.createdTimestamp)
    let date3 = new Date(message.guild.member(argsUser).joinedTimestamp)
    let diff1 = Math.round(Math.abs((date1.getTime() - date2.getTime()) / day))
    let diff2 = Math.round(Math.abs((date1.getTime() - date3.getTime()) / day))
    
    
    moment.locale('ru');
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])) || message.author
    message.channel.send(new RichEmbed()
    .setDescription("Информация об участнике.")
    .setAuthor(rUser.user.tag,rUser.user.displayAvatarURL)
    .setColor('#cc0000')
    .addField("Discord имя:", rUser.user.tag, true)
    .addField("Имя в канале:", message.guild.member(rUser).nickname ? message.guild.member(rUser).nickname : "Отсутствует.",true)
    .addField("Статус:", game)
    .addField('Дата регистрации в Discord:', `${strftime('%d.%m.%Y в %H:%M', new Date(argsUser.createdTimestamp))}\n(${diff1} дней назад)⠀\n `, true)
    .addField('Присоединился к серверу:', `${strftime('%d.%m.%Y в %H:%M', new Date(message.guild.member(argsUser).joinedTimestamp))}\n(${diff2} дней назад)⠀\n `, true)
    .addField('Роли:', message.guild.member(argsUser).roles.filter(r => r.id != message.guild.id).map(r => `${r}`).join('\n') || 'Роли отсутствуют')
    .setThumbnail(rUser.user.displayAvatarURL)
    )
};
module.exports.help = {name: "user"}