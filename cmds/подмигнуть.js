const rn = require('random-number');
const { RichEmbed } =  require('discord.js');

module.exports.run = async(client,message,args) =>{
    const meow = [
        "https://i.pinimg.com/originals/67/d5/c4/67d5c4a5b975e79dd975237349828df7.gif",
        "https://i.pinimg.com/originals/c6/fc/fc/c6fcfc152feb10df05e8b9b47486c0b4.gif",
        "https://i.pinimg.com/originals/48/77/7a/48777ab2b03d9e989dfa029b5a9b4fea.gif",
        "https://i.pinimg.com/originals/a0/e8/32/a0e8324a61bc747a6e0413a361145b2c.gif",
        "https://i.pinimg.com/originals/24/25/f7/2425f7a549f7790933c653792500d994.gif",
        "https://i.pinimg.com/originals/22/49/d8/2249d8452cc89b15c9f70e674e00c5c6.gif"
        
    ];
    const r = rn({
        min: 0,
        max: meow.length -1,
        integer: true
    });

    const img = meow[r];
    let embed = new RichEmbed()
    .setAuthor(`${message.author.username} подмигивает`)
    .setImage(img)
    message.channel.send(embed);


    let cnt = message.content
    if (cnt !== "=подмигнуть  ") {
        const cn = message.channel
        message.delete(500) // ?
        let channel = message.channel.name
        let guild = message.guild.name
        console.log(`${s(guild + ', ' + channel)} | ${w(cnt)}`)
        cn.send(cnt);
      }

}

module.exports.help = {
    name: 'подмигнуть'
}