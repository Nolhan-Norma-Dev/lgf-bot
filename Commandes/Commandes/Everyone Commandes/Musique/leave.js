const ytdl = require('ytdl-core')


module.exports.run = async(client, message, args) => {

    const deconnection = await message.member.voice.channel.leave();
    message.channel.send("J'ai bien quitté le salon Vocal !");
};

module.exports.help = {
    name: "leave"
};