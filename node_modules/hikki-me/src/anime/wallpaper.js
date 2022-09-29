const fetch = require('node-fetch')
const cheerio = require('cheerio')

module.exports = {
  /**
   * get wallpaper from https://www.peakpx.com/en
   * @param {String} query query to search
   * @returns {Promise<Object>}
   */
  async animeWallpaper(query) {
    return new Promise(async (resolve, reject) => {
      const data = await fetch('https://www.peakpx.com/en/search?q=' + query + '&page=' + Math.floor(Math.random() * (20 - 1 + 1) + 1))
      const resuit = []
      const $ = cheerio.load(await data.text())
      $('#list_ul > li').each((i, el) => {
        const img = $(el).find('figure > a').find('img').attr('data-src')
        if (!img) return
        resuit.push(img.replace(/-thumbnail/g, ''))
      })
      resolve(resuit)
    })
  },
}
