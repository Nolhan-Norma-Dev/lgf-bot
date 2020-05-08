const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    var mentionned = message.mentions.users.first()
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("Vous n\'avez pas la permission d'avertir un utilisateur !")
    if(message.mentions.users.size === 0) {
        return message.channel.send("Vous n'avez pas mentionner d'utilisateur à avertir !")
    }else{
        const args = message.content.split(' ').slice(1)
        if(args[0] === "<@!" + mentionned.id + ">" || args[0] === "<@" + mentionned.id + ">") {
            if(args.slice(1).length != 0) {
                message.channel.send(`${mentionned.tag} a été averti ! `)
                mentionned.send(`Vous venez d'être averti dans le serveur ${message.guild.name} par ${message.author.username}\nRaison : ${args.slice(1).join(' ')}`)
            }else{
                return message.reply("Utilisation incorrecte : Veuillez fournir une raison !")
            }
        }else{
            return message.reply("Utilisation incorrecte")
        }
    }
}

module.exports.help = {
    name:"warn"
}