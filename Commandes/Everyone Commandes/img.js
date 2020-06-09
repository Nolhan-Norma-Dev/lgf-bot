const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let messageToBot = args.join('');
    message.delete().catch();

    let array_of_arguments = args.join(" ").split(";");

    if (!args[0]) return message.channel.send("Syntaxe : Pour add une iamge, +img lien de l'image (optionnel)`**");

let embed1 = new Discord.MessageEmbed()
  .setImage(array_of_arguments[0])
  .setColor(array_of_arguments[1])
  .setFooter(`© 2020 : Bot et message créé par l'agriculteur normand | Tous droits réservés.`, `https://zupimages.net/up/20/13/omgq.png`);
  message.channel.send(embed1);
  console.log(array_of_arguments[0]);
};

  module.exports.help = {
    name: 'img'
}