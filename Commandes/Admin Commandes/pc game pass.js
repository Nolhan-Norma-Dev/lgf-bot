const Discord = require('discord.js');

exports.run = (client, message, args) => {

    let messageToBot = args.join('');
    message.delete().catch();

    const embed1 = new Discord.MessageEmbed()
      .setTitle(`PC - Game Pass`)
      .setColor('0x007dc5')
      .setDescription("LGF v2 vous propose son Game Pass !\n\nIl consiste en vous donnant accès à des salons pour chaque jeux.\nLes Jeux sont répartie par Types ! **`Simulation, FPS, Monde Ouvert, etc`**\n\nIl vous sufie juste de cocher **l'émojie** corespondant au jeux !")
    message.channel.send(embed1)  

    const embed2 = new Discord.MessageEmbed()
    .setTitle(`Type : Simulation`)
    .setColor('0x007dc5')
    .setDescription("- <:arma3:704749456150495282> : **Arma 3**\n- <:fs19:704749475213607046> : **Farming Simulator**\n- <:ETS2:704749475981164565> : **Euro Truck Simulator 2**\n- <:ATS:704749473393410058> : **American Truck Simulator**\n- <:omsi2:704749464320999424> : **Omsi 2**\n- <:FBS:704749475582705684> : **Fernbus Simulator / Tourist Bus Simulator**\n- <:BusSimulator:704749475482042368> : **Bus Simulator**\n- <:TSW:704749468905635921> : **Train Sim World**\n- <:MudRunner:704749475767386143> : **Spintires Mudrunner**\n- <:SnowRunner:704749473213186119> : **Snow Runner**");
    message.channel.send(embed2)

    const embed3 = new Discord.MessageEmbed()
    .setTitle(`Type : FPS`)
    .setColor('0x007dc5')
    .setDescription("- <:fortnite:704749467336835113> : **Fortnite**\n- <:PUBG:704368194533589082> : **PUBG**\n- <:ApexLegends:704749468158787637> : **Apex Legends**\n- <:CSGO:704749475117137950> : **CS GO**\n- <:COD:704749473330495638> : **Call of Duty**\n- <:Overwatch:704749473393410201> : **overwatch**\n- <:FC5:704749473208729670> : **Far Cry 5**")
    message.channel.send(embed3)

    const embed4 = new Discord.MessageEmbed()
    .setTitle(`Type : Monde Ouvert`)
    .setColor('0x007dc5')
    .setDescription("- <:ScrapMechanic:704372919639474326> : **Scrap Mechanic**\n- <:Minecraft:704362976139935804> : **Minecraft**\n- <:GTA5:704363404793741352> : **GTA 5**\n- <:garrysmod:704754362790051970> : **Garrys Mod**")
    message.channel.send(embed4)

    const embed5 = new Discord.MessageEmbed()
    .setTitle(`Type : Course`)
    .setColor('0x007dc5')
    .setDescription("- <:ForzaHorizon4:704364734425727117> : **Forza Horizon 4**\n- <:The_Crew_2:704364322679292025> : **The Crew 2**\n- 🚗 : **Project Cars 2**")
    message.channel.send(embed5)  

    const embed6 = new Discord.MessageEmbed()
    .setFooter(`© 2020 : Bot et message créé par l'agriculteur normand | Tous droits réservés.`, `https://zupimages.net/up/20/13/omgq.png`)
    .setColor('0x007dc5')
    message.channel.send(embed6)  
    };

module.exports.help = {
    name: 'pc-game-pass'
};