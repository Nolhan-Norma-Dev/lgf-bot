const Discord = require("discord.js");
    module.exports.run = async (client, message, args) => {

    let messageToBot = args.join('');
    message.delete().catch();

    const embed1 = new Discord.MessageEmbed()
    .setTitle("Commande : +animaux")
    .setAuthor(message.author.username, message.author.avatarURL())
    .setDescription("Quels sont vos animaux préférée ? Part 1")
    .addField("Défie tes Amis !", "Fait le avec tes amis et voit qui à les même gout que toi !")
    .setColor("0x007dc5")
    const msg = await message.channel.send(embed1);
    await msg.react('😺');
    await msg.react('🐒');
    await msg.react('🐶');
    await msg.react('🐺');
    await msg.react('🐭');
    await msg.react('🐹');
    await msg.react('🐸');
    await msg.react('🐯');
    await msg.react('🐨');
    await msg.react('🐻');
    await msg.react('🐷');
    await msg.react('🐄');
    await msg.react('🐗');
    await msg.react('🐴');
    await msg.react('🐑');
    await msg.react('🐘');
    await msg.react('🐼');
    await msg.react('🐧');
    await msg.react('🐦');
    await msg.react('🐤');


    const embed2 = new Discord.MessageEmbed()
    .setDescription("Quels sont vos animaux préférée ? Part 2")
    .setColor("0x007dc5")
    const msgs = await message.channel.send(embed2);
    await msgs.react('🐔');
    await msgs.react('🐓')
    await msgs.react('🐍');
    await msgs.react('🐢');
    await msgs.react('🐛');
    await msgs.react('🐝');
    await msgs.react('🐜');
    await msgs.react('🐞');
    await msgs.react('🐌');
    await msgs.react('🐀');
    await msgs.react('🐇');
    await msgs.react('🐉');
    await msgs.react('🐐');
    await msgs.react('🐊');
    await msgs.react('🐫');
    await msgs.react('🐪');
    await msgs.react('🐆');
};

module.exports.help = {
    name: "animaux",
  };