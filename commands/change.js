const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    let id = ['305804778892427264']
    message.delete()
    if(id.indexOf(message.author.id) == -1 && !message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send('Я тебе не подчиняюсь!').then(msg => msg.delete(3000))
    let msgid = args[0]
    let content = args.slice(1).join(' ')
    if (!msgid || !content) return message.channel.send('Мне нужен id и текст.')

    await message.channel.fetchMessage(msgid)
        .then(async msg => {
            if (!msg) return message.channel.send('Сообщение не найдено.')
            await msg.edit(content)
        }).catch(console.error)
}

module.exports.help = {
    name: 'change'
}
/*let id = ['305804778892427264','247029882519945218']
message.delete()
if(id.indexOf(message.author.id) == -1 && !message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send('Я тебе не подчиняюсь!').then(msg => msg.delete(3000))*/

//message.delete()
  //  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Я тебе не подчиняюсь!')