const rn = require('random-number');
const { RichEmbed } =  require('discord.js');

module.exports.run = async(client,message,args) =>{
    const meow = [
        "https://i.pinimg.com/originals/d3/13/62/d3136220744f204a3f6e02bb6c21e3a4.gif",
        "https://i.pinimg.com/originals/ca/a6/97/caa697ba2a4737b7be7a3fcc176e35cd.gif",
        "https://i.pinimg.com/originals/bc/e8/ca/bce8ca4c4f4025d1ffad2d6f82f28742.gif",
        "https://i.pinimg.com/564x/47/98/4d/47984dae9defd1b09a4456280bf2cbd9.jpg"
    ];
    const r = rn({
        min: 0,
        max: meow.length -1,
        integer: true
    });

    const img = meow[r];
    let embed = new RichEmbed()
    .setAuthor(`${message.author.username} мяукает`)
    .setImage(img)
    message.channel.send(embed);


    let cnt = message.content
    if (cnt !== "=мяу  ") {
        const cn = message.channel
        message.delete(500) // ?
        let channel = message.channel.name
        let guild = message.guild.name
        console.log(`${s(guild + ', ' + channel)} | ${w(cnt)}`)
        cn.send(cnt);
      }

}

module.exports.help = {
    name: 'мяу'
}