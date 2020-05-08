const Discord = require('discord.js')
const ms = require('ms')

module.exports.run = async (bot, message, args) => {

    if(message.channel.type === "dm") return;
    message.delete()
    if(message.author.bot) return;
    let tomute = message.guild.member(message.mentions.members.first()) || message.guild.members.cache.get(args[0])
    if(!tomute){
        return message.reply("Veuillez mentionné un utilisateur !")
    }
    if(tomute.hasPermission("ADMINISTRATOR")) return message.reply ("Je ne peux pas mute cette utilisateur !")
    let muterole = message.guild.roles.cache.find(role => role.name === 'Muted');
    if(!muterole) {
        try{
            muterole = await message.guild.createRoles({
                name: "mute",
                color: "0x00000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        }catch(e){
            console.log(e.stack)
        }
    }
    let mutetime = args[1]
    if(!mutetime) return message.reply("Vous n'avez pas précisé de temps !")

    await(tomute.roles.add(muterole.id));
    message.reply(`<@${tomute.id}> à été mute pendant ${ms(ms(mutetime))}`)

    setTimeout(function(){
        tomute.roles.remove(muterole.id)
        message.channel.send(`<@${tomute.id}> à bien été unmute !`)
    }, ms(mutetime));
    
    function convertMS(ms) {
        var d, h, m, s;
        s = Math.floor(ms / 1000);
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        d = Math.floor(h / 24);
        h = h % 24;
        return {
            d: d,
            h: h,
            m: m,
            s: s
        };
    }
}

module.exports.help = {
    name: "mute"
}