const rn = require('random-number');
const { RichEmbed } =  require('discord.js');

module.exports.run = async(client,message,args) =>{
    const meow = [
        "https://i.pinimg.com/originals/41/2d/8c/412d8c06ae3aa2c0e57da35f9db13a06.gif",
        "https://i.pinimg.com/originals/1c/7e/3c/1c7e3c4473f3815ebeb9e69c337c578e.gif",
        "https://i.pinimg.com/originals/fa/fb/20/fafb200a9416556806ea6445009f2469.gif",
        "https://i.pinimg.com/originals/94/bb/99/94bb99217108c6bc045a0e9e2372e9ee.gif",
        "https://i.pinimg.com/originals/d5/a3/29/d5a32957cf445dddf4c3f7076b0f238a.gif",
        "https://i.pinimg.com/originals/5b/5c/ce/5b5cce5b9ae73cd84fa21cb963f5cb1f.gif",
        "https://i.pinimg.com/originals/03/6d/d2/036dd2045bd45d4866ddb4dcb516a76f.gif",
        "https://i.pinimg.com/originals/b5/fe/ea/b5feea93196357168898fd08c0aaaa19.gif"
    ];
    const r = rn({
        min: 0,
        max: meow.length -1,
        integer: true
    });

    const img = meow[r];
    let embed = new RichEmbed()
    .setAuthor(`${message.author.username} танцует`)
    .setImage(img)
    message.channel.send(embed);

    let cnt = message.content
    if (cnt !== "=танцевать  ") {
        const cn = message.channel
        message.delete(500) // ?
        let channel = message.channel.name
        let guild = message.guild.name
        console.log(`${s(guild + ', ' + channel)} | ${w(cnt)}`)
        cn.send(cnt);
      }

}

module.exports.help = {
    name: 'танцевать'
}