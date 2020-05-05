const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
    
    let messageToBot = args.join('');
    message.delete().catch();

    if (!message.guild.me.hasPermission("SEND_MESSAGES")) return;
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Vous n'avez pas la permission suivante : ```Bannir les Membres```.").catch(console.error);
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("Je n'ai pas la permission suivante : ```Bannir les Membres```.").catch(console.error);
        if (!args[0]) return message.reply("ban[@username or id] (raison)").catch(console.error);
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!user) return msg.reply("Vous devez déifnir un utilisateur !").catch(console.error);
        let verication_user = message.guild.members.cache.find(m => m.id === user.user.id);
        if (!verication_user) return message.reply("L'utilisateur défini est introuvable !").catch(console.error);
        var raison = args.slice(1).join(" ");
        if (!raison) {
            var raison = "Aucune raison";
        }
        if (verication_user.user.id === message.author.id) return message.reply("Vous ne pouvez pas vous bannir !").catch(console.error);
        if (!verication_user.kickable) return message.reply("L'utilisateur ne peut pas être banni !").catch(console.error);
        verication_user.ban(raison).then(
            message.reply(`Vous venez de bannir l'utilisateur <@${user.user.id}> !\n**Raison:** ${raison}`)
            .then(user.send(`<@${user.user.id}>, vous venez d'être banni du serveur **${message.guild.name}** par ${message.author}\n**Pour la Raison suivante :** ${raison}\nVous avez compris votre erreur ? Rejoingnez ce serveur : https://discord.io/LGF-v2-DBan !`))
        ).catch(console.error);
};

module.exports.help = {
    name: "ban"
}