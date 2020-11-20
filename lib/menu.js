const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/ArugaZ

Instagram: https://instagram.com/ini.arga/

Best regards, ArugaZ.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
falatu chefe, ${pushname}! ✌
esse aqui é o menu 😎👍

Criador:
-❥ *${prefix}sticker*
-❥ *${prefix}stickergif*
-❥ *${prefix}stickergiphy*
-❥ *${prefix}meme*
-❥ *${prefix}quotemaker*
-❥ *${prefix}nulis*

18+:
-❥ *${prefix}nekopoi*

Baixar:
-❥ *${prefix}instagram*
-❥ *${prefix}ytmp3*
-❥ *${prefix}ytmp4*

Pesquisar:
-❥ *${prefix}images*
-❥ *${prefix}sreddit*
-❥ *${prefix}resep*
-❥ *${prefix}stalkig*
-❥ *${prefix}wiki*
-❥ *${prefix}cuaca*
-❥ *${prefix}chord*
-❥ *${prefix}lirik*
-❥ *${prefix}ss*
-❥ *${prefix}play*
-❥ *${prefix}whatanime*

Imagens Aleatorias:
-❥ *${prefix}anime*
-❥ *${prefix}kpop*
-❥ *${prefix}memes*

Tradutor:

-❥ *${prefix}translate pt*

Sobre o Bot:
-❥ *${prefix}donasi*
-❥ *${prefix}botstat*
-❥ *${prefix}ownerbot*
-❥ *${prefix}join*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

Bot Administrador:
-❥ *${prefix}ban* - banir
-❥ *${prefix}bc* - promover
-❥ *${prefix}leaveall* - sair de todos os grupos
-❥ *${prefix}clearall* - deletar todos os chats
tmj cria tenha um bom dia✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Recursos adm* ] ⚠ 
Aqui estão os recursos de administração de grupo neste bot!
-❥ *${prefix}add* 
-❥ *${prefix}kick* @tag
-❥ *${prefix}promote* @tag
-❥ *${prefix}demote* @tag
-❥ *${prefix}tagall*
-❥ *${prefix}del*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Somente o criador do grupo* ] ⚠
Aqui está recurso do proprietário do grupo neste bot!
-❥ *${prefix}kickall*
*O grupo é do criador.
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Olá, obrigado por usar este bot, para apoiar este bot, você pode ajudar doando por:
Acesse o link picpay.me/levi.schafer para doar com PicPay

Ajude a doar para que este projeto de bot continue a crescer

As doações serão usadas para o desenvolvimento e operação deste bot.

Criador. -@Miqueias`
}
