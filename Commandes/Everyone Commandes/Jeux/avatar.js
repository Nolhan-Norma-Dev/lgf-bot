const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {

    let waiting = await message.channel.send("L'image arrive dans quelques instants juste en dessous ! :arrow_heading_down:").catch(console.error);
    
    let mentionnedUser = message.mentions.members.first() || message.member;
    let embed =  new Discord.MessageEmbed()

        .setTitle("__Avatar__")
        .setColor("RANDOM")
        .setDescription(`[Lien de l'image](${mentionnedUser.user.displayAvatarURL()})`)
        .setImage(`${mentionnedUser.user.displayAvatarURL()}`)
        .setFooter(`${bot.user.username} by UnNainCassable| Demandé par ${message.author.tag}`);

        waiting.edit(embed).catch(console.error);
};

module.exports.help = {
    name: "avatar"
};