/*Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Sampe Nipu Apalagi Lari Dari Tanggung Jawab

Base Ori : Hw Mods
Base Haikal Hw Mods : Copyan Dari Base Dika

• [ Recode Bye > ZetsuboXygen777]
   # AND↓
   THANKS TO >
  XygenGod777( Watashi / 私 )
  Hw Mods Wa / Haikal (Base)
  Adiwajshing (Baileys)
  whiskeysockets (Baileys)
  Thunder X7 (Inspirate)
  Pak Tzy (Inspirate)
  Maintainer (Taira Makino)
  Maintener2(Samue-l1)
  Maintener3(Arlodragon)
  ♥️ ありがとう
                 >
*/
const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk'
global.ig = 'kipkoech' // ubah aja
global.email = 'entplayboi5@gmail.com ' //serah
global.region = 'kenya' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'DRAGON' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['254782903443'] // ubah aja pake nomor lu
//==========================zetsuboclient=======================//
global.botname = '𝐑𝚫𝐃𝚰𝚯𝚫𝐂𝚻𝚰𝛁𝚵 𝛁1' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = ' 𝐑𝚫𝐃𝚰𝚯𝚫𝐂𝚻𝚰𝛁𝚵 𝛁1' // ubah aja ini nama sticker
global.author = '༻࿇ 𝐃𝚪𝚫𝐆𝚯𝚴❖༺' // ubah aja ini nama sticker
global.prefa = '.'
global.sessionName = 'Tigersession'  //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.autoviewstatus = process.env.autoviewstatus || "TRUE"
global.autolike = process.env.autolikestatus || "TRUE"
global.autoread = process.env.autoread || "false"
global.wlcm = []
global.wlcmm = []
global.anticall = false
global.rn = 'false'
/*
Declaring Menu type

V1 = Photo
V2 = Video
V3 = Text
V4 = Button

*/
global.menutype = "v4"
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 5
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
