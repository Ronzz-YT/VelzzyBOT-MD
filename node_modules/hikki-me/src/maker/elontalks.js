const { default: axios } = require('axios')
const fakeUseragent = require('fake-useragent')
const ua = fakeUseragent()
module.exports = {
  /**
   * elon talks meme
   * @param {number} type 1-6 type
   * @param {String} text text min 10 - max 256 characters
   */
  async elonTalks(type, text) {
    if (!type || !text) return { error: 'missing params' }
    if (type < 1 || type > 6) return { error: 'type must be 1-6' }
    if (text.length < 10 || text.length > 256) return { error: 'text must be 10-256 characters' }
    const response = await axios
      .post(
        'https://api.elontalks.com/generate',
        JSON.stringify({
          video: type,
          text: text,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            referer: 'https://elontalks.com/',
            'User-Agent': ua,
          },
        }
      )
      .then((res) => res.data)
    // membuat perulangan untuk mengecek apakah proggres mencapai 100
    let i = 0
    while (response.id) {
      await delay(5000)
      const status = await axios.get(`https://api.elontalks.com/status/${response.id}`).then((res) => res.data)
      console.log(status)
      if (status.status == 'done') {
        return {
          status: 'success',
          author: '@hardianto02',
          url: `https://elontalks.s3.amazonaws.com/${response.id}.mp4`,
        }
      } else if (status.status == 'error') {
        return {
          status: 'error',
          error: 'failed to generate video',
        }
      }
    }
  },
}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
