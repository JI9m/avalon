const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let helpembed = new Discord.RichEmbed()
    .setDescription("Help меню")
    .addField("Общие команды", "!help\n !server\n !user\n !forum\n");

    message.channel.send(helpembed);
    if(message.member.hasPermission("MANAGE_MESSAGES")){
        let modembed = new Discord.RichEmbed()      
        .setColor("#cc0000")
        .addField("Команды бота", "**!del** число - удалить сообщения.\n **!new** @user - информация для новых участников.\n **!say** - сказать от лица бота.\n **!poll** сообщение - создать голосование.\n **!server** - информация о сервере.\n **!user @user** - информация о участнике.\n **!forum** - ссылки на клановый раздел.\n")

        try{
            await message.author.send(modembed);
            message.react(":thumbsup:")
        }catch(e){
            message.reply("У тебя закрыта личка, я не могу отправить тебе команды :frowning:");
            

        }
    }
}
module.exports.help = {
  name:"help"
}
