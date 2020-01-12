const Discord = require("discord.js");
const ms = require("ms");
var needle = require("needle");
var cheerio = require("cheerio");
module.exports.run = async (bot, message, args) => {
    

url = "https://excalibur-craft.ru";
needle.get(url,function(err,res){
    try{
    if(err) throw(err);
    var $ = cheerio.load(res.body);
    let typaaaa  = $(".quest").text()
    .replace("МЕСТО", '')
    .replace("Пользователь", '')
    .replace(/\s+/g, ' ')
    message.channel.send( new Discord.RichEmbed() 
.setColor('#cc0000')
.setTitle("Топ по голосам")
.setURL('https://excalibur-craft.ru')
.setAuthor('Excalibur-Craft', 'https://imgur.com/ZguA8PG.png')
.setThumbnail('https://i.imgur.com/NoX56rI.png')
.setDescription(`${typaaaa.match(/\d \w+ /g).map(e => { let es = e.split(' '); es[es.length - 3] += '.'; es[es.length - 3] += '**'; es[es.length - 2] += '**'; return es.join(' ') }).join('\n')}\n`));
}catch(err){
    message.channel.send( new Discord.RichEmbed() 
    .setColor('#cc0000')
    .setAuthor(message.author.tag,message.author.avatarURL)
    .setTitle("**Ошибка!**")
    //.setDescription("Команда временно не доступна!", "**Anti-DDoS Excalibur-Craft!**")
    .addField("Команда временно не доступна!", "Anti-DDoS Excalibur-Craft!")
    .setThumbnail('https://static.tildacdn.com/tild3731-6636-4839-a336-313264376430/Dialog-error-roundsv.png') 
    //message.channel.send("Команда временно не доступна! Anti-DDoS Excalibur-Craft!")}
    )}
    //message.channel.send("Команда временно не доступна! Anti-DDoS Excalibur-Craft!")} 

//.setDescription(`${typaaaa.match(/\d*\w+ \d+/g).map(e => { let es = e.split(' '); es[es.length - 3] += '.'; es[es.length - 3] += '**'; es[es.length - 2] += '**'; return es.join(' ') }).join('\n')}\n`));
   // .map(e => { let es = e.split(' '); + es[0]; es[es.length - 3] += '.'; + es[0]; + es[0];  + es[0]; es[es.length - 2] += '**'; es[es.length - 3] += '**'; return es.join(' ') }).join('\n')}`
})};
module.exports.help = {
    name: "topvote"
}
