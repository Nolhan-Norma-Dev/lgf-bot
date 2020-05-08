const ytdl = require('ytdl-core')


module.exports.run = async(client, message, args) => {

    //Vérification
    if(!message.member.voice.channel) return message.channel.send("Connectez-vous dans un salon vocal !");     
    if(!args[0]) return message.channel.send("Merci de préciser un lien YouTube !");

    const validate = await ytdl.validateURL(args[0]);
    if(!validate) return message.channel.send("Le lien n'est pas bon !");

    //Commande
    const info = await ytdl.getInfo(args[0]);
    const connection = await message.member.voice.channel.join();
    const dispatcher= await connection.play(ytdl(args[0], { filter: 'audioonly'})
    );
    message.channel.send(`Musique ajoutée : ${info.title}`);


};

module.exports.help = {
    name: "play"
};