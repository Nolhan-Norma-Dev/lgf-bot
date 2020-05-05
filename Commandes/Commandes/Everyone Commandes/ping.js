const Discord = require("discord.js");

exports.run = (client, message, args) => {

    let messageToBot = args.join('');
    message.delete().catch();
    
    let embed = new Discord. MessageEmbed()
    .setDescription(`**🏓 Pong ! ${client.ws.ping} ms**`)
    .setColor(" 0x007dc5 ") 
    message.channel.send(embed)  
};

module.exports.help = {
    name: "ping",
  };