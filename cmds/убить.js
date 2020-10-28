const rn = require('random-number');
const { RichEmbed } =  require('discord.js');

module.exports.run = async(client,message,args) =>{
    const meow = [
        "https://i.pinimg.com/originals/f4/9e/2c/f49e2c36a93eeac0f620896b71d7bf3b.gif",
        "https://i.pinimg.com/originals/43/bb/8e/43bb8ee85558de81c132ff635287c3af.gif",
        "https://i.pinimg.com/originals/43/d5/a1/43d5a1c9c4274d88c0ceba9b8710e9d1.gif",
        "https://i.pinimg.com/originals/8e/22/2e/8e222e0175de9995669b54e6a14ee68d.gif",
        "https://i.pinimg.com/originals/ec/59/63/ec5963f08652a109bebe92bd12f1d7be.gif",
        "https://i.pinimg.com/originals/43/0f/45/430f45f3f9d9c3f142dcfe71913bb8ae.gif"
    ];

    if (!message.mentions.users.first()) {
        return message.channel.send(`Укажи пользователя , которого хочешь УБИТЬ`)
    }
        

    const r = rn({
        min: 0,
        max: meow.length -1,
        integer: true
    });

    const img = meow[r];
    let embed = new RichEmbed()
    .setAuthor(`${message.author.username} убивает ${message.mentions.users.first().username}`)
    .setImage(img)
    message.channel.send(embed);


    let cnt = message.content
    if (cnt !== "=убить  ") {
        const cn = message.channel
        message.delete(500) // ?
        let channel = message.channel.name
        let guild = message.guild.name
        console.log(`${s(guild + ', ' + channel)} | ${w(cnt)}`)
        cn.send(cnt);
      }

}


module.exports.help = {
    name: 'убить'
}