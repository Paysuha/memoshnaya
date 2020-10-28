const rn = require('random-number');
const { RichEmbed } =  require('discord.js');

module.exports.run = async(client,message,args) =>{
    const smoke = [
        "https://i.pinimg.com/originals/09/4b/93/094b933ad995a98ae434a573860fc805.gif",
        "https://i.pinimg.com/originals/ea/52/ef/ea52ef755ab4c550ad44b2d764699c1b.gif",
        "https://i.pinimg.com/564x/d8/ca/89/d8ca892b4d78d4c9bdcf768ef1f4a917.jpg",
        "https://i.pinimg.com/originals/be/3c/3d/be3c3d8c776dc2e7b94841aec29d4b41.gif",
        "https://i.pinimg.com/originals/d1/0f/51/d10f51a6fb1cf72548f752bc63e7e8aa.gif",
        "https://i.pinimg.com/originals/38/cc/c1/38ccc1da69a465e6d45f267d53a4024d.gif"
    ];
    const r = rn({
        min: 0,
        max: smoke.length -1,
        integer: true
    });

    const img = smoke[r];
    let embed = new RichEmbed()
    .setAuthor(`${message.author.username} закурил`)
    .setImage(img)
    message.channel.send(embed);

    let cnt = message.content
    if (cnt !== "=курить  ") {
        const cn = message.channel
        message.delete(500) // ?
        let channel = message.channel.name
        let guild = message.guild.name
        console.log(`${s(guild + ', ' + channel)} | ${w(cnt)}`)
        cn.send(cnt);
      }

}

module.exports.help = {
    name: 'курить'
}