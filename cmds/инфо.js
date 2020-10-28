const {RichEmbed} = require('discord.js')
const strftime = require('strftime')


module.exports.run = async (bot, message, args) => {
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    let argsUser 
    if (member) argsUser = member.user
    else argsUser = message.author

    let statuses = {
        online: 'Пользователь в сети',
        idle: 'Нет на месте',
        dnd: 'Не беспокоить',
        offline: 'Не в сети'
    }
   

    let day = 1000 * 60 * 60 * 24
    let date1 = new Date(message.createdTimestamp)
    let date2 = new Date(argsUser.createdTimestamp)
    let date3 = new Date(message.guild.member(argsUser).joinedTimestamp)
    let diff1 = Math.round(Math.abs((date1.getTime() - date2.getTime()) / day))
    let diff2 = Math.round(Math.abs((date1.getTime() - date3.getTime()) / day))

    let embed = new RichEmbed()
       .setTitle(argsUser.username)
       .addField('Дата регистрации акаунта  ', `${strftime('%d.%m.%Y в %H:%M', new Date(argsUser.createdTimestamp))}\n(${diff1} дней назад)`, true)
       .addField(' Дата вступления на сервер', `${strftime('%d.%m.%Y в %H:%M', new Date(message.guild.member(argsUser).joinedTimestamp))}\n(${diff2} дней назад)`, true)
       .addField('Роли', message.guild.member(argsUser).roles.filter(r => r.id != message.guild.id).map(role => role.name).join('; ') || 'Пользователь не имеет ролей')
       .setColor(message.guild.member(argsUser).displayHexColor)
       .setTimestamp()
       .setThumbnail(argsUser.avatarURL)
       .setFooter(`ID: ${argsUser.id}`)
    await message.channel.send(embed)
}


module.exports.help = {
    name: 'инфо'
}