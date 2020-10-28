const rn = require('random-number');
const { RichEmbed } =  require('discord.js');

module.exports.run = async(client,message,args) =>{
    const meow = [
        "https://i.pinimg.com/originals/34/c3/7f/34c37ffc641c198a4c4d46351da02eca.gif",
        "https://i.pinimg.com/originals/86/a8/38/86a838438ca55e52bb413d44befc4386.gif",
        "https://i.pinimg.com/originals/1f/a8/d9/1fa8d907a5cc6e1fa22f431929ebc12a.gif",
        "https://i.pinimg.com/originals/45/e6/a8/45e6a8e1eb723e29dd5bb76e2304de3c.gif",
        "https://i.pinimg.com/originals/24/e7/7b/24e77bc45c5bd73f773d5cb445f4c06b.gif",
        "https://i.pinimg.com/originals/06/c0/71/06c0712220828671ef219de17402154a.gif"
    ];

    if (!message.mentions.users.first()) {
        return message.channel.send(`Укажи пользователя , которому хочешь ПОЖАТЬ РУКУ`)
    }
        

    const r = rn({
        min: 0,
        max: meow.length -1,
        integer: true
    });

    const img = meow[r];
    let embed = new RichEmbed()
    .setAuthor(`${message.author.username} жмет руку ${message.mentions.users.first().username}`)
    .setImage(img)
    message.channel.send(embed);


    let cnt = message.content
    if (cnt !== "=рукопожатие  ") {
        const cn = message.channel
        message.delete(500) // ?
        let channel = message.channel.name
        let guild = message.guild.name
        console.log(`${s(guild + ', ' + channel)} | ${w(cnt)}`)
        cn.send(cnt);
      }

}


module.exports.help = {
    name: 'рукопожатие'
}