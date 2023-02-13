let handler = async (m, { conn, text, participants, isAdmin, isOwner }) =>{ 
conn.sendMessage(m.chat, {text:"*@everyone*",mentions: participants.map(a => a.id)}, { quoted: m })
}

handler.help = ['summon']
handler.tags = ['group']
handler.command = ['summon']
handler.owner = true
handler.group = true

export default handler
