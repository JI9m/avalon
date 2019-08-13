const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
  //voice счётчик
bot.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel;
    let oldUserChannel = oldMember.voiceChannel;
    let voicetext = `🔊 Голосовой онлайн: `
    let ch = bot.channels.get("608402060320309272");
    if(newUserChannel && !oldUserChannel){
        ch.setName(`${voicetext}${newMember.guild.members.filter(m => m.voiceChannel).size}`);
    };
    if(!newUserChannel && oldUserChannel){
        ch.setName(`${voicetext}${newMember.guild.members.filter(m => m.voiceChannel).size}`);
    };
})
//Время 
const { findTimeZone, getZonedTime } = require('timezone-support');
const russia = findTimeZone("Europe/Moscow");
  setInterval(function(){
    const nativeDate = new Date()
    const russiatime = getZonedTime(nativeDate, russia)
    let hours = russiatime.hours
    let minutes = russiatime.minutes
    if(hours < 10){
      hours = `0${hours}`;
    }
    if(minutes < 10){
      minutes = `0${minutes}`;
    }
    bot.channels.get("608402029995360258").setName(`🕐 Время МСК: ${hours}:${minutes}`)
    
  }, 5000);
};
module.exports.help = {
    name: "stats"
};
