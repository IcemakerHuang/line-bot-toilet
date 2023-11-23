import 'dotenv/config'
import linebot from 'linebot'
import fe from './commands/fe.js'
import be from './commands/be.js'
import anime from './commands/anime.js'
import { scheduleJob } from 'node-schedule'
import * as usdtwd from './data/usdtwd.js'
import toilet from './commands/toilet.js'

// https://crontab.guru/once-a-day
scheduleJob('0 0 * * *', () => {
  usdtwd.update()
})
usdtwd.update()

// 基本機器人架構
// 之後可以把帳號資訊放進.env
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

// 當收到訊息時執行一個fn
// 把太多指令拆掉，變成fe，再import呼叫指令回來
bot.on('message', (event) => {
  if (process.env.DEBUG === 'true') {
    console.log(event)
  }
  // console.log(123)
  if (event.message.type === 'text') {
    if (event.message.text === '前端') {
      fe(event)
    } else if (event.message.text === '後端') {
      // console.log(456)
      be(event)
    } else if (event.message.text.startsWith('動畫')) {
      // 動畫14882
      anime(event)
    } else if (event.message.text === '匯率') {
      event.reply(usdtwd.exrate.toString())
    } else if (event.message.text === '123') {
      event.reply({
        type: 'text',
        text: '123',
        quickReply: {
          items: [
            {
              type: 'action',
              action: {
                // 傳訊息
                type: 'message',
                // 傳送的文字
                text: 'message text',
                // 按鈕的文字
                label: 'message'
              }
            },
            {
              type: 'action',
              action: {
                type: 'cameraRoll',
                label: '相簿'
              }
            },
            {
              type: 'action',
              action: {
                type: 'cameraRoll',
                label: '位置'
              }
            },
            {
              type: 'action',
              action: {
                type: 'uri',
                uri: 'https://wdaweb.github.io',
                label: '網址'
              }
            },
            {
              type: 'action',
              action: {
                type: 'postback',
                label: 'postback',
                // 傳送的文字
                // text: 'postback 文字'
                // postback 事件接收到的資訊
                data: '111222333'
              }
            }
          ]
        }
      })
    } else if (event.message.text === 'location') {
      toilet(event)
    }
  }
})
bot.on('postback', (event) => {
  console.log(event.postback.data)
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
// 上面'/'代表 賴裡面 Webhook URL 後面網址要接上什麼。
// 連接埠 3000、可見度公開、轉送位置貼webhook URL
// 雲端30min沒回機器人將自動休眠，之後再傳訊息即可復甦，但可能晚回
