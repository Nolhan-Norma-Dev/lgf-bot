const Discord = require('discord.js')
module.exports.run = (client, message, args) => {
    let messageToBot = args.join('');
    message.delete().catch();

        const embed = new Discord. MessageEmbed()
        .setColor("0x007dc5")
        .setTitle("Commande : +infos-discord")
        .setAuthor(message.author.username, message.author.avatarURL())
        .setThumbnail("https://zupimages.net/up/20/13/omgq.png")
        .setDescription("Information du serveur discord")
        .addField("Nom du serveur discord :", message.guild.name)
        .addField("Crée le :", "24 Février 2020")
        .addField("Ouvert le :", "Dimanche 29 Mars 2020 à 18H00")
        .addField("Tu as rejoins le :", message.member.joinedAt)
        .addField(`Utilisateurs sur le discord :`, message.guild.memberCount)
        .setFooter(`© 2020 : Bot et message créé par l'agriculteur normand | Tout droits réservés.`, `https://zupimages.net/up/20/13/omgq.png`)
         message.channel.send(embed) 
}

module.exports.help = {
    name: "infos-discord",
}