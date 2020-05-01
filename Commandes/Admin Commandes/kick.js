const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

    let messageToBot = args.join('');
message.delete().catch();

    if (!message.guild.me.hasPermission("SEND_MESSAGES")) return;
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Vous n'avez pas la permission suivante : ```Expluser les Membres```.").catch(console.error);
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Je n'ai pas la permission suivante : ```Expulser les Membres```.").catch(console.error);
        if (!args[0]) return message.reply("kick [@username or id] (raison)").catch(console.error);
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!user) return message.reply("Vous devez définir un utilisateur !").catch(console.error);
        let verication_user = message.guild.members.cache.find(m => m.id === user.user.id);
        if (!verication_user) return message.reply("L'utilisateur défini est introuvable !").catch(console.error);
        var raison = args.slice(1).join(" ");
        if (!raison) {
            var raison = "Aucune raison";
        }
        if (verication_user.user.id === message.author.id) return message.reply("Vous ne pouvez pas vous expulser !").catch(console.error);
        if (!verication_user.kickable) return message.reply("Vous n'avez pas la permission d'expulser cete utilisateur !").catch(console.error);
        verication_user.kick().catch(console.error);
        verication_user.send(`<@${user.user.id}>, vous venez d'être expulsé du serveur **${message.guild.name}** par ${message.author}\n**Pour la Raison suivante :** ${raison}.\nVous avez compris votre erreur ? Rejoingnez ce serveur : https://discord.io/LGF-v2-DBan !`).catch(console.error);
        message.reply(`Vous venez d'expulser l'utilisateur suivant :\```<@${user.user.id}>\``` !\n**Pour la Raison suivante :** ${raison}`).catch(console.error);
};

module.exports.help = {
    name: "kick"
}