import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/nsfw/trap')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendFile(m.chat, json.url,"","", m)
}
handler.help = ['futa']
handler.tags = ['internet']
handler.command = /^(futa)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler