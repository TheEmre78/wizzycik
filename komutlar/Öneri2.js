const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => {
//if(db.get(`CodEmingOneri.${message.author.id}`)) return message.channel.send('Bekleyen bir önerin var zaten!')
let baslık =  args[0]
let ıcerik = args.slice(1).join(' ')
if(!baslık && !ıcerik) return message.channel.send('Bir içerik veya başlık belirtmedin. Lütfen tekrar dene!')
db.set(`CodEmingOneri.${message.author.id}`, {sistembaslık: baslık, sistemicerik: ıcerik})
db.add('CodEmingÖneriSıra.', 1)
db.add('CodEmingÖneriKullanıcıSıra.'+message.author.id+'', 1)
message.delete()
message.channel.send(':tada: Önerin başarıyla alınmıştır!')

let log = '822524719437447178'
let veri = db.get(`CodEmingOneri.${message.author.id}`)
let embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor('Bir Öneri Belirdi', message.author.displayAvatarURL({ dynamic: true }), 'https://discord.gg/NvjVQCb')
.setDescription(`
Kullanıcı: ${message.author.tag} [${message.author.id}]
Konu baslığı: **${veri.sistembaslık}**
Sıra ${db.get('CodEmingÖneriSıra')}

İçerik;
\`\`\`css
${veri.sistemicerik}
\`\`\``)
client.channels.cache.get(log).send(embed)


};
exports.conf = {
enabled: true,  
guildOnly: false, 
aliases: [], 
permLevel: 0
};

exports.help = {
name: 'tavsiye',
};