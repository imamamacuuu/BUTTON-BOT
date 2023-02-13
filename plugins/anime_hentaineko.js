import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/nsfw/neko')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendFile(m.chat, json.url,"","", m)
}
handler.help = ['hneko']
handler.tags = ['internet']
handler.command = /^(hneko)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler