const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let messageToBot = args.join('');
    message.delete().catch();

  if (!message.member.hasPermission('MANAGE_MESSAGES'))
    return message.channel.send("**[Erreur]**, Cette commande est réservée au Staff !");

    let array_of_arguments = args.join(" ").split(";");

let embed = new Discord.MessageEmbed()
  .setAuthor(`De : ${message.author.username}`, message.author.avatarURL())
  .setTitle(array_of_arguments[0])
  .setDescription(array_of_arguments[1])
  .addField(array_of_arguments[2], array_of_arguments[3])
  .setColor("0x007dc5")
  .setFooter(`© 2020 : Bot et message créé par l'agriculteur normand | Tous droits réservés.`, `https://zupimages.net/up/20/13/omgq.png`);

message.channel.send(embed);
};

module.exports.help = {
    name: 'changelog'
};