const Discord = require("discord.js");
exports.run = (client, message, args) => {

    let messageToBot = args.join('');
    message.delete().catch();

    let embed = new Discord. MessageEmbed()
    .setTitle("Commande : +help-musique")
    .setAuthor("LGF Bot", "https://zupimages.net/up/20/13/omgq.png")
    .setThumbnail("https://zupimages.net/up/20/13/omgq.png")
    .setDescription("Liste de mes commandes disponible\nPs : Je suis toujours en développement ! Crée par l'agriculteur normand pour LGF v2")
    .addField("@everyone", "**__Commandes pour tous le monde :__**")
    .addField("Join","`+join` : Fait rejoindre le LGF Bot dans un salon Vocal !")
    .addField("Leave","`+leave` : Fait quitter le LGF Bot du salon Vocal !")
    .addField("Play","`+play [lien YT]` : fait jouer la musique séléctionnée au LGF Bot !")
    .addField("Bientôt", "`...` : Arrive très bientôt !")
    .setColor(" 0x061922 ")
    .setFooter(`© 2020 : Bot et message créé par l'agriculteur normand | Tous droits réservés.`, `https://zupimages.net/up/20/13/omgq.png`)
    message.channel.send(embed)  
};

module.exports.help = {
    name: "help-musique",
  };