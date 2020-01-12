const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  let id = ['305804778892427264']
  if(id.indexOf(message.author.id) == -1 && !message.member.hasPermission(`ADMINISTATOR`)) return message.channel.send('Я тебе не подчиняюсь!');
        let tokick = message.mentions.members.first()//объявляем того кого будем кикать
        if(!tokick)return(message.reply("Каво кикнуть то?"))//просим упомянуть если вдруг этого не сделано
        let reason = args.splice(2).join("")//причина
    
        let embed = new Discord.RichEmbed()//объявляем наш эмбед
        .setTitle(`${message.author.tag} кикнут ${tokick.user.tag}`)//заголовок с информацией(кто кикнул и кого)
        .setDescription(`Причина: ${reason}`)//причина
        .setColor("RANDOM")//ставим рандомный цвет
        .setTimestamp()//время
    
        tokick.kick()//кикаем
        message.channel.send(embed)//и отправляем в канал где была отправлена команда
      }
    module.exports.help = {
        name: "kick"
    }
    