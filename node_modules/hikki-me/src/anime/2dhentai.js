const fetch = require('node-fetch')
const cheerio = require('cheerio')

module.exports = {
  /**
   * mendapatkan url hentai terbaru
   * @returns {Promise<Array<string>>}
   */
  async getHotPic() {
    return new Promise(async (resolve, reject) => {
      const response = await fetch('https://2dhentai.club/', {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36',
        },
      })
      const html = await response.text()
      const $ = cheerio.load(html)
      let hotPic = []
      $('div')
        .find('a')
        .each((index, element) => {
          if (index < 8) return true
          const href = $(element).attr('href')
          if (hotPic.includes(href)) return true
          if (href.endsWith('#comments')) return true
          hotPic.push(href)
        })
      const resuit = hotPic.slice(0, -3)
      resolve(resuit)
    })
  },
  async randomHentai() {
    return new Promise(async (resolve, reject) => {
      const random = Math.floor(Math.random() * (150 - 2 + 1)) + 2
      const response = await fetch('https://2dhentai.club/page/' + random + '/', {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36',
        },
      })
      const html = await response.text()
      const $ = cheerio.load(html)
      let hotPic = []
      $('div')
        .find('a')
        .each((index, element) => {
          if (index < 8) return true
          const href = $(element).attr('href')
          if (hotPic.includes(href)) return true
          if (href.endsWith('#comments')) return true
          hotPic.push(href)
        })
      const resuit = hotPic.slice(0, -3)
      resolve(resuit)
    })
  },
  /**
   * mendapatkan url hentai dari nama karakter
   * @param {string} name nama karakter
   * @returns {Promise<string>}
   * @example getCharacterHentaiByName('naruto').then(console.log)
   **/
  async getCharacterHentaiByName(name) {
    return new Promise(async (resolve, reject) => {
      const response = await fetch('https://2dhentai.club/?s=' + name)
      const html = await response.text()
      const $ = cheerio.load(html)
      let hotPic = []
      $('div.post-container').each((index, element) => {
        const href = $(element).find('a').attr('href')
        hotPic.push(href)
      })
      resolve(hotPic)
    })
  },
  /**
   * mendapatkan url hentai dari nama karakter serta mendapatkan lansung raw url hentai dengan kualitas sd. jika ingin hd gunakan getCharacterHentaiByName dan download dengan getUrl
   * @param {String} name nama karakter
   * @returns {Promise<string[]>}
   */
  async getCharacterHentaiByNameAndGetRawURL(name) {
    return new Promise(async (resolve, reject) => {
      const response = await fetch('https://2dhentai.club/?s=' + name)
      const html = await response.text()
      const $ = cheerio.load(html)
      let hotPic = []
      $('div.post-container').each((index, element) => {
        const href = $(element).find('img').attr('data-src')
        hotPic.push(href)
      })
      resolve(hotPic)
    })
  },
  /**
   * download bokep udin
   * @param {String} url link hentai from https://2dhentai.club/
   * @returns {Promise<String>} link image
   */
  async getUrl(url) {
    return new Promise(async (resolve, reject) => {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36',
        },
      })
      const html = await response.text()
      const $ = cheerio.load(html)
      const img = $('div').find('figure').find('img').attr('data-src')
      resolve(img)
    })
  },
}
