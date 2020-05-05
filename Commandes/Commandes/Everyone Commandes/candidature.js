const Discord = require("discord.js");

exports.run = (client, message, args) => {

    let messageToBot = args.join('');
    message.delete().catch();

    let embed = new Discord. MessageEmbed()
    .setTitle("Commande : +Candidature")
    .setAuthor("LGF Bot")
    .setThumbnail("https://zupimages.net/up/20/13/omgq.png")
    .setDescription("Candidatures")
    .addField("@everyone", "**__Commandes disponibles pour tous le monde :__**")
    .addField("Vous voulez faire parti de :","- l'équipe d’animation ?\n- l'équipe de modération ?\n- l'équipe de développement ?", true)
    .addField("Formulaire", "[Voici le lien du formulaire à remplir correctement](https://docs.google.com/forms/d/e/1FAIpQLSe51YfywQ3zMofRJJYz8AKdYe2PGiYrC8d6LY_5skRm_fcXbA/viewform)")
    .addField("Cordialement,", "Les responsables de LGF V2.", true)
    .setColor(" 0x007dc5 ")
    .setFooter(`© 2020 : Bot et message créé par l'agriculteur normand | Tous droits réservés.`, `https://zupimages.net/up/20/13/omgq.png`)
    message.channel.send(embed)  
};

module.exports.help = {
    name: "candidature",
  };