import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix }) => {
    let res = await fetch('https://vercelapi-fj44id4fc-imamamacuuu.vercel.app/'+text)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendFile(m.chat, json.url, text, text, m, false, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['hneko']
handler.tags = ['internet']
handler.command = /^(gu)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler