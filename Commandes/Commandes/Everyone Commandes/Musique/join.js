const ytdl = require('ytdl-core')


module.exports.run = async(client, message, args) => {

    //Commande
    const connection = await message.member.voice.channel.join();
    message.channel.send("J'ai bien rejoins le salon Vocal !");
};

module.exports.help = {
    name: "join"
};