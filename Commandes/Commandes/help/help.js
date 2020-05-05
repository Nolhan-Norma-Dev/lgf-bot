const Discord = require("discord.js");
    module.exports.run = async (client, message, args) => {

    let messageToBot = args.join('');
    message.delete().catch();

    let embed = new Discord. MessageEmbed()
    .setTitle("Commande : +help")
    .setAuthor("LGF Bot", "https://zupimages.net/up/20/13/omgq.png")
    .setThumbnail("https://zupimages.net/up/20/13/omgq.png")
    .setDescription("Effectuer les commandes suivantes :\n\n😀 : **__+help-member__** : Pour les commandes pour **Tout le Monde**.\n\n🎵 : **__+help-musique__** : Pour les commandes pour la **Musique**.\n\n👮 : **__+help-admin__** : Pour les commandes pour les **Admins**.\n\n⚠️ Ne faite pas attention aux emojie, c'est pour plus tard !⚠️")
    .setColor(" 0x061922 ")
    .setFooter(`© 2020 : Bot et message créé par l'agriculteur normand | Tous droits réservés.`, `https://zupimages.net/up/20/13/omgq.png`)
    
    const msg = await message.channel.send(embed);
    await msg.react('😀');
    await msg.react('🎵');
    await msg.react('👮'); 
};
module.exports.help = {
    name: "help",
  };