
# hikki-me

our features are few but we provide the best and it is not uncommon to find in other npmjs

![Logo](https://github.com/hardianto-cpu/hikki-me/blob/main/example/banner.png)


## Installation

Install hikki-me with npm

```bash
npm install hikki-me
```
install latest version

```bash
npm install github:hardianto-cpu/hikki-me
```

## How Use?

```javascript
const hikki = require('hikki-me')
```
# Game Feature
## Clash Of Clans

```js
hikki.game.getInfoClasher('#PP9QY2U2Q').then(console.log)
```
*return*
```txt
{
  tag: '#PP9QY2U2Q',
  name: 'Hardianto',
  townHallLevel: 11,
  expLevel: 133,
  trophies: 2500,
  bestTrophies: 2924,
  warStars: 292,
  attackWins: 16,
  defenseWins: 3,
  builderHallLevel: 7,
  versusTrophies: 2664,
  bestVersusTrophies: 3314,
  versusBattleWins: 1188,
  donations: 0,
  donationsReceived: 0,
  league: {
    id: 29000012,
    name: 'Crystal League I',
    iconUrls: {
      small: 'https://api-assets.clashofclans.com/leagues/72/kSfTyNNVSvogX3dMvpFUTt72VW74w6vEsEFuuOV4osQ.png',
      tiny: 'https://api-assets.clashofclans.com/leagues/36/kSfTyNNVSvogX3dMvpFUTt72VW74w6vEsEFuuOV4osQ.png',
      medium: 'https://api-assets.clashofclans.com/leagues/288/kSfTyNNVSvogX3dMvpFUTt72VW74w6vEsEFuuOV4osQ.png'
    }
  }
  ```

## Nickname Free Fire!

```js
hikki.game.nickNameFreefire('239814337').then(console.log)
```
 *return*
 ```txt
 { success: 0, userName: 'Jαᴍαℓ•ProGen' }
 ```
 ## Top Up Free Fire
 ```js
 async function topupFreeFire() {
const makeSession = await hikki.game.topupFreeFire('239814337', '70') // support nominal 5 12 70 140 355 720'
// console.log(makeSession) if get more property
return await hikki.game.payDiamond(makeSession, '08953225697662')
}
topupFreeFire().then(console.log).catch(console.error)
```
*return*
```txt
{
  deepLink: null,
  qrCode: 'https://api.veritrans.co.id/v2/qris/afc8913b-b730-47c0-b9d3-7e6ca3a241a0/qr-code',
  checkoutUrl: null,
  paymentMethod: 'QRIS',
  timerCount: 300
}
```
## Nickname Mobile Legends!
  ```js
  hikki.game.nickNameMobileLegends('109088431', '2558').then(console.log).catch(console.error)
  ```
  *return*
  ```txt
  { success: 0, userName: 'OhMyAyaka' }
  ```
## Nickname Supersus!
```js
hikki.game.superSusChecker('20431364').then(console.log).catch(console.error)
```
*return*
```txt
{
  id: 20431364,
  name: 'Ukhti_Ukhti',
  account: 'Ukhti_Ukhti',
  userId: 9013482360,
  spaceId: 20431364,
  sex: 1,
  cupNum: 1622,
  bindType: 6,
  headId: 0,
  headUrl: '',
  device: '4fc1d2e62c1652fdf3604dc21f0d7563'
}
```

- -    mulut tu di jaga. jangan di kontol kontolin, di ngentod ngentodtin, di anjing anjingin
# Downloader Feature
## facebook!
```js
hikki.downloader.facebookDownload('https://www.facebook.com/mhmd.farid.908/videos/473529950837803/').then(console.log).catch(console.error)
```
*return*
```txt
{
  creator: '@hadianto02_',
  status: 'ok',
  statusCode: 200,
  result: {
    url: 'https://www.facebook.com/mhmd.farid.908/videos/473529950837803/',
    title: 'Mhmd Faridapp-facebookFacebook WatchVideo UnavailableSorry, this video could not be played.Learn more',
    time: '',
    hd: 'https://video-lga3-1.xx.fbcdn.net/v/t39.25447-2/278731145_539546114277028_3149600198788462737_n.mp4?_nc_cat=108&vs=41fe40c3b1bd9e00&_nc_vs=HBksFQAYJEdJa1puUkNrUG52ZXR1b0JBSkU0U1lteG9MVXJibWRqQUFBRhUAAsgBABUAGCRHSWNQSnhEX0hWWVJVQWtCQUh5ZGJQYWxjNGRCYnY0R0FBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAm2JbQ%2Foir1wEVAigCQzMYC3Z0c19wcmV2aWV3HBdAJTMzMzMzMxggZGFzaF92NF81c2VjZ29wX2hxMV9mcmFnXzJfdmlkZW8SABgYdmlkZW9zLnZ0cy5jYWxsYmFjay5wcm9kOBJWSURFT19WSUVXX1JFUVVFU1QbCogVb2VtX3RhcmdldF9lbmNvZGVfdGFnBm9lcF9oZBNvZW1fcmVxdWVzdF90aW1lX21zATAMb2VtX2NmZ19ydWxlB3VubXV0ZWQTb2VtX3JvaV9yZWFjaF9jb3VudAUzODExOBFvZW1faXNfZXhwZXJpbWVudAAMb2VtX3ZpZGVvX2lkDzQ3MzUyOTk1MDgzNzgwMxJvZW1fdmlkZW9fYXNzZXRfaWQPNDczNTI5OTQ0MTcxMTM3FW9lbV92aWRlb19yZXNvdXJjZV9pZA80NzM1Mjk5NDA4Mzc4MDQcb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZBAxMTkxNTcxODYxNjAzMzEzDnZ0c19yZXF1ZXN0X2lkACUCHAAlxAEbB4gBcwQxNzQ4AmNkCjIwMjItMDEtMDEDcmNiBTM4MTAwA2FwcA1GYWNlYm9vayBMaXRlAmN0CkdST1VQX1BPU1QTb3JpZ2luYWxfZHVyYXRpb25fcw8xMC42MzQ3NDE1Mzk2NjMCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=1-7&_nc_sid=edb743&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=6sTmvKTF4zkAX_RvxIq&_nc_oc=AQlHFCdAow4RGbu8GdXwPq5uUvjGaOuC7cp7s7lUzF7pt-DmfewP5CWHO8J2F5Mf1bE&_nc_ht=video-lga3-1.xx&edm=AGo2L-IEAAAA&oh=00_AT9NuI6cZHyWfTjnkGPgiCAUYqnCaarSP429G-IIGm9LmA&oe=6297936C&_nc_rid=040035894809906',
    sd: 'https://video-lga3-1.xx.fbcdn.net/v/t42.1790-2/270357264_142465411518574_288422406772840695_n.mp4?_nc_cat=102&ccb=1-7&_nc_sid=985c63&efg=eyJybHIiOjMwMCwicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIn0%3D&_nc_ohc=ScZJwtiVzN8AX9z7oQt&rl=300&vabr=89&_nc_ht=video-lga3-1.xx&edm=AGo2L-IEAAAA&oh=00_AT_rZQ-05jcFj-4aASv0R6g1vz3hXYiuc1JjfVMfZ2a0sw&oe=62933C28',
    audio: 'https://video-lga3-1.xx.fbcdn.net/v/t42.1790-2/271169016_350025803173957_8823976168634510532_n.mp4?_nc_cat=108&ccb=1-7&_nc_sid=5aebc0&efg=eyJ2ZW5jb2RlX3RhZyI6ImRhc2hfYXVkaW9fYWFjcF82NF9mcmFnXzJfYXVkaW8ifQ%3D%3D&_nc_ohc=w-jnptB0N_YAX9v7a3N&_nc_oc=AQnhYdCsCLezlStKiwEWTDV9cEzzi9Ty2y_MfNJbK_Q1aNxOCwCqLdflgZAniXdO7R8&_nc_ht=video-lga3-1.xx&edm=AGo2L-IEAAAA&oh=00_AT_gI3vFh1fmqAl-C1Koq6dn3RGwBtS3UvVWbxrnmZinNw&oe=6293401F'
  }
}
```
## Meta Scrape!
```js
// all in one download sosial link see more on https://downvideo.quora-wiki.com/
hikki.downloader.metaScrape('https://vt.tiktok.com/ZSdeRDb3U//').then(console.log).catch(console.error)
```
*return*
```txt
<uknown>..... 
depending on your link. different social media, different property results
```
## Instagrams!
```js
hikki.downloader.instagram('https://www.instagram.com/p/Cf58iIUL1TE/?utm_source=ig_web_copy_link').then(console.log).catch(console)
```
*return*
```txt
{
  url: 'https://www.instagram.com/p/Cf58iIUL1TE/?utm_source=ig_web_copy_link',
  title: 'Instagram Post from k4t4sh1._',
  thumbnail: 'https//downvideo.quora-wiki.com/plugin/aio-video-downloader/cache/ig-0dc0b97b8f0fa629a3a61992539595344146619c.jpg',
  thumbnailHotlinkProtection: true,
  duration: null,
  medias: [
    {
      url: 'https://scontent.cdninstagram.com/v/t50.2886-16/293166280_809677203744629_6326455376567501929_n.mp4?_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=vWahqLZd6bQAX9ODFbc&edm=AJBgZrYBAAAA&ccb=7-5&oe=62D1DDEB&oh=00_AT9M_UBNCq8qgyjfSDUJzsTrFj0fBQPmSQcK-1EWTML4mw&_nc_sid=78c662',
      quality: 'hd',
      extension: 'mp4',
      size: 1623137,
      formattedSize: '1.55 MB',
      videoAvailable: true,
      audioAvailable: true,
      chunked: false,
      cached: false
    }
  ],
  source: 'instagram',
  author: '@hardianto02_'
}
```
## Tiktok!
```js
hikki.downloader.tiktokDownloader('https://vt.tiktok.com/ZSdeRDb3U/', {withNoWM: true}).then(console.log).catch(console.error) // if option withNoWm false default
```
*return*
```txt
{
  title: '#flashback2021 #xyzbca #fyp #temolla',
  keywords: 'flashback,alwayssfor.u,flashback2021,xyzbca,fyp,temolla,TikTok, ティックトック, tik tok, tick tock, tic tok, tic toc, tictok, тик ток, ticktock',
  description: '537.4K Suka, 4.4K Komentar. Video TikTok dari flashback (@alwayssfor.u): "#flashback2021 #xyzbca #fyp #temolla". Te Molla .',
  canonicalHref: 'https://www.tiktok.com/@alwayssfor.u/video/7074218009589517594',
  robotsContent: 'index, follow',
  applicableDevice: 'pc, mobile',
  id: '7074218009589517594',
  desc: '#flashback2021 #xyzbca #fyp #temolla',
  createTime: 1647094733,
  scheduleTime: 0,
  video: {
    id: '7074218009589517594',
    height: 576,
    width: 576,
    duration: 10,
    ratio: '720p',
    cover: 'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/28469bef2a8c496fbbfd98fac6a0a732?x-expires=1653829200&x-signature=CTJFjRx1aF5awb2fhEWAjV1Af5c%3D',
    originCover: 'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/11888c1df20b41739df2a5274bba4d29_1647094916?x-expires=1653829200&x-signature=jGoHT1icvha2u8yFvX1E6rhu4GY%3D',
    dynamicCover: 'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/d68ef6fd4cd14af087e21fb3c8d93bf6_1647094826?x-expires=1653829200&x-signature=UQ7zFSWdT131Ui9nW5w8xxZv5Kc%3D',
    playAddr: 'https://v16-webapp.tiktok.com/3e98e63929d06ad7151ca6e53105b29d/6293719b/video/tos/useast2a/tos-useast2a-pve-0037-aiso/451c21181db74c5284b810e7dd1e0803/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=1434&bt=717&btag=80000&cs=0&ds=3&ft=eXd.6HmIMyq8ZHkBSwe2NG3Qml7Gb&mime_type=video_mp4&qs=0&rc=NGZnZWdmZjo4PGhlZztkOkBpamZodDY6ZmtkOzMzZjgzM0AzNV8wYmEvX14xYTBgNWIzYSNoLjNxcjRna2pgLS1kL2Nzcw%3D%3D&l=202205290713530102440690350132096D',
    downloadAddr: 'https://v16-webapp.tiktok.com/3e98e63929d06ad7151ca6e53105b29d/6293719b/video/tos/useast2a/tos-useast2a-pve-0037-aiso/451c21181db74c5284b810e7dd1e0803/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=1434&bt=717&btag=80000&cs=0&ds=3&ft=eXd.6HmIMyq8ZHkBSwe2NG3Qml7Gb&mime_type=video_mp4&qs=0&rc=NGZnZWdmZjo4PGhlZztkOkBpamZodDY6ZmtkOzMzZjgzM0AzNV8wYmEvX14xYTBgNWIzYSNoLjNxcjRna2pgLS1kL2Nzcw%3D%3D&l=202205290713530102440690350132096D',
    shareCover: [
      '',
      'https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/11888c1df20b41739df2a5274bba4d29_1647094916~tplv-tiktok-play.jpeg?x-expires=1654412400&x-signature=QvMN4jpqYuo280DHS2N7DuaFyyg%3D',
      'https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/11888c1df20b41739df2a5274bba4d29_1647094916~tplv-tiktokx-share-play.jpeg?x-expires=1654412400&x-signature=Wx%2BwwAUaiS8KcA1GVnshG1DiVQ4%3D'     
    ],
    reflowCover: 'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/28469bef2a8c496fbbfd98fac6a0a732?x-expires=1653829200&x-signature=CTJFjRx1aF5awb2fhEWAjV1Af5c%3D',
    bitrate: 734257,
    encodedType: 'normal',
    format: 'mp4',
    videoQuality: 'normal',
    encodeUserTag: '',
    codecType: 'h264',
    definition: '720p'
  },
  author: {
    id: '6983995701957673985',
    shortId: '',
    uniqueId: 'alwayssfor.u',
    nickname: 'flashback',
    avatarLarger: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/17c65e983a4ce4a2d6c6f5e2a50c3746~c5_1080x1080.jpeg?x-expires=1653980400&x-signature=vmF1k00qDtfgtMEp%2BI5H7Zg9KB8%3D',
    avatarMedium: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/17c65e983a4ce4a2d6c6f5e2a50c3746~c5_720x720.jpeg?x-expires=1653980400&x-signature=h8WwB49WQxupJnWB5jEyDycNvTQ%3D',
    avatarThumb: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/17c65e983a4ce4a2d6c6f5e2a50c3746~c5_100x100.jpeg?x-expires=1653980400&x-signature=dyjo%2BPyhRDL3bRB4O0yzf2LYho0%3D',
    signature: '♥︎',
    verified: false,
    secUid: 'MS4wLjABAAAAIPwufYgnUxQBcq8Th51HbBuSPCRjS0--Xpue8Ea_rhhv_AcsPTnW39uitniyIW5l',
    ftc: false,
    relation: 0,
    openFavorite: false,
    commentSetting: 0,
    duetSetting: 3,
    stitchSetting: 3,
    privateAccount: false,
    secret: false,
    isADVirtual: false,
    roomId: ''
  },
  music: {
    id: '6607483246617824006',
    title: 'Te Molla ',
    playUrl: 'https://sf16-ies-music-sg.tiktokcdn.com/obj/tos-alisg-ve-2774/d99f3da5dcb447ef960b02c5fa89a9c0',
    coverLarge: 'https://p16-sg.tiktokcdn.com/aweme/720x720/tos-alisg-v-2774/2d62130c9c304e0094a12faa519f9c19.jpeg',
    coverMedium: 'https://p16-sg.tiktokcdn.com/aweme/200x200/tos-alisg-v-2774/2d62130c9c304e0094a12faa519f9c19.jpeg',
    coverThumb: 'https://p16-sg.tiktokcdn.com/aweme/100x100/tos-alisg-v-2774/2d62130c9c304e0094a12faa519f9c19.jpeg',
    authorName: 'Arnon (feat. Killua)',
    original: false,
    duration: 29,
    album: '',
    scheduleSearchTime: 0
    .... any more
}
```
## youtube!
```js
hikki.downloader.youtubePlay('light switch').then(console.log).catch(console.error)
```
*return*
```txt 
<very loong...> // mp3, mp4, quality 144p-720p any more property
```
# Weebs Feature
## Wallpaper
```js
hikki.anime.animeWallpaper('keqing').then(console.log).catch(console.error)

```
*return*
```txt
[
  'https://w0.peakpx.com/wallpaper/929/489/HD-wallpaper-keqing-portrait-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/372/238/HD-wallpaper-purple-hair-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/323/152/HD-wallpaper-keqing-in-purple-dress-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/874/936/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/428/815/HD-wallpaper-beidou-ganyu-keqing-lumine-ningguang-paimon-qiqi-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/291/570/HD-wallpaper-video-game-genshin-impact-ganyu-genshin-impact-keqing-genshin-impact-lumine-genshin-impact-ningguang-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/442/878/HD-wallpaper-anime-anime-girls-keqing-genshin-impact-genshin-impact-baisi-shaonian-red-eyes-purple-hair-twintails-dress-sword.jpg',
  'https://w0.peakpx.com/wallpaper/755/369/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/9/854/HD-wallpaper-keqing-lumine-xiao-zhongli-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/151/743/HD-wallpaper-genshin-impact-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/804/535/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/243/231/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/872/432/HD-wallpaper-anime-genshin-impact-keqing-genshin-impact-long-hair-purple-eyes.jpg',
  'https://w0.peakpx.com/wallpaper/132/241/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/181/472/HD-wallpaper-purple-eyes-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/808/98/HD-wallpaper-purple-hair-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/209/491/HD-wallpaper-purple-eyes-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/555/641/HD-wallpaper-purple-hair-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/615/118/HD-wallpaper-purple-eyes-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/814/183/HD-wallpaper-keqing-digital-art-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/823/861/HD-wallpaper-keqing-with-purple-eyes-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/591/698/HD-wallpaper-genshin-impact-keqing-genshin-impact-anime-girls-black-stockings-hold-up-stockings-purple-hair-bare-midriff-short-shorts.jpg',
  'https://w0.peakpx.com/wallpaper/537/942/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact-long-hair-purple-eyes-purple-hair.jpg',
  'https://w0.peakpx.com/wallpaper/477/774/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/665/225/HD-wallpaper-video-game-genshin-impact-girl-keqing-genshin-impact-long-hair-purple-hair.jpg',
  'https://w0.peakpx.com/wallpaper/61/765/HD-wallpaper-keqing-qiqi-xinyan-ganyu-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/10/389/HD-wallpaper-anime-girls-genshin-impact-keqing-genshin-impact-yaya-chan-purple-hair-twintails-purple-eyes-dress-pantyhose-sword.jpg',
  'https://w0.peakpx.com/wallpaper/658/336/HD-wallpaper-purple-eyes-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/246/909/HD-wallpaper-keqing-xiao-on-roof-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/254/736/HD-wallpaper-amber-keqing-lumine-games-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/361/357/HD-wallpaper-keqing-mona-night-qiqi-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/405/89/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/342/136/HD-wallpaper-genshin-impact-anime-girls-keqing-genshin-impact-pillo-artwork-cherry-blossom-purple-hair-twintails-purple-eyes-japanese-clothes.jpg',
  'https://w0.peakpx.com/wallpaper/140/39/HD-wallpaper-purple-hair-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/91/684/HD-wallpaper-genshin-impact-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/502/961/HD-wallpaper-keqing-with-purple-eyes-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/407/750/HD-wallpaper-pink-eyes-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/80/737/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/539/409/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact-paimon-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/66/114/HD-wallpaper-anime-genshin-impact-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/547/617/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact-xiao-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/545/358/HD-wallpaper-keqing-lumine-ningguang-paimon-qiqi-xingqiu-xinyan-zhongli-genshine-impact.jpg',
  'https://w0.peakpx.com/wallpaper/70/998/HD-wallpaper-beidou-ganyu-guoba-keqing-ningguang-qiqi-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/718/886/HD-wallpaper-traveler-keqing-amber-genshin-impact-games.jpg',
  'https://w0.peakpx.com/wallpaper/726/485/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/997/104/HD-wallpaper-pantyhose-purple-hair-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/408/920/HD-wallpaper-keqing-purple-eyes-purple-hair-yukata-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/803/124/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/723/138/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/870/653/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/553/530/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/715/950/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/101/354/HD-wallpaper-video-game-genshin-impact-ganyu-genshin-impact-keqing-genshin-impact-ningguang-genshin-impact-qiqi-genshin-impact-xiao-genshin-impact-zhongli-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/35/645/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact-lumine-genshin-impact-mona-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/494/94/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/239/489/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/561/206/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/120/195/HD-wallpaper-aether-beidou-chongyun-ganyu-keqing-ningguang-paimon-qiqi-xiangling-xiao-xingqiu-xinyan-zhongli-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/900/658/HD-wallpaper-video-game-genshin-impact-blonde-fischl-genshin-impact-green-eyes-keqing-genshin-impact-pink-eyes-purple-hair.jpg',
  'https://w0.peakpx.com/wallpaper/132/475/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/103/363/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/639/281/HD-wallpaper-anime-anime-girls-digital-art-artwork-2d-portrait-display-vertical-vardan-genshin-impact-keqing-genshin-impact-twintails-purple-hair-sword.jpg',
  'https://w0.peakpx.com/wallpaper/979/63/HD-wallpaper-purple-eyes-hair-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/253/699/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/393/300/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/514/106/HD-wallpaper-genshin-impact-keqing-in-white-background-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/38/90/HD-wallpaper-anime-anime-girls-digital-art-artwork-portrait-display-vertical-mellozzo-genshin-impact-keqing-genshin-impact-dress-pantyhose-purple-eyes-purple-hair.jpg',
  'https://w0.peakpx.com/wallpaper/790/605/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact-sucrose-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/362/850/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg',
  'https://w0.peakpx.com/wallpaper/226/234/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg'
]
```
## Hentai Hot! (di tanggung yang make)
```js

const array_str = await hikki.anime.getHotPic().then(console.log).catch(console.error)
// get raw url
await hikki.anime.getUrl(array_str[0]).then(console.log).catch(console.error)

```
*return*
```txt
// result hot hentai
[
  'https://2dhentai.club/2022/05/19/ai-hayasaka-and-kaguya-shinomiya-kaguya-sama/',
  'https://2dhentai.club/2022/05/19/yelan-hairy-pussy-r34/',
  'https://2dhentai.club/2022/05/19/hutao-ass-and-pussy-up-r34/',
  'https://2dhentai.club/2022/05/19/girls-frontline-hk416-r34/',
  'https://2dhentai.club/2022/05/19/assassin-shuten-douji-fate/'
] 
// return Function getUrl
https://cdn.2dhentai.club/wp-content/uploads/2022/05/Genshin-Impact-hentai-Keqing-feet-covered-in-cum-r34-scaled.jpg
```
## Hentai Random!
```js 
await hikki.anime.randomHentai().then(console.log).catch(console.error)
```
*return*
```txt
[
  'https://2dhentai.club/2022/05/19/ai-hayasaka-and-kaguya-shinomiya-kaguya-sama/',
  'https://2dhentai.club/2022/05/19/yelan-hairy-pussy-r34/',
  'https://2dhentai.club/2022/05/19/hutao-ass-and-pussy-up-r34/',
  'https://2dhentai.club/2022/05/19/girls-frontline-hk416-r34/',
  'https://2dhentai.club/2022/05/19/assassin-shuten-douji-fate/'
]
```
## Hentai Get By Name (sd quality)
```js
await hikki.anime.getCharacterHentaiByNameAndGetRawURL('keqing').then(console.log).catch(console.error) // gpp sd yang penting banyak
```
*return*
```txt
[
  'https://cdn.2dhentai.club/wp-content/uploads/2022/05/Genshin-Impact-hentai-Keqing-feet-covered-in-cum-r34-image.jpg',
  'https://cdn.2dhentai.club/wp-content/uploads/2021/09/Keqing-Wet-Pussy-Genshin-Impact-2d-hentai-video-552x368.jpg',
  'https://cdn.2dhentai.club/wp-content/uploads/2021/08/Keqing-spreading-pussy-Genshin-Impact-原神？-hentai-rule-34-552x468.jpg',
  'https://cdn.2dhentai.club/wp-content/uploads/2021/06/Genshin-Impact-Keqing-rule-34-552x780.jpg',
  'https://cdn.2dhentai.club/wp-content/uploads/2021/05/Keqing-Genshin-Impact-2d-hentai-552x784.jpg',
  'https://cdn.2dhentai.club/wp-content/uploads/2021/01/AztoDio-fan-art-Genshin-Impact-Keqing-hentai-1-552x718.jpg',
  'https://cdn.2dhentai.club/wp-content/uploads/2021/01/Genshin-Impact-Keqing-animated-pov-creampie-552x830.jpg'
]
```
## Hentai Get By Name (hd quality)
```js
const jangan = await hikki.anime.getCharacterHentaiByName('keqing')
hikki.anime.getUrl(jangan[0]).then(console.log).catch(console.error)
```
*return*
```txt
https://cdn.2dhentai.club/wp-content/uploads/2022/05/Genshin-Impact-hentai-Keqing-feet-covered-in-cum-r34-scaled.jpg
```
# Payment Feature
## Convert Saldo ke Gopay
- convert saldo ke gopay support all payment method karena sudah menggunakan qris serta biaya admin sebesar Rp.1.190
```js
async function gopay(idProduct, PhoneNumber) {
    const csrf = await hikki.payment.csrfGenerator()
    const { data } = await hikki.payment.listProduct(csrf)
    // console.log(data) untuk melihat id product yang tersedia
    const isValidId = data.daftar_product.find(product => product.id == idProduct)
    if (!isValidId) return console.error('invalid id product')
    const gass = await hikki.payment.convertGopay(idProduct,PhoneNumber, csrf)
    if (!'qr' in gass) return console.error('kurang ganteng')
    return {
        creator: '@hardianto02_',
        ...gass,
        ...isValidId
    }
}
gopay(24, '085173222764').then(console.log).catch(console.error)
```
*return*
```txt
{
  versiXendit: 1,
  viaBank: 'xendit',
  isOpenSnap: 'xendit',
  tokenPayment: '{"id":"qr_4007b09b-107c-44b1-8073-962933e44672","external_id":"P5242503","amount":11190,"description":"","qr_string":"00020101021.WWW011893600915019388493802091938849380303UME51440014ID.CO.QRIS.WWW0215ID20211191923950303UME5204504553033605405111905802ID5911hotel_murah6015JAK1216062820125JfESlgCFwVzUrgDQXss0FuXop60490011ID.DANA.WWW0425MER2021071400774509608641050116304C5D7","callback_url":"https:\\/\\/hotelmurah.com\\/","type":"DYNAMIC","status":"ACTIVE","created":"2022-05-31T10:53:45.361Z","updated":"2022-05-31T10:53:45.361Z","metadata":null,"ewallet_type":"qri
  id_order: 5242503,
  status: 'NTI0MjUwMw==',
  csrf: 'f969dd19aed3a16eaf81ebe7001b8cd4',
  id_user: '0851732227641653994424',
  qr: 'https://www.hotelmurah.com/pulsa/xendit/sbq888?pbq888=P5242503',
  id: '24',
  harga_jual: '10000',
  harga_admin: '1000',
  provider_aktif: '7',
  enable: '1',
  jenis: ''
}
```
## Convert Saldo By Id
- convert salod anda ke dana, shopeepay, gopay, linkaja 
```txt
id_product untuk convert saldo ke shopeepay 1-10 max Rp.200.000
id_product untuk convert saldo ke ovo 11-23 max Rp.200.000
id_product untuk convert saldo ke gopay 24-35 max Rp.200.000
id_product untuk convert saldo ke dana 36-43 max Rp.200.000
id_product untuk convert saldo ke linkaja 44-51 max Rp.200.000
```

```js
// check id product di atas
hikki.payment.convertSaldo(1, '085173222764').then(console.log).catch(console.error)
```
```txt
{
  order_id: 'P5244557085173222764',
  tagihan: 'Rp 11.190',
  time: '31 May 2022 18:58:51',
  RRN: '4586557751',
  product: 'ShopeePay 10.000',
  img: 'https://www.hotelmurah.com/pulsa/xendit/sbq888?pbq888=P5244557'
}
```
# Tools Feature
## build sticker (whatsapp-sticker)
```js
hikki.tools.makeSticker('https://w0.peakpx.com/wallpaper/929/489/HD-wallpaper-keqing-portrait-genshin-impact.jpg', {
    author: 'hikki',
    pack: 'keqing',
    // circle: true, // default false
    // keepScale: true, // default false
}).then(console.log).catch(console.error)
```
*return* 
```txt
<Buffer 52 49 46 46 4e b9 00 00 57 45 42 50 56 50 38 58 0a 00 00 00 08 00 00 00 ff 01 00 ff 01 00 56 50 38 20 5e b3 00 00 70 86 02 9d 01 2a 00 02 00 02 3e 6d ... 47396 more bytes>
```
## expand (unshort url)
```js
hikki.tools.expandedUrl('https://vt.tiktok.com/ZSdeRDb3U/').then(console.log).catch(console.error)
```
*return*
```txt
https://www.tiktok.com/@iyhfflawss/video/7074218009589517594?_d=secCgYIASAHKAESPgo8GxjBW2lUQKfkeBr900O4epz2%2FVW9pfv2nXCzrMXEhu2ae%2FEURKDG%2FG4Lq5zRGm4L2TX4iIFTqEqwd%2BPbGgA%3D&_r=1&language=id&mid=6607483246617824006&preview_pb=0&region=ID&sec_user_id=MS4wLjABAAAAnFLbQAU9r0viMRxHGC2YX71B62NBp7zOAlalUT8JGomy9sZLBLDCaUePkoj9Xi_e&share_app_id=1180&share_item_id=7074218009589517594&share_link_id=fdab83d8-a5ef-4c91-8f40-3ba97ddb01b8&social_sharing=v1&source=h5_t&timestamp=1647175571&u_code=dj933bg19lhcaj&ugbiz_name=Main&user_id=6977556456305411073&utm_campaign=client_share&utm_medium=android&utm_source=copy
```
# Generator
## Elon Talk Meme
```
hikki.maker.elonTalks(1, 'beliau kocak geming').then(console.log).catch(console.error)
```
*return*
```
{
  status: 'success',
  status: 'hardianto02',
  url: 'https://elontalks.s3.amazonaws.com/b21920d4e2ae47ffb3b006b46c76b79a.mp4'
}
```


# Thanks to
- father and mother
- [@cina](https://github.com/hexagonz)
- [@rayyreall](https://github.com/rayyreall)

## Authors

- [@hardianto](https://www.github.com/hardianto-cpu)

## Contributing

Contributions are always welcome!
 [Contributing Now](https://github.com/hardianto-cpu/hikki-me)

 [Donate And Contact Me](https://wa.me/6285173222764)

## Notice

if there is an error in the docs apologies. if there is an error, bug or request please contact me on [Instagram](https://instagram.com/hardianto02_) or [Whatsapp](https://wa.me/6285173222764)