const { RichEmbed } = require('discord.js');
const rn = require('random-number');
const request = require('request');

module.exports.run = async(client,message,args) =>{
    const hug = [
        "https://i.pinimg.com/originals/a8/f2/f6/a8f2f612ab90fec87a14e4266d04b812.gif",
        "https://i.pinimg.com/originals/5d/93/f4/5d93f4ca1115d4f9e01a67ba9250f14f.gif",
        "https://i.pinimg.com/originals/c4/25/db/c425db273797024dc1776f77c83bd5f3.gif",
        "https://i.pinimg.com/originals/cf/4e/d5/cf4ed5895ba0641ec009138003535b48.gif",
        "https://i.pinimg.com/originals/01/71/40/017140d418d6ca03fdb20f82ba8cab94.gif",
        "https://i.pinimg.com/originals/3f/ad/d2/3fadd265abfb14aaace51414f30a55af.gif",
    ];

if (!message.mentions.users.first()) {
    return message.channel.send(`Укажи пользователя , которого хочешь ОБНЯТЬ`)
}
    




    const r = rn({
        min: 0,
        max: hug.length -1,
        integer: true
    });

    const img = hug[r];
    request('https://nekos.life/api/v2/img/hug', (err, res, body) =>{
        let arr = JSON.parse(body)
        let embed = new RichEmbed()
        .setAuthor(`${message.author.username} обнял(а) ${message.mentions.users.first().username}<3`)
        .setImage(arr.url)
        message.channel.send(embed);
    })

    let cnt = message.content
    if (cnt !== "=обнять  ") {
        const cn = message.channel
        message.delete(500) // ?
        let channel = message.channel.name
        let guild = message.guild.name
        console.log(`${s(guild + ', ' + channel)} | ${w(cnt)}`)
        cn.send(cnt);
      }
}

module.exports.help = {
    name: 'обнять'
}