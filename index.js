const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
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
y.addListener("data", res => {
  let x = res.toString().trim().split(/ +/g)
  bot.channels.get("443396701915447316").send(x.join(" "));
})
bot.login(botconfig.token);
