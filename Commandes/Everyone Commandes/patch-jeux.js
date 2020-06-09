const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let messageToBot = args.join('');
    message.delete().catch();

    let array_of_arguments = args.join(" ").split(";");

    if (!args[0]) return message.channel.send("Syntaxe : +patch-jeux **`MAJ / Infos / ...`; `Jeux`; `URL du logo du jeux`; `Description de la MAJ`; `Xexa code` | `Pour add une iamge, +img lien de l'image (optionnel)`**");

let embed1 = new Discord.MessageEmbed()
  .setTitle(`${array_of_arguments[0]} ${array_of_arguments[1]}`)
  .setThumbnail(array_of_arguments[2])
  .setDescription(array_of_arguments[3])
  .setColor(array_of_arguments[4])
  .setFooter(`© 2020 : Bot et message créé par l'agriculteur normand | Tous droits réservés.`, `https://zupimages.net/up/20/13/omgq.png`);
  message.channel.send(embed1);
};

  module.exports.help = {
    name: 'patch-jeux'
};