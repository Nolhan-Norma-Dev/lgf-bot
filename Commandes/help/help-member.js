const Discord = require("discord.js");
exports.run = (client, message, args) => {

    let messageToBot = args.join('');
    message.delete().catch();

    let embed = new Discord. MessageEmbed()
    .setTitle("Commande : +help-member")
    .setAuthor("LGF Bot", "https://zupimages.net/up/20/13/omgq.png")
    .setThumbnail("https://zupimages.net/up/20/13/omgq.png")
    .setDescription("Liste de mes commandes disponibles\nPs : Je suis toujours en développement ! Crée par l'agriculteur normand pour LGF v2")
    .addField("@everyone", "**__Commandes pour tous le monde :__**")
    .addField("Invite","`+invite` : Donne le lien pour inviter vos amis sur le serveur LGF v2 !")
    .addField("Météo","`+météo [ville]` : Donne la météo de la ville séléctionnée !")
    .addField("Ping","`+ping` : Donne le ping du LGF Bot !")
    .addField("Don","`+don` : Donne les informations pour faire un don !")
    .addField("Candidature", "`+candidature` : Donne le lien des candidatures !")
    .addField("Infos discord","`+infos-discord` : Donne les informations de l'utilisateur !")
    .addField("Suggest","`+suggest [Votres suggestion]` : envoie une suggestion !")
    .addField("Role Dispo","`+role-dispo`: donne la list de rôle disponible que vous pouvez demmander !")
    .setColor(" 0x061922 ")
    .setFooter(`© 2020 : Bot et message créé par l'agriculteur normand | Tous droits réservés.`, `https://zupimages.net/up/20/13/omgq.png`)
    message.channel.send(embed)  
};

module.exports.help = {
    name: "help-member",
  };