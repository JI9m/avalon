const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const weather = require('weather-js');
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Не могу найти такую команду.");
    return;
  }
  jsfile.forEach((f,i)=>{
    let props = require(`./commands/${f}`);
    bot.commands.set(props.help.name,props);
  })
  });

bot.on("ready", async () => {
  console.log(`${bot.user.username} ready ${bot.guilds.size} servers!`);
  bot.user.setActivity("AVALON", {type: "WATCHING"});

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});


// Консоль чат.

let y = process.openStdin()
y.addListener("data", r => {
    let x = r.toString().trim().split(/ +/g)
        bot.channels.get("411924744087273477").send(x.join(" "));
    });
bot.login(botconfig.token);

let gm = [" Доброе утро, солнышко", " Хай, зябл", " Хай, бебибон", " Приветик, киса", " КТО?!", " Доброе утро!)", " КОМУ ТАМ БЛ НЕ СПИТСЯ?!", " Доброе утро, спящая красавица", " Доброе утро, AVALON!", "Проснулись - улыбнулись!)"]

bot.on("message", (message) => {
  var rand = Math.floor(Math.random() * gm.length);
  if(message.content === 'Доброе утро') {
    message.channel.send(`<@${message.author.id}>` + `${gm[rand]}`);
}
});

let nt = [" Спокойной ночи", " Споки", " Спокойной ночи, мой котик", "Сладких снов", " НУ И ВАЛИ!", " Сладких снов, пусть тебе приснится розовый слоник)", "ШО ШКIЛА ДА?", " И тебе, не забудь на завтра портфель собрать, шкiла", " Доброй ночи, AVALON!", "Спокойной ночки - сладкой дрочки"]

bot.on("message", (message) => {
  var rand = Math.floor(Math.random() * nt.length);
  if(message.content === 'Спокойной ночи') {
    message.channel.send(`<@${message.author.id}>` + `${nt[rand]}`);
}
});

  