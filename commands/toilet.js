import axios from 'axios'
import replyTemplate from '../templates/replies.js'
import { distance } from './distance.js'

export default async (event) => {
  try {
    console.log('AAAAAA')
    // 抓自己的位置
    // 算距離 符合某一個條件
    const { data } = await axios.get('../data/Data_TPE+NTPC(format).json')
    const box = []
    data
      .map((value) => {
        value.distance = distance(
          event.message.latitude,
          event.message.longitude,
          data[0].latitude,
          data[0].longitude,
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
        msg.hero.url = 'https://img.ltn.com.tw/Upload/news/600/2022/04/19/3898832_1_1.jpg'
        msg.body.contents[0].text = value.name
        box.push(msg)
        console.log(value)
      })

    const result = await event.reply({
      type: 'flex',
      altText: '查詢結果',
      contents: {
        type: 'carousel',
        contents: 'temples'
      }
    })
    console.log(result)
    // for (let i = 0; i < data.length; i++) {
    //   const lat1 = event.message.latitude
    //   const lon1 = event.message.longitude
    //   const lat2 = data[0].latitude
    //   const lon2 = data[0].longitude

    //   const dist = distance(lat1, lon1, lat2, lon2, 'K')
    //   if (dist < 3) {
    //     console.log(data[i])
    //     msg.push(data[i])
    //   }
    // }

    // const template = replyTemplate()
    // template.body.contents[0].contents[0].text = msg.data[]
  } catch (error) {
    console.log(error)
  }
}
