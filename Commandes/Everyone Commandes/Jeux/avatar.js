const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {

    let waiting = await message.channel.send("L'image arrive dans quelques instants juste en dessous ! :arrow_heading_down:").catch(console.error);
    
    let mentionnedUser = message.mentions.members.first() || message.member;
    let embed =  new Discord.MessageEmbed()

        .setTitle("__Avatar :__")
        .setAuthor(message.author.username, message.author.avatarURL())
        .setColor("RANDOM")
        .setDescription(`[Lien de l'image](${mentionnedUser.user.displayAvatarURL()})`)
        .setImage(`${mentionnedUser.user.displayAvatarURL()}`)
        .setFooter(`© 2020 : Bot et message créé par l'agriculteur normand | Tous droits réservés.`, `https://zupimages.net/up/20/13/omgq.png`);

        waiting.edit(embed).catch(console.error);
};

module.exports.help = {
    name: "avatar"
};