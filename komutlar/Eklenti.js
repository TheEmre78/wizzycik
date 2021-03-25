const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = process.env.prefix;

  const sunucu = new Discord.MessageEmbed()
    .setAuthor(`ShadowRise Network | Eklenti`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/823592301796392960/824619745192968263/a3935a550c559f47bb1e870681a4384f-removebg-preview.png"
    )
    .setDescription(
      `<a:tik:822531200353959937> ShadowRise Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Ticket Sistem__`,
      `<a:green:822530401301954632> \`${prefix}ticket-sistem\` Gelişmiş Ticket Sistem`,
      true
    )
    .addField(
      `__Seviye Sistem__`,
      `<a:green:822530401301954632> \`${prefix}seviye-sistem\` Gelişmiş Seviye Sistem`,
      true
    )
    .addField(
      `__OtoRol Sistem__`,
      `<a:green:822530401301954632> \`${prefix}otorol-sistem\` Gelişmiş OtoRol Sistem`,
      true
    )
    .addField(
      `__ÖzelProfil Sistem__`,
      `<a:green:822530401301954632> \`${prefix}profil-sistem\` Gelişmiş Profil Sistem`,
      true
    )
    .addField(
      `__Öneri Sistem__`,
      `<a:green:822530401301954632> \`${prefix}öneri-sistem\` Ayarlanabilir Öneri Sistem`,
      true
    )
    .addField(
      `__Ban Sistem__`,
      `<a:green:822530401301954632> \`${prefix}ban-sistem\` Ayarlanabilir Ban Sistem`,
      true
    )
      .addField(
      `__AboneRol Sistem__`,
      `<a:green:822530401301954632> \`${prefix}abonerol-sistem\` Ayarlanabilir Abone Rol Sistem`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:yesil:822529538663514173>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:yesil:822529538663514173> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:yesil:822529538663514173> \`${prefix}iletişim\` | ShadowRise İletişim Bilgileri.`
    );
  return message.channel.send(sunucu);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "eklenti",
  description: "Yardım Menüsü",
  usage: "yardım"
};
