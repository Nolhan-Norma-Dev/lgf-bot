const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let messageToBot = args.join('');
    message.delete().catch();
    
    if (!args[0]) return message.channel.send("Syntaxe : +suggest ** `[votre suggestion]` **");

    message.guild.channels.cache.find(c => c.id === '681798222314078228').send(`<@&681592246986080267>`).then(m => m.delete({timeout: 20000}));
    
    const suggestEmbed = new Discord.MessageEmbed()
      .setTitle(`Suggestion !`)
      .setAuthor(`De : ${message.author.username}`, message.author.avatarURL())
      .setDescription(args.join(' '),'Votez avec les réactions ci-dessous.')
      .setFooter(`© 2020 : Bot et message créé par l'agriculteur normand | Tous droits réservés.`, `https://zupimages.net/up/20/13/omgq.png`)
      .setColor('0x007dc5');
      
      const chan = message.guild.channels.cache.find(c => c.id === '681798222314078228');
      const sendembed = await chan.send(suggestEmbed)
      await sendembed.react('✅');
      await sendembed.react('⛔');
      message.guild.channels.cache.find(c => c.id === '700660262587465788').send(`Commande réussie : **Votre Suggestion à bien était envoyer** !\n\`Ce message ce suprimera automatiquement au bout de 10s!\``).then(m => m.delete({timeout: 10000}));
};

module.exports.help = {
    name: 'suggest'
};