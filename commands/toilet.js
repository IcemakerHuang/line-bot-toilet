import axios from 'axios'
import replyTemplate from '../templates/replies.js'
import { distance } from './distance.js'

export default async (event) => {
  try {
    console.log('AAAAAA')
    // 抓自己的位置
    // 算距離 符合某一個條件
    const { data } = await axios.get('https://raw.githubusercontent.com/IcemakerHuang/Json/main/data/Data_TPE%2BNTPC.json')
    const box = []
    data
      .map((value) => {
        value.distance = distance(
          event.message.latitude,
          event.message.longitude,
          value.latitude,
          value.longitude,
          'K'
        )
        console.log(event.message.latitude)
        console.log(value)
        return value
      })
      .filter((value) => {
        return value.distance < 10
      })
      .sort((a, b) => {
        return a.distance - b.distance
      })
      .slice(0, 3)
      .forEach((value) => {
        const msg = replyTemplate()
        msg.contents[0].hero.url = 'https://img.ltn.com.tw/Upload/news/600/2022/04/19/3898832_1_1.jpg'
        msg.contents[0].body.contents[0].text = value.name
        box.push(msg)
        console.log(value)
        // const msg = replyTemplate()
        // msg.hero.url = 'https://img.ltn.com.tw/Upload/news/600/2022/04/19/3898832_1_1.jpg'
        // msg.body.contents[0].text = value.name
        // box.push(msg)
        // console.log(value)
      })

    const result = await event.reply({
      type: 'flex',
      altText: '查詢結果',
      contents: {
        type: 'carousel',
        contents: box
      }
    })
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}
// import fs from 'fs'
// import util from 'util'
// import replyTemplate from '../templates/replies.js'
// import { distance } from './distance.js'

// const readFile = util.promisify(fs.readFile)
// export default async (event) => {
//   try {
//     console.log('AAAAAA')
//     // 读取本地 JSON 文件
//     const dataString = await readFile('../data/Data_All.json', 'utf8')
//     const data = JSON.parse(dataString)
//     const box = []

//     data.map((value) => {
//       value.distance = distance(
//         event.message.latitude,
//         event.message.longitude,
//         value.latitude,
//         value.longitude,
//         'K'
//       )
//       console.log(event.message.latitude)
//       console.log(value)
//       return value
//     })
//       .filter((value) => {
//         return value.distance < 10
//       })
//       .sort((a, b) => {
//         return a.distance - b.distance
//       })
//       .slice(0, 3)
//       .forEach((value) => {
//         const msg = replyTemplate()
//         msg.hero.url = 'https://img.ltn.com.tw/Upload/news/600/2022/04/19/3898832_1_1.jpg'
//         msg.body.contents[0].text = value.name
//         box.push(msg)
//         console.log(value)
//       })

//     const result = await event.reply({
//       type: 'flex',
//       altText: '查詢結果',
//       contents: {
//         type: 'carousel',
//         contents: box
//       }
//     })
//     console.log(result)
//   } catch (error) {
//     console.log(error)
//   }
// }
