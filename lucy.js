module.exports.config = {
  name: "lucy",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kadeer",
  description: "Lucy Fairy Tail",
  commandCategory: "Random-IMG",
  usages: "lucy",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://apilucy.khoahoang3.repl.co').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `ðļððð°ð ðŧðēĖ <ðŊ\nðļðĶðžĖĖ ðŪĖðŧðĩ ðĩðķðēĖĢĖðŧ ð°ðžĖ: ${count} ðŪĖðŧðĩ`,
            attachment: fs.createReadStream(__dirname + `/cache/lucy.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/lucy.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/lucy.${ext}`)).on("close", callback);
      })
}