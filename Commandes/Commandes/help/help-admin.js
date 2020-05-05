  const Discord = require("discord.js");
exports.run = (client, message, args) => {

    let messageToBot = args.join('');
    message.delete().catch();

    if (!message.member.hasPermission('MANAGE_MESSAGES'))
    return message.channel.send("**[Erreur]**, Cette commande est réservée au Staff !");

    let embed = new Discord. MessageEmbed()
    .setTitle("Commande : +help-admin")
    .setAuthor("LGF Bot", "https://zupimages.net/up/20/13/omgq.png")
    .setThumbnail("https://zupimages.net/up/20/13/omgq.png")
    .setDescription("Liste de mes commandes disponibles\nPs : Je suis toujours en développement ! Crée par l'agriculteur normand pour LGF v2")
    .addField("@Admin", "**__Commandes pour les Admins__**")
    .addField("Poll", "`+poll [Question]` : Permet de faire un sondage !")
    .addField("Result Poll", "`+result poll [Question]` : Permet de donnez une réponse au sondage !")
    .addField("Changelog", "`+changelog [title; description; Sous Titre; texte]` : Permet de publier un changelog ! (BETA)")
    .addField("Clear", "`+clear [nombre]` : Permet de supprimer un certain nombre de messages ")
    .addField("Kick", "`+kick [@utilisateur] [Raison]` : Permet d'expulser l'utilisateur")
    .addField("Ban", "`+Ban [@utilisateur] [Raison]` : Permet de bannir l'utilisateur")
    .addField("Status", "`+status` : Permet de donnez le status du serveur !")
    .addField("PC Game Pass", "`+pc-game-pass` : Permet d'envoyez la list des jeux dispo sur le serveur !")
    .setColor(" 0x061922 ")
    .setFooter(`© 2020 : Bot et message créé par l'agriculteur normand | Tous droits réservés.`, `https://zupimages.net/up/20/13/omgq.png`)
    message.channel.send(embed)  
};
module.exports.help = {
    name: "help-admin",
  };