const { default: fetch } = require('node-fetch')
const { expandedUrl } = require('../tools')
const { metaScrape } = require('./meta-scraper')

module.exports = {
  async tiktokDownloader(url, { withNoWm }) {
    return new Promise(async (resolve, reject) => {
      url = await expandedUrl(url)
      const api_tiktok = `https://tiktok.com/node/share/video/${url.split('/')[3]}/${url.split('/')[5]}`
      const response = await fetch(api_tiktok, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36 Edg/84.0.522.52',
        },
      })
      const res = await response.json()
      const data = withNoWm ? await metaScrape(url) : {}
      const result = res.seoProps
      const json = {
        ...result.metaParams,
        ...res.itemInfo.itemStruct,
        data: data
      }

      resolve(json)
    })
  },
}
