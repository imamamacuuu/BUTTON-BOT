import * as fs from 'fs';
import * as path from 'path'
let handler = async (m, { conn, text, participants, isAdmin, isOwner }) =>{ 

const directory = "./tmp";
  
fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(directory, file), (err) => {
      if (err) throw err;
    });
  }
});  
  
fs.writeFile('./data.store.json', '', function(){console.log('done')})  
  
fs.readdir(directory, (err, files) => {
  let banyak=files.length
  conn.sendMessage(m.chat, {text:`*Bot udah di baptis masbro : ${banyak} Dosa sudah dihapus*`,mentions: participants.map(a => a.id)}, { quoted: m })
  console.log(files.length);  
});
  
}

handler.help = ['baptis']
handler.tags = ['group']
handler.command = ['baptis']
handler.owner = true
handler.group = false

export default handler
