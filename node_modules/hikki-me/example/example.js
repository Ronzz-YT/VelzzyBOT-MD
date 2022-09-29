const hikki = require('../src/index.js')
// game

// top up free fire
// async function topupFreeFire() {
// const makeSession = await hikki.game.topupFreeFire('239814337', '70') // support nominal 5 12 70 140 355 720'
// return await hikki.game.payDiamond(makeSession, '08953225697662')
// }
// topupFreeFire().then(console.log).catch(console.error)

// nickname free fire
// hikki.game.nickNameFreefire('239814337').then(console.log).catch(console.error)

// nickname mobile legend
// hikki.game.nickNameMobileLegends('109088431', '2558').then(console.log).catch(console.error)

// nickname supersus
// hikki.game.superSusChecker('20431364').then(console.log).catch(console.error)

// downloader features
// hikki.downloader.facebookDownload('https://www.facebook.com/mhmd.farid.908/videos/473529950837803/').then(console.log).catch(console.error)

// meta scrap features
// hikki.downloader.metaScrape('https://vt.tiktok.com/ZSdeRDb3U//').then(console.log).catch(console.error)

// tiktok downloader
// hikki.downloader.tiktokDownloader('https://vt.tiktok.com/ZSdeRDb3U/', {withNoWm: true}).then(console.log).catch(console.error)

// youtube play downloader
// hikki.downloader.youtubePlay('light switch').then(console.log).catch(console.error)

// instagram downloader 
// hikki.downloader.instagram('https://www.instagram.com/p/Cf58iIUL1TE/?utm_source=ig_web_copy_link').then(console.log).catch(console)

// weebs
// wallpaper
// hikki.anime.animeWallpaper('keqing').then(console.log).catch(console.error)

// hentai
// async function janji_ngk_coli() {
// await hikki.anime.getHotPic().then(console.log).catch(console.error)
// await hikki.anime.randomHentai().then(console.log).catch(console.error)
// await hikki.anime.getCharacterHentaiByNameAndGetRawURL('keqing').then(console.log).catch(console.error) // sd quality tapi banyak

// for one picture
// const jangan = await hikki.anime.getCharacterHentaiByName('keqing')
// await hikki.anime.getUrl(jangan[0]).then(console.log).catch(console.error) // hd quality++ ngk obat
// }
// janji_ngk_coli()

// tools
// make sticker
// hikki.tools.makeSticker('https://w0.peakpx.com/wallpaper/929/489/HD-wallpaper-keqing-portrait-genshin-impact.jpg', {
//     author: 'hikki',
//     pack: 'keqing',
//     // circle: true, // default false
//     // keepScale: true, // default false
// }).then(console.log).catch(console.error)
// expand url
// hikki.tools.expandedUrl('https://vt.tiktok.com/ZSdeRDb3U/').then(console.log).catch(console.error)

// async function gopay(idProduct, PhoneNumber) {
//     const csrf = await csrfGenerator()
//     const { data } = await listProduct(csrf)
//     // console.log(data) untuk melihat id product yang tersedia
//     const isValidId = data.daftar_product.find(product => product.id == idProduct)
//     if (!isValidId) return console.error('invalid id product')
//     const gass = await convertGopay(idProduct,PhoneNumber, csrf)
//     if (!'qr' in gass) return console.error('kurang ganteng')
//     return {
//         creator: '@hardianto02_',
//         ...gass,
//         ...isValidId
//     }
// }

// gopay(24, '085173222764').then(console.log).catch(console.error)

// elon talks
// hikki.maker.elonTalks(1, 'beliau kocak geming').then(console.log).catch(console.error)