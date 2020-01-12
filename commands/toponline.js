const Discord = require("discord.js");
const ms = require("ms");
var needle = require("needle");
var cheerio = require("cheerio");
module.exports.run = async (bot, message, args) => {
    //message.delete().catch();

url = "https://excalibur-craft.ru";
needle.get(url,function(err,res){
    try{
    if(err) throw(err);
    var $ = cheerio.load(res.body);
    let typaaa  = $(".time").text()
    //message.channel.send($(".time").text()
    .replace("МЕСТО", '')
    .replace("Пользователь", '')
    .replace("Время", '')
    //.replace("(часов)", '')
    .replace("Место", '')
    .replace("ТОП", '')
    .replace("ВРЕМЕНИ", '')
    //.replace(/\s+/g, ' '));
    .replace(/\s+/g, ' ')
    message.channel.send( new Discord.RichEmbed() 
.setColor('#cc0000')
.setTitle("Топ Времени")
.setURL('https://excalibur-craft.ru')
.setAuthor('Excalibur-Craft', 'https://i.imgur.com/ZguA8PG.png')
.setThumbnail('https://i.imgur.com/fFgpKjP.png')
.setDescription(`${typaaa.match(/\d+ \w+ \d+/g).map(e => { let es = e.split(' '); + es[0]; es[es.length - 3] += '.'; + es[0]; es[es.length - 2] += ' - '; + es[0]; es[es.length - 1] += ' часов'; + es[0]; es[es.length - 2] += '**'; es[es.length - 3] += '**'; return es.join(' ') }).join('\n')}\n`));
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
//.setTimestamp());
//.setFooter('Маленький текст', 'https://i.imgur.com/wSTFkRM.png'));
//.addField('Ссылка на проект',`[Excalibur-Craft](https://javascriptobfuscator.com/Javascript-Obfuscator.aspx)`));
//.setDescription(`${typaa.match(/\d+ \w+ \d+/g).map(e => { let es = e.split(' '); es[0] = '**' + es[0]; es[es.length - 4] += '**'; return es.join(' ') }).join(' \n ')}
//.map(e => { let es = e.split(' '); es[0] = '**' + es[0]; es[es.length - 4] += '**'; return es.join(' ') }).join(' \n ');
   //.match(/.+?\s\d+ \/ \d+/g)
 //.map(e => { let es = e.split(' '); es[0] = '**' + es[0]; es[es.length - 4] += '**'; return es.join(' ') }).join(' \n '));
    //console.log($(".top").text());
})};
module.exports.help = {
    name: "toponline"
}