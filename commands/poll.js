const Discord = require('discord.js')

exports.run = async (bot, message, args) => { 
  let id = ['305804778892427264']
    message.delete()
    if(id.indexOf(message.author.id) == -1 && !message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send('Я тебе не подчиняюсь!').then(msg => msg.delete(3000))
  let botmessage = args.join(" ");
  //message.delete().catch();
    if (!args[0]) return message.reply(" а где вопрос?");
    if (!args) return message.reply("Тебе должны голосовать")
    const pollTopic = await message.channel.send(botmessage);
    pollTopic.react(`✅`);
    pollTopic.react(`⛔`);
};

exports.help = {
    name:"poll"

}