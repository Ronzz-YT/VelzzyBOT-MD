/*
 * mulut tuh di jaga. jangan di kontol kontolin, di kentod kentotin, di anjing anjingin
 * jangan lupa follow ig @hardianto02_
 * jangan hapus author asli, jika ingin menghapus author asli, silahkan hubungi hardianto02_  untuk gelud bersama
 */
const { default: axios } = require('axios')
const fetch = require('node-fetch').default
const { randomBytes } = require('crypto')
const { fromBuffer } = require('file-type')
const Image = require('node-webpmux').Image
const Formdata = require('form-data')
const fs = require('fs')
const toBuffer = async (file) => {
  file = Buffer.isBuffer(file) ? file : typeof file === 'string' && file.startsWith('http') ? (await axios.get(file, {
    responseType: 'arraybuffer',
  })).data : fs.readFileSync(file)
  const buffer = await fromBuffer(file)
  return { buffer: file, mime: buffer.mime }
}
const config = {
  sessionInfo: {
    WA_VERSION: '2.2106.5',
    PAGE_UA: 'WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
    WA_AUTOMATE_VERSION: '3.6.10 UPDATE AVAILABLE: 3.6.11',
    BROWSER_VERSION: 'HeadlessChrome/88.0.4324.190',
    OS: 'Windows Server 2016',
    START_TS: 1614310326309,
    NUM: '6247',
    LAUNCH_TIME_MS: 7934,
    PHONE_VERSION: '2.20.205.16',
  },
  config: {
    sessionId: 'session',
    headless: true,
    qrTimeout: 20,
    authTimeout: 0,
    cacheEnabled: false,
    useChrome: true,
    killProcessOnBrowserClose: true,
    throwErrorOnTosBlock: false,
    chromiumArgs: ['--no-sandbox', '--disable-setuid-sandbox', '--aggressive-cache-discard', '--disable-cache', '--disable-application-cache', '--disable-offline-load-stale-cache', '--disk-cache-size=0'],
    executablePath: 'C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe',
    skipBrokenMethodsCheck: true,
    stickerServerEndpoint: true,
  },
}

/**
 * unshorten url
 * @param {String} url url of the website
 * @returns {Promise<String>}
 */
exports.expandedUrl = async (url) => {
  return await fetch(url).then(res => res.url)
}

exports.setExif = async (webpSticker, packname, author, extra = {}) => {
  return new Promise(async (resolve, reject) => {
    const img = new Image()
    const stickerPackId = randomBytes(16).toString('hex').slice(0, 8)
    const json = {
      'sticker-pack-id': stickerPackId,
      'sticker-pack-name': packname,
      'sticker-pack-publisher': author,
      'sticker-pack-publisher-id': author,
      'sticker-pack-version': '1.0.0',
      'android-app-store-link': 'https://hardianto.xyz',
      'ios-app-store-link': 'https://hardianto.xyz',
      'sticker-pack-description': 'sticker ini merupakan sticker yang telah di generate oleh jamal',
      emojis: ['❤', '😍', '😘', '💕', '😻', '💑', '👩‍❤‍👩', '👨‍❤‍👨', '💏', '👩‍❤‍💋‍👩', '👨‍❤‍💋‍👨', '🧡', '💛', '💚', '💙', '💜', '🖤', '💔', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '💋', '👩‍❤️‍💋‍👩', '👨‍❤️‍💋‍👨', '👩‍❤️‍👨', '👩‍❤️‍👩', '👨‍❤️‍👨', '👩‍❤️‍💋‍👨', '👬', '👭', '👫', '🥰', '😚', '😙', '👄', '🌹', '😽', '❣️', '❤️', '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '🙂', '😛', '😝', '😜', '🤪', '🤗', '😺', '😸', '😹', '☺', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈', '👯‍♂️', '👯', '👯‍♀️', '💃', '🕺', '🔥', '⭐️', '✨', '💫', '🎇', '🎆', '🍻', '🥂', '🍾', '🎂', '🍰', '☹', '😣', '😖', '😫', '😩', '😢', '😭', '😞', '😔', '😟', '😕', '😤', '😠', '😥', '😰', '😨', '😿', '😾', '😓', '🙍‍♂', '🙍‍♀', '💔', '🙁', '🥺', '🤕', '☔️', '⛈', '🌩', '🌧,😯', '😦', '😧', '😮', '😲', '🙀', '😱', '🤯', '😳', '❗', '❕', '🤬', '😡', '😠', '🙄', '👿', '😾', '😤', '💢', '👺', '🗯️', '😒', '🥵', '👋'],
      ...extra,
    }
    let exifAttr = Buffer.from([0x49, 0x49, 0x2a, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
    let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
    let exif = Buffer.concat([exifAttr, jsonBuffer])
    exif.writeUIntLE(jsonBuffer.length, 14, 4)
    await img.load(webpSticker)
    img.exif = exif
    return resolve(await img.save(null))
  })
}
/**
 * implement the sticker generator from @rayyreal
 * @param {Buffer | String} file serah lu
 * @param {Object} data config untuk sticker
 * @returns {Promise<Buffer>}
 */
exports.makeSticker = async (
  file,
  datao = {
    author: '',
    pack: '',
    keepScale: true,
    removebg: 'HQ',
    circle: false,
  }
) => {
  return new Promise(async (resolve, reject) => {
    const buffer = await toBuffer(file)
    if (buffer.mime == 'image/webp') return resolve(await this.setExif(buffer.buffer, datao.pack, datao.author))
    const config2 = {
      ...datao,
      processOptions: {
        crop: !datao.keepScale,
        fps: 10,
        startTime: '00:00:00.0',
        endTime: '00:00:7.0',
        loop: 0,
      },
    }
    const DEFAULT_URL = 'https://sticker-api.openwa.dev/'
    let Type = buffer.mime.includes('image') ? 'image' : 'file'
    let url = String(`${DEFAULT_URL}${Type === 'image' ? 'prepareWebp' : 'convertMp4BufferToWebpDataUrl'}`)
    await axios(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, /',
        'Content-Type': 'application/json;charset=utf-8',
        'User-Agent': 'WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
      },
      data: JSON.stringify(
        Object.assign(
          config,
          { stickerMetadata: config2 },
          {
            [Type]: `data:${buffer.mime};base64,${buffer.buffer.toString('base64')}`,
          }
        )
      ),
      maxBodyLength: Infinity,
      maxContentLength: Infinity,
    })
      .then(async ({ data }) => {
        if (Type === 'image') return resolve(await this.setExif(Buffer.from(data.webpBase64, 'base64'), datao.author, datao.pack))
        else {
          const webpBase = data.replace(/^data:(.*?);base64,/, '')
          const webpBase64 = webpBase.replace(/ /g, '+')
          const file = Buffer.from(webpBase64, 'base64')
          resolve(await this.setExif(file, datao.pack, datao.author))
        }
      })
      .catch((err) => reject(err))
  })
}
