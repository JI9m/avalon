const Discord = require('discord.js')

exports.run = (bot, message) => {
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
  if (!emojiList) return message.reply("нет смайликов")
message.channel.send(new Discord.RichEmbed()
.setColor(`#cc0000`)
.setTitle("Avalon Emoji\n")
.setDescription(`${emojiList}`))
}
module.exports.help = { name: "emoji" }