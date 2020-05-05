const Discord = require("discord.js");
    module.exports.run = async (client, message, args) => {

    let messageToBot = args.join('');
    message.delete().catch();

    let embed = new Discord. MessageEmbed()
    .setTitle("Commande : +nature")
    .setAuthor(message.author.username, message.author.avatarURL())
    .setDescription("Quels sont vos arbres et plantes préférée ?")
    .addField("Défie tes Amis", "Fait le avec tes amis et voit qui à les même gout que toi !")
    .setColor("0x007dc5")
    
    const msg = await message.channel.send(embed);
    const emote = ['💐','🌸','🌷','🍀','🌹','🌻','🌺','🍁','🍃','🍂','🌿','🌾','🍄','🌵','🌴','🌲','🌳'] // ici tes emotes
    for (const x of emote) {
      msg.react(x);
    }};

module.exports.help = {
    name: "nature",
  };