const Discord = require(`discord.js`);
const client = new Discord.Client();

const fs = require(`fs`);

client.login("NjgzMjI3MzEyOTgwMDk5MDcz.Xor6CQ.mhiVeBUSVdK38wa-S8o6_taMIV4");

client.commands = new Discord.Collection();

client.on('ready', function() {
    client.user.setStatus("dnd");
    console.log("Je suis connecté !")
  });


fs.readdir("./Commandes/Everyone Commandes/", (error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune Commandes Trouvée !")

    commandes.forEach((f) => {
        let commande = require(`./Commandes/Everyone Commandes/${f}`);
        console.log(`Dossier : Everyone Commandes : ${f} commande chargée !`);

    client.commands.set(commande.help.name, commande);
    });
});

fs.readdir("./Commandes/Admin Commandes/", (error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune Commandes Trouvée !")

    commandes.forEach((f) => {
        let commande = require(`./Commandes/Admin Commandes/${f}`);
        console.log(`Dossier : Admin Commandes : ${f} commande chargée !`);

    client.commands.set(commande.help.name, commande);
    });
});

fs.readdir("./Events/", (error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} events en chargement`);

    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];

    client.on(event, events.bind(null, client));
    });
});

fs.readdir("./Commandes/Everyone Commandes/Musique/", (error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune Commandes dans le dossier Musique Trouvée !")

    commandes.forEach((f) => {
        let commande = require(`./Commandes/Everyone Commandes/Musique/${f}`);
        console.log(`Dossier : Musique : ${f} commande chargée !`);

    client.commands.set(commande.help.name, commande);
    });
});

fs.readdir("./Commandes/Everyone Commandes/Jeux/", (error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune Commandes dans le dossier Musique Trouvée !")

    commandes.forEach((f) => {
        let commande = require(`./Commandes/Everyone Commandes/Jeux/${f}`);
        console.log(`Dossier : Jeux : ${f} commande chargée !`);

    client.commands.set(commande.help.name, commande);
    });
});

fs.readdir("./Commandes/help/", (error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune Commandes dans le dossier help Trouvée !")

    commandes.forEach((f) => {
        let commande = require(`./Commandes/help/${f}`);
        console.log(`Dossier : Help : ${f} commande chargée !`);

    client.commands.set(commande.help.name, commande);
    });
});


client.on("guildMemberAdd", user => {
    let JoinEmbed = new Discord. MessageEmbed()
    .setDescription(`**:tada: Bienvenue <@${user.user.id}> ! N'hésite pas a partager le serveur à tes amis !**`)
    .setColor("0x007dc5") 
    user.guild.channels.cache.get(`681594558831656992`).send(JoinEmbed)
    });


client.on("guildMemberRemove", user => {
    let LeaveEmbed = new Discord. MessageEmbed()
    .setDescription(`**:wave: Au revoir <@${user.user.id}> ! A très bientôt !**`)
    .setColor("0x007dc5") 
    user.guild.channels.cache.get(`681594558831656992`).send(LeaveEmbed)
    });