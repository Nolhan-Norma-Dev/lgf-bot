const Discord = require("discord.js");
    module.exports.run = async (client, message, args) => {

    let messageToBot = args.join('');
    message.delete().catch();

    let embed = new Discord. MessageEmbed()
    .setTitle("Commande : +salade")
    .setAuthor(message.author.username, message.author.avatarURL())
    .setDescription("Quels sont vos fruits et légumes préférée ?")
    .addField("Défie tes Amis", "Fait le avec tes amis et voit qui à les même gout que toi !")
    .setColor("0x007dc5")
    
    const msg = await message.channel.send(embed);
    await msg.react('🍎');
    await msg.react('🍏');
    await msg.react('🍊');
    await msg.react('🍋');
    await msg.react('🍒');
    await msg.react('🍇');
    await msg.react('🍉');
    await msg.react('🍓');
    await msg.react('🍑');
    await msg.react('🍈');
    await msg.react('🍌');
    await msg.react('🍐');
    await msg.react('🍍');
    await msg.react('🍠');
    await msg.react('🍆');
    await msg.react('🍅');
    await msg.react('🌽');
    await msg.react('💮');
    await msg.react('🍄');
    await msg.react('🌰');
};
module.exports.help = {
    name: "salade",
  };