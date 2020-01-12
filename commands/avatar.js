const { RichEmbed } = require('discord.js');

module.exports.run = (bot, msg, args) => { // Функция для команды
  let user = msg.mentions.users.first() || msg.author; // Переменная user присваивает себе первого "пинганутого" пользователя или автора сообщения

  msg.channel.send(
    new RichEmbed()
      .setTitle(user.tag)
      .setAuthor('Avatar')
      //.setAuthor(user.displayAvatarURL)
      .setColor('#cc0000') // Ставим цвет для нашего сообщения
      //.setDescription(user.tag) // Описание для нашего сообщения, в данном случае пишем туда дискорд-тег пользователя
      .setImage(`${user.displayAvatarURL}`) // Достали URL аватарки пользователя, потом добавили ?size=2048 к ссылке на аватар пользователя, чтобы получить лучшее качество картинки.
  ); //?size=2048
};

module.exports.help = { // Конфигурация команды
  name: 'ava'
};