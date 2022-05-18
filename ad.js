module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "TuanDz",
  description: "info admin nè",
  commandCategory: "Admin",
  usages: "ad",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/tmv33JS.jpg",
"https://i.imgur.com/zP3JK9m.jpg",
"https://i.imgur.com/kUrgX0B.jpg",
"https://i.imgur.com/r21Eivn.jpg",
"https://i.imgur.com/OSLSsP0.jpg",
"https://i.imgur.com/1iQU40X.jpg",
"https://i.imgur.com/s5lrZOl.jpg",
"https://i.imgur.com/9ANPy00.jpg",
"https://i.imgur.com/Grmt2zM.jpg",
"https://i.imgur.com/VJi1ufD.jpg",
"https://i.imgur.com/eKJb4C9.jpg",
"https://i.imgur.com/0oLMzJA.jpg",
"https://i.imgur.com/KMPeebi.jpg",
  ];
	  var callback = () => api.sendMessage({body:`ㅤㅤ🌸 𝐀𝐃𝐌𝐈𝐍 𝐁𝐎𝐓 🌸\n
👀 𝐓𝐞̂𝐧: 𝑵𝒈𝒖𝒚𝒆̂̃𝒏 𝑷𝒉𝒂̣𝒎 𝑴𝒊𝒏𝒉 𝑻𝒖𝒂̂́𝒏 (𝗧𝘂𝗮𝗻 𝗗𝘇)
❎ 𝐓𝐮𝐨̂̉𝐢: 9
👤 𝐆𝐢𝐨̛́𝐢 𝐓𝐢́𝐧𝐡: 𝗡𝗮𝗺
💫 𝐂𝐡𝐢𝐞̂̀𝐮 𝐜𝐚𝐨 𝐜𝐚̂𝐧 𝐧𝐚̣̆𝐧𝐠: 𝟭𝗺𝟳 𝘅 𝟱𝟮𝗸𝗴
💘 𝐌𝐨̂́𝐢 𝐪𝐮𝐚𝐧 𝐡𝐞̣̂: 𝗙.𝗔
🌎 𝐐𝐮𝐞̂ 𝐪𝐮𝐚́𝐧: 𝗖𝗮̂̀𝗻 𝗧𝗵𝗼̛
👫 𝐆𝐮: 𝗕𝗶𝗲̂́𝘁 𝗻𝗮̂́𝘂 𝗰𝗼̛𝗺, 𝗱𝗮𝗺𝗱𝗮𝗻𝗴
🌸 𝐓𝐢́𝐧𝐡 𝐜𝐚́𝐜𝐡: 𝗖𝗵𝗼́ 𝗱𝗮̣𝗶
🌀 𝐒𝐨̛̉ 𝐭𝐡𝐢́𝐜𝐡: 𝗖𝗵𝗼̛𝗶 𝗴𝗮𝗺𝗲, 𝘅𝗲𝗺 𝗽𝗵𝗶𝗺 𝟭𝟴+ 𝗯𝗹𝗮𝗯𝗹𝗮, 𝗮̆𝗻, 𝗻𝗴𝘂̉
💻𝐂𝐨𝐧𝐭𝐚𝐜𝐭💻
☎ 𝗦𝗗𝗧 & 𝗭𝗮𝗹𝗼: 𝟬𝟱𝟴.𝟮𝟲𝟬𝟳.𝟬𝟲𝟱
🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: https://www.facebook.com/TuannDzz123/ 🌺`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };