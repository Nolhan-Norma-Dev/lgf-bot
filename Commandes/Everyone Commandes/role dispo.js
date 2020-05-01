const Discord = require("discord.js");

exports.run = (client, message, args) => {

    let messageToBot = args.join('');
    message.delete().catch();
    
    let embed = new Discord. MessageEmbed()
    .setTitle(`Rôle Disponible`)
    .setDescription(`Voici les rôles que vous pouvez demmandez :\n\n`)
    .addField(`Responsable :`, `<@&681592235267325982>`)
    .addField(`Modération et développement :`, `<@&681552632728387634>,\n<@&681592239620751419>`)
    .addField(`Autres :`, `<@&682204395559059501>,`)
    .addField(`Aussi dans les channels :`,`<#681894510439039010>,\n<#682383585830895837>,\n<#704334092342394932>`)
    .setColor(" 0x007dc5 ") 
    message.channel.send(embed)  
};

module.exports.help = {
    name: "role-dispo",
  };