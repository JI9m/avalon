const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let id = ['305804778892427264']
    if(id.indexOf(message.author.id) == -1 && !message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send('Я тебе не подчиняюсь!').then(msg => msg.delete(3000))
    //if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Я тебе не подчиняюсь!')

    let msgid = args[0]

    if (!msgid) return message.channel.send('Нужен id сообщения.!')

    await message.channel.fetchMessage(msgid)
        .then(async msg => {
            if (!msg) return message.channel.send('Сообщение не найдено.')
            await msg.pin()
        }).catch(console.error)

}

module.exports.help = {
    name: 'lock'
}