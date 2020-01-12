const Discord = module.require("discord.js");

module.exports.run = async (bot,message,args) => {
    message.delete()
    let id = ['305804778892427264']
  message.delete()
  if(id.indexOf(message.author.id) == -1 && !message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send('Я тебе не подчиняюсь!').then(msg => msg.delete(3000))
 let prefix = ["!"]
    const CustomArgs = message.content.slice(prefix.length + 5 + 1).split("; ")
  let chnl = bot.channels.find(c => c.id === CustomArgs[0])
  if(!chnl) return bot.send("Не правильный айди канала")
  if(!CustomArgs[0] | !CustomArgs[1]) return bot.send("Ошибка: используйте команду **!saying <CHANNELID>; <Сообщение>**")
   chnl.send(CustomArgs[1])

}
module.exports.help = {
    name: "sayin",
    aliases: []
};