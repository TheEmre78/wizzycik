const Discord = require("discord.js");

exports.run = function(client, message, args) {
  let prefix = process.env.prefix;
  var öneri = [
    "https://wallpaper.dog/large/10816358.png",
    "https://media.discordapp.net/attachments/814947046405570581/817140239859580948/indir.jpg"
  ];

  var öneriler = öneri[Math.floor(Math.random() * öneri.length)];
  var öneri = args.slice(0).join(" ");
  var guildID = "773159215631958028";
  var channelID = "813073099704631346";

  if (!öneri) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(
          `<@${message.author.id}> | Bir mesaj belirtin! Doğru kullanım ➣ ${prefix}öneri <mesaj>`
        )
    );
  } else {
    var embed = new Discord.MessageEmbed()
      .setAuthor(`${message.author.username} | Sunucu İçin Önerisini Yaptı`)
      .setThumbnail(öneriler)
      .setColor("BLACK")
      .setDescription("```" + öneri + "```")
      .setTimestamp()
      .setFooter(`Play.ShadowRise.Com`, client.user.avatarURL())
      .then(function(message) {
      message.react("<a:evet:815534728493006858>");

      message.react("<a:hayir:815534736725901322>");
    })

    client.guilds.cache
      .get(guildID)
      .channels.cache.get(channelID)
      .send(embed);
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(
          `<@${message.author.id}> | Öneriniz alınmıştır! Teşekkür ederiz. ➣ <#813073099704631346> Gelmiştir.`
        )
    );
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öner"],
  permLevel: 0
};

exports.help = {
  name: "öneri",
  description: "bot hakkındaki önerilerinizi bot sahiplerine ulaştırır",
  usage: "öneri <mesaj>"
};
