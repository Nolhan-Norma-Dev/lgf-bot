const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let messageToBot = args.join('');
    message.delete().catch();
    
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        return message.channel.send (
            "Vous n'avez pas la permission suivante : \```GÉRER LES MESSAGES\``` !, "
        );
    }
    if (!args[0]) return message.channel.send("Syntaxe : +poll ** `[votre question]` **");
    
    const pollEmbed = new Discord.MessageEmbed()
      .setTitle(`Sondage !`)
      .setColor('0x007dc5')
      .setAuthor(`De : ${message.author.username}`, message.author.avatarURL())
      .setDescription(args.join(' '),'Réagissez avec les réactions ci-dessous.')
      .setFooter(`© 2020 : Bot et message créé par l'agriculteur normand | Tous droits réservés.`, `https://zupimages.net/up/20/13/omgq.png`);
      
      const chan = message.guild.channels.cache.find(c => c.id === '695312462018248780');
      const sendembed = await chan.send(suggestEmbed)
      await sendembed.react('✅');
      await sendembed.react('❌');
      message.guild.channels.cache.find(c => c.id === '695312462018248780').send(`Commande réussie : **Votre Suggestion à bien était envoyer** !\n\`Ce message ce suprimera automatiquement au bout de 10s!\``).then(m => m.delete({timeout: 10000}));
};

module.exports.help = {
    name: 'poll'
};