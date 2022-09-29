const axios = require('axios')
const yts = require('yt-search')

/**
 * Get video from youtube by url and all in one 12 version mime type
 * @param {Sting} url url video youtube
 * @returns {Promise<Object>}
 * @example youtube('https://www.youtube.com/watch?v=dQw4w9WgXcQ').then(console.log) // return object
 */
exports.youtube = async (url) => {
  return new Promise(async (resolve, reject) => {
    if (!url) {
      reject('No url provided')
    }
    const form = new URLSearchParams(Object.entries({ url }))
    await axios
      .post('https://api.onlinevideoconverter.pro/api/convert', form, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36',
        },
      })
      .then(({ data }) => {
        resolve(data)
      })
      .catch((err) => {
        resolve({
          status: false,
          statusCode: err.config.status,
          message: 'Url not found',
          contact: `https:wa.me/62895325697662?text=error+dek`,
        })
      })
  })
}
/**
 * [Deprecated] COMBINATE WITH YOUTUBE SEAERCH
 * @param {String} query judul atau title yang ingin di cari
 * @returns {Promise<Object>}
 * @example youtubePlay('light switch').then(console.log)
 */
exports.youtubePlay = async (query) => {
  return new Promise(async (resolve, reject) => {
    const response = await yts(query)
    this.youtube(response.videos[0].url).then(resolve).catch(reject)
  })
}
