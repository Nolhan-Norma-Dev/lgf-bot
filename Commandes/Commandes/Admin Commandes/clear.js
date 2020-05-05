const Discord = require(`discord.js`);

module.exports.run = async(client, message, args) => {

    let messageToBot = args.join('');
    message.delete().catch();

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les permissions nécessaire ! Vous devez faire parti du ***Staff*** !").catch(console.error);

    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je n'ai pas la permission nécessaire ! Il me faut la Permission suivante : ***```Gérer les méssages```*** !").catch(console.error);

    if(!args[0]) return message.channel.send("Veuillez spécifier un nombre de message à suprimer ! `__Exemple :__ +clear 3`");

    if (isNaN(args[0])) return message.channel.send("Veuillez spécifier un monbre !");

    message.channel.bulkDelete(args[0]);

    message.channel.send(`Commande réussie : \`${args[0]} messages surpprimés !\` \n\nCe message ce suprimera au bout de 10s!`).then(m => m.delete({timeout: 10000}))
    
};

module.exports.help = {
    name: "clear"
}