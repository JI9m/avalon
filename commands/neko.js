const Discord = module.require("discord.js");
const superagent = require("superagent");


module.exports.run = async (client, message, args) => {
    message.delete()
    let {body} = await superagent
        .get("https://neko-love.xyz/api/v1/neko");

    let embed = new Discord.RichEmbed()
        .setTitle("Anime")
        .setImage(body.url)
        .setColor("#cc0000");
    message.channel.send(embed);
}
    module.exports.help = {
        name: "anime"
    }