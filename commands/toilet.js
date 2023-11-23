import axios from 'axios'
import replyTemplate from '../templates/replies.js'
import { distance } from './distance.js'

export default async (event) => {
  try {
    // 抓自己的位置
    // 算距離 符合某一個條件
    const { data } = await axios.get('../data/Data_TPE+NTPC(format).json')
    const msg = []
    for (let i = 0; i < data.length; i++) {
      const lat1 = event.message.latitude
      const lon1 = event.message.longitude
      const lat2 = data[0].latitude
      const lon2 = data[0].longitude

      const dist = distance(lat1, lon1, lat2, lon2, 'K')
      if (dist < 3) {
        console.log(data[i])
        msg.push(data[i])
      }
    }
    const template = replyTemplate()
    template.body.contents[0].contents[0].text = msg.data[]
  } catch (error) {
    console.log(error)
  }
}
