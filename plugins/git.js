const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://www.pixelstalk.net/wp-content/uploads/2016/03/Pikachu-wallpaper-HD-dowload.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*My creator is 𝙺ͥ𝚒ͭ𝚌ᷤ𝚑ͫ𝚞ͤ*
*Creator number : wa.me/919567321848?text=Hi*

*Githublink (Setup)  :  https://github.com/KICHU***/pikachu*
*Find the stars* ☝😌
*Bot setting video : https://youtu.be/_D4ZYuUSXjs*
           
           𝗣𝗶𝗸𝗮𝗰𝗵𝘂 𝗕𝗼𝘁 𝗯𝘆 𝗞𝗶𝗰𝗵𝘂
`}) 

}));
