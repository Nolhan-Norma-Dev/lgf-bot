const Discord = require('discord.js');

exports.run = (client, message, args) => {

    let messageToBot = args.join('');
    message.delete().catch();

    const embed1 = new Discord.MessageEmbed()
      .setTitle("Commande : +pub")
      .setAuthor(message.author.username, message.author.avatarURL())
      .setColor('0x007dc5')
      .setFooter(`© 2020 : Bot et message créé par l'agriculteur normand | Tous droits réservés.`, `https://zupimages.net/up/20/13/omgq.png`);
    message.channel.send(embed1)  

    const embed2 = new Discord.MessageEmbed()
      .setTitle(`PUB LGF v2`)
      .setColor('0x007dc5')
      .setDescription("> Bonjour,\n> Aujourd'hui, je vais vous présenter un serveur Discord ***innovant, joli et agréable***.\n> \n> Je veut bien sûr parler du serveur **LGF v2** !\n> Mais, c'est quoi \"**LGF v2**\" ?\n> **LGF** = *Les Gamers Français*, **V2** pour la *seconde version*.\n> \n> Tu ne connais pas encore ce serveur ?\n> *Voici quelques exemples de ce que tu pourra y retrouver :*\n> \n> :family: Une future **grande *communauté***\n> :notes: De la ***détente*** avec des ***mini-jeux*** et des salons ***musicaux***.\n> :speech_balloon: Des salons ***vocaux*** et ***textuels*** sur tous vos ***jeux*** préférés !\n> :thinking: Un système de ***suggestion***, et de salons ***privés***.\n> :information_source: Un support à l'écoute ***24H/24 et 7J/7** et un système de *Ticket*.\n> :nazar_amulet: Des grades ***personnalisés***, ainsi que des ***notifs perso*** pour améliorer et personnaliser votre expérience !\n> :robot: La grande nouveauté de la *v2* : le **LGF Bot** développé par notre équipe de développeurs il rassemble toutes les ***fonctionnalités*** nécessaires au serveur !\n> :mag_right: Nous recrutons du ***Staff***, des ***animateurs***, ainsi que des ***développeurs*** !\n> :tools: Le serveur est constamment en développement.\n> \n> **Alors, rejoins-nous !\n> Liens d'invitation du serveur :** ***https://discord.me/lgfv2 / https://discord.io/LGF-v2 ***")
    message.channel.send(embed2)  

    const embed3 = new Discord.MessageEmbed()
    .setTitle(`Partager la PUB LGF v2 (copié / coller cette partie :)`)
    .setColor('0x007dc5')
    .setDescription("```> Bonjour,\n> Aujourd'hui, je vais vous présenter un serveur Discord ***innovant, joli et agréable***.\n> \n> Je veut bien sûr parler du serveur **LGF v2** !\n> Mais, c'est quoi \"**LGF v2**\" ?\n> **LGF** = *Les Gamers Français*, **V2** pour la *seconde version*.\n> \n> Tu ne connais pas encore ce serveur ?\n> *Voici quelques exemples de ce que tu pourra y retrouver :*\n> \n> :family: Une future **grande *communauté***\n> :notes: De la ***détente*** avec des ***mini-jeux*** et des salons ***musicaux***.\n>:speech_balloon: Des salons ***vocaux*** et ***textuels*** sur tous vos ***jeux*** préférés !\n> :thinking: Un système de ***suggestion***, et de salons ***privés***.\n> :information_source: Un support à l'écoute ***24H/24 et 7J/7** et un système de *Ticket*.\n> :nazar_amulet: Des grades ***personnalisés***, ainsi que des ***notifs perso*** pour améliorer et personnaliser votre expérience !\n> :robot: La grande nouveauté de la *v2* : le **LGF Bot** développé par notre équipe de développeurs il rassemble toutes les ***fonctionnalités*** nécessaires au serveur !\n> :mag_right: Nous recrutons du ***Staff***, des ***animateurs***, ainsi que des ***développeurs*** !\n> :tools: Le serveur est constamment en développement.\n> \n> ***Alors, rejoins-nous !\n> Liens d'invitation du serveur : https://discord.me/lgfv2 / https://discord.io/LGF-v2 ***```")
    .setFooter(`© 2020 : Bot et message créé par l'agriculteur normand | Tous droits réservés.`, `https://zupimages.net/up/20/13/omgq.png`);
    message.channel.send(embed3)
    };

module.exports.help = {
    name: 'pub'
};