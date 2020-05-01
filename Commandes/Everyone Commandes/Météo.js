const Discord = require("discord.js");
const weather = require('weather-js')

exports.run = (client, message, args) => {

weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {

  let messageToBot = args.join('');
message.delete().catch();
  
if(args <= 0){
message.channel.send("veuillez renseignez une **Ville** valide.").then(m => m.delete({timeout: 10000}))
return;
}

  var current = result[0].current;
  var location = result[0].location;
    if (err) message.channel.send(err);
    let embed = new Discord. MessageEmbed()
    .setDescription(`**${current.skytext}**`)
    .setAuthor(`Météo pour ${current.observationpoint}`)
    .setThumbnail(current.imageUrl)
    .addField('Fuseau horaire', `UTC${location.timezone}, true`)
    .addField('Type de degré', location.degreetype, true)
    .addField('Temperature', `${current.temperature} Degrés`, true)
    .addField('Ressenti', `${current.feelslike} Degrés`, true)
    .addField('Les vents', current.winddisplay, true)
    .addField('Humidité', `${current.humidity}%`, true)
    .setColor(" 0x007dc5 ")
    .setFooter(`© 2020 : Bot et message créé par l'agriculteur normand | Tous droits réservés.`, `https://zupimages.net/up/20/13/omgq.png`)
    message.channel.send(embed)
});
  
}

module.exports.help = {
    name: "météo",
  };