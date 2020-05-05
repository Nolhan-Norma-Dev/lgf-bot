const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let messageToBot = args.join('');
    message.delete().catch();

  if (!message.member.hasPermission('MANAGE_MESSAGES'))
    return message.channel.send("**[Erreur]**, Cette commande est réservée au Staff !");

    if (!args[0]) return message.channel.send("Syntaxe : +status ** `...; ...; ...; ...; ...; ...; ...` **");

    let array_of_arguments = args.join(" ").split(";");

    let embed1 = new Discord.MessageEmbed()
    .setTitle('Status du Serveur')
    .setDescription("Status en temps réél du serveur Les Gamers Français v2.")
    .setColor("0x007dc5")
    message.channel.send(embed1)

    let embed2 = new Discord.MessageEmbed()
    .setTitle("En Général")
    .setDescription(array_of_arguments[0])
    .setColor("0x007dc5")
    message.channel.send(embed2)

    let embed3 = new Discord.MessageEmbed()
    .setTitle("Plus Précisément :")
    .setColor("0x007dc5")
    message.channel.send(embed3)

    let embed4 = new Discord.MessageEmbed()
    .setTitle("LGF Bot :")
    .setDescription(array_of_arguments[1])
    .setColor("0x007dc5")
    message.channel.send(embed4)

    let embed5 = new Discord.MessageEmbed()
    .setTitle("Notif personalisée, Informations, ...:")
    .setDescription(array_of_arguments[2])
    .setColor("0x007dc5")
    message.channel.send(embed5)

    let embed6 = new Discord.MessageEmbed()
    .setTitle("Système de Jeux :")
    .setDescription(array_of_arguments[3])
    .setColor("0x007dc5")
    message.channel.send(embed6)

    let embed7 = new Discord.MessageEmbed()
    .setTitle("Musique, Radio, Annimation :")
    .setDescription(array_of_arguments[4])
    .setColor("0x007dc5")
    message.channel.send(embed7)

    let embed8 = new Discord.MessageEmbed()
    .setTitle("Support, Développement, Staff, ... :")
    .setDescription(array_of_arguments[5])
    .setColor("0x007dc5")
    message.channel.send(embed8)

    let embed9 = new Discord.MessageEmbed()
    .setTitle("Recrutement :")
    .setDescription(array_of_arguments[6])
    .setColor("0x007dc5")
    message.channel.send(embed9)

    const embed10 = new Discord.MessageEmbed()
    .setFooter(`© 2020 : Bot et message créé par l'agriculteur normand | Tous droits réservés.`, `https://zupimages.net/up/20/13/omgq.png`)
    .setColor('0x007dc5')
    message.channel.send(embed10) 
};

module.exports.help = {
    name: 'status'
};