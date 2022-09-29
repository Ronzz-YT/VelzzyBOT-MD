// support instagram, facebook, bili bili, twitter, any more
const cheerio = require('cheerio')
const fetch = require('node-fetch')
/**
 *
 * @param {String} url url of the website
 * @returns {Promise<String>}b
 */
async function getToken(url) {
  const html = await fetch('https://downvideo.quora-wiki.com/tiktok-video-downloader#url=' + url)
  const $ = cheerio.load(await html.text())
  const token = $('#token').attr('value')
  return token
}

module.exports = {
  /**
   * scraper support instagram, facebook, bili bili, twitter, any more
   * @param {String} url url of the social media
   * @returns {Promise<object>}
   */
  async metaScrape(url) {
    return new Promise(async (resolve, reject) => {
      const token = await getToken(url)
      const data = await fetch('https://downvideo.quora-wiki.com/system/action.php', {
        method: 'POST',
        body: new URLSearchParams(
          Object.entries({
            url,
            token,
          })
        ),
        headers: {
          Referer: 'https://downvideo.quora-wiki.com/tiktok-video-downloader',
        },
      })
      if (data.status !== 200) return reject(data.status)
      const json = await data.json()
      resolve(json)
    })
  },
}
