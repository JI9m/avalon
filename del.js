const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let id = ['305804778892427264', '247029882519945218']
  if(id.indexOf(message.author.id) == -1 && !message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send('Я тебе не подчиняюсь!');
  //if(id.indexOf(message.author.id) == -1 && !message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send('Я тебе не подчиняюсь!').then(msg => msg.delete(3000))
  //if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Я тебе не подчиняюсь!");
  if(args[0]>100) return message.channel.send("Я не могу удалить больше ста сообщений.");
  if(!args[0]) return message.channel.send("Ну и сколько мне удалять?");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Удалено ${args[0]} сообщений.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "del"
}
