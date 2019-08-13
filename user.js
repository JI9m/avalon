const Discord = require("discord.js");
const ms = require("ms");
const moment = require("moment");


const { RichEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
    moment.locale('ru');
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])) || message.author
    message.channel.send(
    new RichEmbed()
    .setDescription("Информация об участнике.")
    .setColor('#cc0000')
    .addField("Discord имя:", rUser.user.tag)
    .addField("Имя в канале:", message.guild.member(rUser).nickname ? message.guild.member(rUser).nickname : "Отсутствует.", true)
    .addField("Статус:", rUser.presence.status, true)
    .addField("Присоединился к серверу:", `${moment.utc(message.guild.member(rUser).joinedAt).format("Do MMM Y")}`)
    .addField("Роли:", message.guild.member(rUser).roles.map(s => s).join("\n")  )
    //.addField("Присоединился к серверу",message.guild.joinedAt)
    .setThumbnail(rUser.user.displayAvatarURL)
    )
};
module.exports.help = {name: "user"}

/*const Discord = require('discord.js');
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    
    let user = message.mentions.users.first() || message.author
    let userAvatar = user.displayAvatarURL
  
    let userEmbed = new RichEmbed()
            .setColor('#00000')
            .setAuthor(`${user.tag}'s Info`, userAvatar)
            .setFooter(`User ID: ${user.id}`)
            .addField("Discord Name:", `${user.username}#${user.discriminator}`, true)
            .addField("Nickname:", message.guild.member(user).nickname ? message.guild.member(user).nickname : "none", true)
            .addField("Status:", user.presence.status, true)
            .addField("Game:", `${user.presence.game ? user.presence.game.name: 'n/a'}`, true)
            .addField("Joined Server On:", `${moment.utc(message.guild.member(user).joinedAt).format("dddd, MMMM Do YYYY")}`)
            .addField("Registered On:", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`)
            .addField("Roles:", message.guild.member(user).roles.map(s => s).join(" • ")  )
            .setThumbnail(userAvatar)

        return message.channel.send(userEmbed)
            .then(message => console.log('message sent!'))
            .catch(console.error)
};
module.exports.help = {
    name: "user"
}
*/
