const Discord = require("discord.js");
const util = require('util');
module.exports.run = (client, message,args) => { 
    const code = args.join(" ");
    evalCmd(message, code);
    function evalCmd(message, code) {
    if(message.author.id !== client.config.ownerid) return;
    try {
        let evaled = eval(code);
        if (typeof evaled !== "string")
            evaled = util.inspect(evaled);
            message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
}
function clean(text) {
    if (typeof(text) !== 'string') {
        text = util.inspect(text, { depth: 0 });
    }
    text = text
        .replace(/`/g, '`' + String.fromCharCode(8203))
        .replace(/@/g, '@' + String.fromCharCode(8203))
        .replace(client.token, 'mfa.VkO_2G4Qv3T--NO--lWetW_tjND--TOKEN--QFTm6YGtzq9PH--4U--tG0') //Don't let it post your token
    return text;
}
};
module.exports.help = {
    name: "eval",
    aliases: ["ebal","eval"],
    perms: 3,
    enable: true
};