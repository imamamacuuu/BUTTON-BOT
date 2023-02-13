import fetch from 'node-fetch'
// async function reddit(query) {
// /let res = await fetch('https://kuntulscrape.imamamaco.repl.co/${query}/100')
let handler = async (m, { conn, text, usedPrefix, command}) => {
    let res = await fetch('https://kuntulscrape.imamamaco.repl.co/'+text+'/100')
    if (!res.ok) throw await res.text()
  if (!text) throw `Use example ${usedPrefix}${command} Meme`
    let json = await res.json()
    if (!json.url) throw 'Error!'
    await conn.sendButton(m.chat, `Reddit`, author, json.url, [[`r/${text}`, `,r ${text}`]], m)
}
handler.help = ['reddit subreddit','r subreddit']
handler.tags = ['internet']
handler.command = /^(reddit|r)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler
// import cheerio from 'cheerio'
// import got from 'got'

// async function googleImage(query) {
//   const data = await got(`https://104.149.167.110/search?q=${query}&tbm=isch`, {
//     headers: {
//       'sec-ch-ua':
// 					'"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',

//     accept:				'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
//       'accept-encoding': 'gzip, deflate, br',      
//       'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en-GB;q=0.7,en;q=0.6,ms;q=0.5',
//       'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
//     }
//   }).text();
//   const $ = cheerio.load(data);
//   const pattern = /\[1,\[0,"(?<id>[\d\w\-_]+)",\["https?:\/\/(?:[^"]+)",\d+,\d+\]\s?,\["(?<url>https?:\/\/(?:[^"]+))",\d+,\d+\]/gm;
//   const matches = $.html().matchAll(pattern);

//   const decodeUrl = url => decodeURIComponent(JSON.parse(`"${url}"`));

//   return [...matches].map(({
//     groups
//   }) => decodeUrl(groups === null || groups === void 0 ? void 0 : groups.url)).filter(v => /.*\.jpe?g|png$/gi.test(v));
// }

// let handler = async (m, { conn, text, usedPrefix, command }) => {
//     if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
//     const res = await googleImage(text)
//     conn.sendFile(m.chat, res.getRandom(), 'gimage.jpg', `
// *── 「 GOOGLE IMAGE 」 ──*

// Result from *${text}*
// `.trim(), m)
// }
// handler.help = ['gimage <query>', 'image <query>']
// handler.tags = ['internet', 'tools']
// handler.command = /^(gimage|image)$/i

// export default handler