const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  let id = ['305804778892427264']
  if(id.indexOf(message.author.id) == -1 && !message.member.hasPermission(`BAN_MEMBERS`)) return message.channel.send('Я тебе не подчиняюсь!');//проверяем разрешения у автора сообщения как участника(в данном случае нужно право банить участников у роли). Если у него нет этого права - бот ответит что "сер, у вас прав нет"
    let toban = message.mentions.members.first()//объявляем того кого будем банить упомянув его
    if(!toban)return(message.reply("каво банить?"))//если не упомянут участник, то бот попросит упомянуть его
    let reason = args.splice(2).join(" ")//нашей причиной будет массив args(он же аргументы), элементы которого соединены пробелом начиная со второго

    let ban_embed = new Discord.RichEmbed()//объявляем наш embed, можно и без него, но с ним куда красивее
    .setTitle(`${message.author.tag} забанен ${toban.user.tag}`)//ставим ему заголовок с информацией о том кто и кого забанил
    .setDescription(`Причина : ${reason}`)//описанием будет причина
    .setColor("RANDOM")//делаем embed-у рандомный увет
    .setTimestamp()//ставим время, в которое отправили сообщение

    toban.ban(reason)//баним участника с нашей причиной(причина так же отобразаится в аудит-логах)
    message.channel.send(ban_embed)//и отправляем наш эмбед в канал где была использована наша команда
  }
    module.exports.help = {
        name: "___ban"
    }
    