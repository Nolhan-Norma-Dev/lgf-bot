const Discord = require("discord.js");

exports.run = (client, message, args) => {

    let messageToBot = args.join('');
    message.delete().catch();

    let embed = new Discord. MessageEmbed()
    .setTitle("Commande : +don")
    .setAuthor("LGF Bot")
    .setThumbnail("https://zupimages.net/up/20/13/omgq.png")
    .setDescription("Faire un **DON** à LGF v2 !")
    .addField("@everyone", "**__Commandes disponible pour tous le monde :__**")
    .addField("Pourquoi faire un don ?", "- Faire des Givewaways !\n- Aider à financer le LGF Bot !", true)
    .addField("Comment faire un DON ?,", "- Via Paypal", true)
    .addField("Paypal", "[Cliqez ici pour faire un DON !](https://www.paypal.com/pools/c/8nPjGtBTgn)")
    .addField("Cordialement,", "Les responsables de LGF V2.", true)
    .setColor("0x007dc5")
    .setFooter(`© 2020 : Bot et message créé par l'agriculteur normand | Tous droits réservés.`, `https://zupimages.net/up/20/13/omgq.png`)
    message.channel.send(embed)  
};

module.exports.help = {
    name: "don",
  };