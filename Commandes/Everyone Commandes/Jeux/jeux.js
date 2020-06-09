const Discord = require("discord.js");
exports.run = (client, message, args) => {

    let messageToBot = args.join('');
    message.delete().catch();

    let embed = new Discord. MessageEmbed()
    .setTitle("Commande : +jeux")
    .setAuthor("LGF Bot", "https://zupimages.net/up/20/13/omgq.png")
    .setThumbnail("https://zupimages.net/up/20/13/omgq.png")
    .setDescription("Liste de mes commandes disponibles\nPs : Je suis toujours en développement ! Crée par l'agriculteur normand pour LGF v2")
    .addField("@everyone", "**__Commandes pour tous le monde :__**")
    .addField("Animaux","`+animaux` : Joue avec tes amis !")
    .addField("Nature","`+nature` : Joue avec tes amis !")
    .addField("Salade","`+salade` : Joue avec tes amis !")
    .addField("Avatar","`+avatar` : affiche ton avatar ou celui d'un de tes amis !")
    .setColor(" 0x061922 ")
    .setFooter(`© 2020 : Bot et message créé par l'agriculteur normand | Tous droits réservés.`, `https://zupimages.net/up/20/13/omgq.png`)
    message.channel.send(embed)  
};

module.exports.help = {
    name: "jeux",
  };