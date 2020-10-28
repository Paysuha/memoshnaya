const rn = require('random-number');
const { RichEmbed } =  require('discord.js');

module.exports.run = async(client,message,args) =>{
    const meow = [
        "https://i.pinimg.com/originals/6d/38/75/6d387581fd813a25908f03dccb9e98cc.gif",
        "https://i.pinimg.com/originals/aa/ae/ea/aaaeea41f87fdb369b81b543cc0da87f.gif",
        "https://i.pinimg.com/originals/4a/51/22/4a51227507992fc6cc50a540c84a7f2e.gif",
        "https://i.pinimg.com/originals/4a/51/22/4a51227507992fc6cc50a540c84a7f2e.gif",
        "https://i.pinimg.com/originals/8c/49/f4/8c49f44548c021085c26dafbd9dbedc7.gif",
        "https://i.pinimg.com/originals/7b/05/97/7b059769f8ff61d8d504afee5771a696.gif",
        "https://i.pinimg.com/originals/d7/c7/94/d7c79483dac99991b6da4930acfd516a.gif",
        "https://i.pinimg.com/originals/1f/2c/b5/1f2cb58fef30c614b4410cb38db551c9.gif"
    ];
    const r = rn({
        min: 0,
        max: meow.length -1,
        integer: true
    });

    const img = meow[r];
    let embed = new RichEmbed()
    .setAuthor(`${message.author.username} плачет`)
    .setImage(img)
    message.channel.send(embed);


    let cnt = message.content
    if (cnt !== "=плакать  ") {
        const cn = message.channel
        message.delete(500) // ?
        let channel = message.channel.name
        let guild = message.guild.name
        console.log(`${s(guild + ', ' + channel)} | ${w(cnt)}`)
        cn.send(cnt);
      }

}

module.exports.help = {
    name: 'плакать'
}