const { RichEmbed } = require('discord.js');
const rn = require('random-number');
const request = require('request');

module.exports.run = async(client,message,args) =>{
    const kiss = [
        "https://i.pinimg.com/originals/51/a5/04/51a50453219cb839a8282b8731d0d15c.gif",
        "https://i.pinimg.com/originals/19/d8/88/19d88805de4e47b7c22090256ef381e2.gif",
        "https://i.pinimg.com/originals/cd/48/60/cd4860962ee60de6c10e0c9011ddaa0e.gif",
        "https://i.pinimg.com/originals/ec/cf/3e/eccf3e06660fc923509ffc257bb917d5.gif"
    ];

if (!message.mentions.users.first()) {
    return message.channel.send(`Укажи пользователя , которого хочешь ПОЦЕЛОВАТЬ`)
}
    




    const r = rn({
        min: 0,
        max: kiss.length -1,
        integer: true
    });

    const img = kiss[r];
    request('https://nekos.life/api/v2/img/kiss', (err, res, body) =>{
        let arr = JSON.parse(body)
        let embed = new RichEmbed()
        .setAuthor(`${message.author.username} поцеловал(а) ${message.mentions.users.first().username}<3`)
        .setImage(arr.url)
        message.channel.send(embed);
    })

    let cnt = message.content
    if (cnt !== "=поцеловать  ") {
        const cn = message.channel
        message.delete(500) // ?
        let channel = message.channel.name
        let guild = message.guild.name
        console.log(`${s(guild + ', ' + channel)} | ${w(cnt)}`)
        cn.send(cnt);
      }
}

module.exports.help = {
    name: 'поцеловать'
}