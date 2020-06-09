const ytdl = require('ytdl-core')


exports.run = async (client, message) => {
    let skipper = [];
    let skipReq = 0;

    if (skipper.indexOf(message.author.id) === -1) {
        skipper.push(message.author.id);
        skipReq++;
        if (!message.member.voice.channel) {
            return message.reply("Vous pouvez skip car vous n'êtes pas dans un channel vocal!");
        }
        if (skipReq >= Math.ceil((message.member.voice.channel.members.size - 1) / 2)) {
            try {
                await skip_song();
                skipReq = 0;
                skipper = [];
                message.reply('Chanson skip avec succès');
                logger.info(`${message.author.username} Skipped successfully on the song`);
            } catch (e) {
                message.channel.send('**Aucune musique(s) en cours de lecture !**');
            }
              } else {
                  message.reply(`Hey ${message.author.username}, Votre skip a été ajouté à la liste\n\
  you need` + Math.ceil(((message.member.voice.channel.members.size - 1) / 2) - skipReq) + 'Guy(s) to skip the song');
              }
      }
};
function skip_song() {
    dispatcher.end();
}

module.exports.help = {
    name: "skip"
};