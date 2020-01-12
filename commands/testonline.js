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
    let typa  = $(".total").text()
    .replace(/\s+/g, ' ')
    .match(/.+?\s\d+ \/ \d+/g)
  .map(e => { let es = e.split(' '); es[0] = '**' + es[0]; es[es.length - 4] += '**'; + es[0]; es[es.length - 4] += ':';  es[es.length - 1] += ' игроков.'; return es.join(' ') }).join(' \n ')
  let serv  = $(".right").text()
  .replace("СЕРВЕР", '')
  .replace("ИГРОКОВ", '')
  .replace("Mini-games", '')
  .replace("Classic 1.14", '')
  .replace("SandBox 1.7.10", '')
  .replace("Magic 1.7.10", '')
  .replace("TechnoMagic 1.7.10", '')
  .replace("Pixelmon 1.12.2", '')
  .replace("NewTechno 1.7.10", '')
  .replace("Survival 1.7.10", '')
  .replace("Survival 1.6.4", '')
  .replace("Magic 1.12.2", '')
  .replace(/\s+/g, ' ')
    .match(/.+?\s\d+ \/ \d+/g)
  .map(e => { let es = e.split(' '); es[0] = '**' + es[0]; es[es.length - 4] += '**'; + es[0]; es[es.length - 4] += ':'; es[es.length - 1] += ' игроков.'; return es.join(' ') }).join(' \n ');
message.channel.send( new Discord.RichEmbed() 
.setColor('#cc0000')
.setTitle("Онлайн серверов")
.setURL('https://excalibur-craft.ru')
.setAuthor('Excalibur-Craft', 'https://imgur.com/ZguA8PG.png')
.setThumbnail('https://i.imgur.com/ZguA8PG.png')
.addField(es[0], "Шо")

.setDescription(`${typa}\n\n${serv}`));
    //console.log($(".top").text());
}catch(err){
  message.channel.send( new Discord.RichEmbed() 
  .setColor('#cc0000')
  .setAuthor(message.author.tag,message.author.avatarURL)
  .setTitle("**Ошибка!**")
  .addField("Команда временно не доступна!", "Anti-DDoS Excalibur-Craft!")
  .setThumbnail('https://static.tildacdn.com/tild3731-6636-4839-a336-313264376430/Dialog-error-roundsv.png') 
  //message.channel.send("Команда временно не доступна! Anti-DDoS Excalibur-Craft!")}
  )}
  //message.channel.send("Команда временно не доступна! Anti-DDoS Excalibur-Craft!")} 

});
}
module.exports.help = {
    name: "test"
}