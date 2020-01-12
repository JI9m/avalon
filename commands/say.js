const Discord = module.require("discord.js");
module.exports.run = async (bot, message, args) => {
  let id = ['305804778892427264']
  message.delete()
  if(id.indexOf(message.author.id) == -1 && !message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send('Я тебе не подчиняюсь!').then(msg => msg.delete(3000))

    let botmessage = args.join(" ");
    message.channel.send(botmessage);
    
};
module.exports.help = {
    name: "say",
    aliases: ["SAY", "Say"]
}