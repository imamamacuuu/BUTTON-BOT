import fetch from 'node-fetch'
// async function reddit(query) {
// /let res = await fetch('https://kuntulscrape.imamamaco.repl.co/${query}/100')
let handler = async (m, { conn, text, usedPrefix, command}) => {
    let res = await fetch('https://mengontol.imamamaco.repl.co/'+text)
    if (!res.ok) throw await res.text()
  if (!text) throw `Use example ${usedPrefix}${command} Meme`
    let json = await res.json()
    if (!json.image) throw 'Error!'
    conn.sendFile(m.chat, json.url, text, text, m, false, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['d search','duck search']
handler.tags = ['internet']
handler.command = /^(duck|d)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler
// import cheerio from 'cheerio'