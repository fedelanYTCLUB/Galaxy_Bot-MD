let handler = async (m, { conn, args }) => {
    let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    let user = global.db.data.users[userId]
    let name = conn.getName(userId)
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length
    // Asegúrate de que 'moneda' esté definido en tu configuración global si es necesario para la sección de economía
    let moneda = global.db.data.settings[conn.user.jid].moneda || '¥enes'; // Moneda sin el $ aquí

    let txt = `
̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮

︶•︶°︶•︶°︶•︶°︶•︶°︶•︶°︶
> ᰔᩚ Hola! @${userId.split('@')[0]}, Soy *Tanjiro_AI*, Aquí tienes la lista de comandos.\n*(˶ᵔ ᵕ ᵔ˶)*

  .⁎✿ *.ᴘᴇʀFɪʟ* ✿⁎.
  .⁎✿ *.ᴍᴇɴᴜ* ✿⁎.
  .⁎✿ *.ɢʀᴜᴘᴏꜱ* ✿⁎.
  
  🌴 乂 *\`ɪᴀ\`* 乂 🌴
  
  .⁎✿ *.ʀᴇᴍɪɴɪ* ✿⁎.
  .⁎✿ *.ʜᴅ* ✿⁎.
  .⁎✿ *.ᴇɴʜᴀɴᴄᴇ* ✿⁎.
  .⁎✿ *.ᴡᴀʟʟᴘᴀᴘᴇʀ <Qᴜᴇʀʏ>* ✿ ⁎.
  .⁎✿ *.ɢᴇᴍɪɴɪ / ɪᴀ* ✿⁎.
  .⁎✿ *.ᴘɪxᴀɪ <Qᴜᴇʀʏ>* ✿⁎.
  
  🌴 乂 *\`ʙᴜꜱQᴜᴇᴅᴀꜱ\`* 乂 🌴

  .⁎✿ *.ɢᴏᴏɢʟᴇ <Qᴜᴇʀʏ>* ✿⁎.
  .⁎✿ *.ᴛɪᴋᴛᴏᴋꜱᴇᴀʀᴄʜ <Qᴜᴇʀʏ>* ✿⁎.
  .⁎✿ *.ʏᴛꜱᴇᴀʀᴄʜ <Qᴜᴇʀʏ>* ✿⁎.
  .⁎✿ *.ɪᴍᴀɢᴇɴ <ᴛxᴛ>* ✿⁎.
  .⁎✿ *.ᴘʟᴀʏ <ᴛxᴛ>* ✿⁎.
  .⁎✿ *.ʏᴛᴅʟᴍᴘ3 <ᴛxᴛ>* ✿⁎.
  .⁎✿ *.ʏᴛᴅʟᴍᴘ4 <ᴛxᴛ>* ✿⁎.
  
  🌴 乂 *\`ᴊᴜᴇɢᴏꜱ\`* 乂 🌴

  .⁎✿ *.ᴀʙʀᴀᴢᴀʀ <@ᴛᴀɢ>* ✿⁎.
  .⁎✿ *.ᴀᴄᴇʀᴛɪᴊᴏ* ✿⁎.
  .⁎✿ *.ꜱᴏɴʀᴏᴊᴀʀꜱᴇ <@ᴛᴀɢ>* ✿⁎.
  .⁎✿ *.ᴄᴏɴꜱᴇᴊᴏ* ✿⁎.
  .⁎✿ *.ᴇɴᴀᴍᴏʀᴀᴅᴀ <@ᴛᴀɢ>* ✿⁎.
  .⁎✿ *.ᴍᴇᴍᴇ* ✿⁎.
  .⁎✿ *.ᴀᴄᴀʀɪᴄɪᴀʀ <@ᴛᴀɢ>* ✿⁎.
  .⁎✿ *.ᴘᴇʀꜱᴏɴᴀʟɪᴅᴀᴅ* ✿⁎.
  .⁎✿ *.ᴘɪʀᴏᴘᴏ* ✿⁎.
  .⁎✿ *ᴘᴏQᴜᴇᴅᴇx <ᴘᴏᴋᴇᴍÓɴ>* ✿⁎.
  .⁎✿ *.ᴘʀᴇɢᴜɴᴛᴀ* ✿⁎.
  .⁎✿ *.ᴅᴏʀᴍɪʀ <@ᴛᴀɢ>* ✿⁎.
  .⁎✿ *.ᴛʀɪꜱᴛᴇ <@ᴛᴀɢ>* ✿⁎.
  .⁎✿ *.ᴛᴏᴘ <ᴛxᴛ>* ✿⁎.
  .⁎✿ *.ᴢᴏᴅɪᴀᴄ <2020 02 12> ✿⁎.

  🌴 乂 *\`ᴊᴀᴅɪʙᴏᴛ\`* 乂 🌴

  .⁎✿ *.ᴄᴏᴅᴇ* ✿⁎.
  .⁎✿ *.ꜱᴇʀʙᴏᴛ* ✿⁎.

  🌴 乂 *\`ꜱᴛɪᴄᴋᴇʀꜱ\`* 乂 🌴

  .⁎✿ *.Qᴄ* ✿⁎.
  .⁎✿ *.ꜱᴛɪᴋᴇʀ <ɪᴍɢ>* ✿⁎.
  .⁎✿ *.ꜱᴛɪᴄᴋᴇʀ <ᴜʀʟ>* ✿⁎.
  .⁎✿ *.ᴛᴀᴋᴇ <ɴᴏᴍʙʀᴇ/ᴀᴜᴛᴏʀ>* ✿⁎.

  🌴 乂 *\`ɴꜱꜰᴡ\`* 乂 🌴

  .⁎✿ *.xɴxxꜱᴇᴀʀᴄʜ <ᴛxᴛ>* ✿⁎.
  .⁎✿ *.xɴxxᴅʟ <ʟɪɴᴋ>* ✿⁎.

  🌴 乂 *\`ᴀɴɪᴍᴇꜱ\`* 乂 🌴

  .⁎✿ *.ʀᴜʟᴇ34 <ᴛᴀɢ>* ✿⁎.
  .⁎✿ *.ᴡᴀɪꜰᴜ* ✿⁎.
  .⁎✿ *.ʜᴇɴᴛᴀɪꜱᴇᴀʀᴄʜ <Qᴜᴇʀʏ>* ✿⁎.
  .⁎✿ *.ʜᴇɴᴛᴀɪᴅʟ <ʟɪɴᴋ / ɪᴅ>* ✿⁎.

  🌴 乂 *\`ɢʀᴜᴘᴏꜱ\`* 乂 🌴

  .⁎✿ *.ʟɪɴᴋ* ✿⁎.
  .⁎✿ *.ɢʀᴜᴘᴏ ᴏᴘᴇɴ / ᴄʟᴏꜱᴇ* ✿⁎.
  .⁎✿ *.ᴅᴇʟᴇᴛᴇ* ✿⁎.
  .⁎✿ *.ᴅᴇᴍᴏᴛᴇ* ✿⁎.
  .⁎✿ *.ᴘʀᴏᴍᴏᴛᴇ* ✿⁎.
  .⁎✿ *.ʜɪᴅᴇᴛᴀɢ* ✿⁎.
  .⁎✿ *.ɪɴꜰᴏɢʀᴜᴘᴏ* ✿⁎.
  .⁎✿ *.ᴋɪᴄᴋ* ✿⁎.
  .⁎✿ *.ʟɪꜱᴛᴀᴅᴠ* ✿⁎.
  .⁎✿ *.ᴛᴀɢᴀʟʟ <ᴛxᴛ>* ✿⁎.
  .⁎✿ *.ɪɴᴠᴏᴄᴀʀ <ᴛxᴛ>* ✿⁎.

  🌴 乂 *\`ᴏɴ / ᴏꜰꜰ\`* 乂 🌴

  .⁎✿ *.ᴇɴᴀʙʟᴇ* ✿⁎.
  .⁎✿ *.ᴅɪꜱᴀʙʟᴇ* ✿⁎.

  🌴 乂 *\`ᴅᴇꜱᴄᴀʀɢᴀꜱ\`* 乂 🌴

  .⁎✿ *.ꜰᴀᴄᴇʙᴏᴏᴋ - ꜰʙ* ✿⁎.
  .⁎✿ *.ɪᴍᴀɢᴇɴ <ᴛxᴛ>* ✿⁎.
  .⁎✿ *.ɪɴꜱᴛᴀɢʀᴀᴍ - ɪɢ* ✿⁎.
  .⁎✿ *.ᴛɪᴋᴛᴏᴋ* ✿⁎.
  .⁎✿ *.ʏᴛᴍᴘ4* ✿⁎.
  .⁎✿ *.ʏᴛᴍᴘ3* ✿⁎.

  🌴 乂 *\`ʜᴇʀʀᴀᴍɪᴇɴᴛᴀꜱ\`* 乂 🌴

  .⁎✿ *.ᴛᴏᴀɴɪᴍᴇ* ✿⁎.
  .⁎✿ *.ʀᴇᴍɪɴɪ* ✿⁎.
  .⁎✿ *.ʜᴅ* ✿⁎.
  .⁎✿ *.ᴇɴʜᴀɴᴄᴇ* ✿⁎.
  .⁎✿ *.ꜱꜱᴡᴇʙ* ✿⁎.
  .⁎✿ *.ꜱꜱ* ✿⁎.
  .⁎✿ *.ᴛʀᴀᴅ* ✿⁎.

  🌴 乂 *\`ᴀᴜᴅɪᴏꜱ\`* 乂 🌴

  .⁎✿ *.ʙᴀꜱꜱ <ᴠɴ>* ✿⁎.
  .⁎✿ *.ʙʟᴏᴡɴ <ᴠɴ>* ✿⁎.
  .⁎✿ *.ᴅᴇᴇᴘ <ᴠɴ>* ✿⁎.
  .⁎✿ *.ᴇᴀʀʀᴀᴘᴇ <ᴠɴ>* ✿⁎.
  .⁎✿ *.ꜰᴀꜱᴛ <ᴠɴ>* ✿⁎.
  .⁎✿ *.ꜰᴀᴛ <ᴠɴ>* ✿⁎.
  .⁎✿ *.ɴɪɢʜᴛᴄᴏʀᴇ <ᴠɴ>* ✿⁎.
  .⁎✿ *.ʀᴇᴠᴇʀꜱᴇ <ᴠɴ>* ✿⁎.
  .⁎✿ *.ʀᴏʙᴏᴛ <ᴠɴ>* ✿⁎.
  .⁎✿ *.ꜱʟᴏᴡ <ᴠɴ>* ✿⁎.
  .⁎✿ *.ꜱᴍᴏᴏᴛʜ <ᴠɴ>* ✿⁎.
  .⁎✿ *.ᴛᴜᴘᴀɪ <ᴠɴ>* ✿⁎.

  🌴 乂 *\`ᴄᴏɴᴠᴇʀᴛɪᴅᴏʀᴇꜱ\`* 乂 🌴

  .⁎✿ *.ᴛᴏɢɪꜰᴀᴜᴅ* ✿⁎.
  .⁎✿ *.ᴛᴏɪᴍɢ* ✿⁎.
  .⁎✿ *.ᴛᴏᴀᴜᴅɪᴏ* ✿⁎.

  🌴 乂 *\`ᴀᴅᴍɪɴ\`* 乂 🌴

  .⁎✿ *.ᴀᴅᴅᴘʀᴇᴍ2 <@ᴛᴀɢ> <ᴅᴀʏꜱ>* ✿⁎.
  .⁎✿ *.ᴀᴅᴅʏᴇɴ2 <@ᴛᴀɢ>* ✿⁎ 
  > *© ⍴᥆ᥕᥱrᥱძ ᑲᥡ fedelanYT*
`.trim()

  await conn.sendMessage(m.chat, {
  text: txt,
  contextInfo: {
    mentionedJid: [m.sender, userId],
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: channelRD.id, // Asegúrate de que channelRD esté definido
      newsletterName: channelRD.name, // Asegúrate de que channelRD esté definido
      serverMessageId: -1,
    },
    forwardingScore: 16,
    externalAdReply: {
      title: "✨ Goku-Bot ✨ World Of Cute", // Título del reply con símbolos
      body: "➤ Powered By fedelanY ★", // Cuerpo del reply con símbolos
      thumbnailUrl: banner, // Asegúrate de que banner esté definido (URL o ruta a la imagen)
      sourceUrl: "https://chat.whatsapp.com/FX6eYrqXtt9L76NDpOm2K7", // Asegúrate de que la URL sea correcta
      mediaType: 1, // Tipo de media (1 para imagen)
      showAdAttribution: true,
      renderLargerThumbnail: true
    }
  }
}, { quoted: m });

}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']

export default handler

function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor((ms % 3600000) / 60000);
    let s = Math.floor((ms % 60000) / 1000);
    let parts = [];
    if (h > 0) parts.push(`${h}h`);
    if (m > 0) parts.push(`${m}m`);
    if (s > 0 || parts.length === 0) parts.push(`${s}s`);

    return parts.join(' ');
        }
