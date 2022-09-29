const fetch = require('node-fetch')
const cheerio = require('cheerio')
module.exports = {
  async facebookDownload(url) {
    return new Promise(async (resolve, reject) => {
      const data = await fetch('https://www.getfvid.com/downloader', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Referer: 'https://www.getfvid.com/',
        },
        body: new URLSearchParams(
          Object.entries({
            url,
          })
        ),
      })
      const $ = cheerio.load(await data.text())
      resolve({
        creator: '@hadianto02_',
        status: 'ok',
        statusCode: 200,
        result: {
          url: url,
          title: $('body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-5.no-padd > div > h5 > a').text(),
          time: $('#time').text(),
          hd: $('body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(1) > a').attr('href'),
          sd: $('body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(2) > a').attr('href'),
          audio: $('body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(3) > a').attr('href'),
        },
      })
    })
  },
}
