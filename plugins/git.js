const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://images.wallpapersden.com/image/download/pokemon-detective-pikachu-4k_a2lrZmWUmZqaraWkpJRsZ2WtbGdl.jpg", { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Pikachu bot by 𝙺ͥ𝚒ͭ𝚌ᷤ𝚑ͫ𝚞ͤ*
*Creator number : wa.me/919567321848?text=Hi*

*Githublink (Setup)*  :     https://github.com/KICHU***/Pikachu
*Find the stars* ☝😌
 𝗧𝗿𝘆 𝘁𝗵𝗶𝘀 *:https://github.com/ameer-kallumthodi/pikachu*
*Bot setting video : https://youtu.be/_D4ZYuUSXjs*
           
         𝗣𝗶𝗸𝗮𝗰𝗵𝘂 𝗕𝗼𝘁 𝗯𝘆 𝗞𝗶𝗰𝗵𝘂
`}) 

}));
