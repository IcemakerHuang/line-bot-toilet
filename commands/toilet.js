import axios from 'axios'

export default async (event) => {
  try {
    const { data } = await axios.get('../data/Data_TPE+NTPC(format).json')
    // data是資料整個的 {}

    const replies = []
    replies.push(`${data}`)
    event.reply(replies)
  } catch (error) {
    console.log(error)
  }
}
