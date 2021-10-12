const rn = require('random-number');
const { RichEmbed } =  require('discord.js');

module.exports.run = async(client,message,args) =>{
    const meow = [
        "https://media.discordapp.net/attachments/758681865229697031/897505642833662052/2.png?width=1214&height=683",
        "https://media.discordapp.net/attachments/758681865229697031/897505642833662052/2.png?width=1214&height=683",
        "https://media.discordapp.net/attachments/758681865229697031/897505642833662052/2.png?width=1214&height=683",
        "https://media.discordapp.net/attachments/758681865229697031/897505642833662052/2.png?width=1214&height=683",
        "https://media.discordapp.net/attachments/758681865229697031/897505642833662052/2.png?width=1214&height=683",
        "https://media.discordapp.net/attachments/758681865229697031/897505642833662052/2.png?width=1214&height=683"
    ];

    if (!message.mentions.users.first()) {
        return message.channel.send(`Укажи пользователя , которого хочешь ПОКОРМИТЬ`)
    }
        

    const r = rn({
        min: 0,
        max: meow.length -1,
        integer: true
    });

    const img = meow[r];
    let embed = new RichEmbed()
    .setAuthor(`${message.author.username} кормит ${message.mentions.users.first().username}`)
    .setImage(img)
    message.channel.send(embed);


    let cnt = message.content
    if (cnt !== "=кормить ") {
        const cn = message.channel
        message.delete(500) // ?
        let channel = message.channel.name
        let guild = message.guild.name
        console.log(`${s(guild + ', ' + channel)} | ${w(cnt)}`)
        cn.send(cnt);
      }

}


module.exports.help = {
    name: 'кормить'
}
