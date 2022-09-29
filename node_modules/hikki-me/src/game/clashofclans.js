const fetch = require('node-fetch')
module.exports = {
  async getInfoClasher(tags) {
    return new Promise(async (resolve, reject) => {
      let atags = encodeURIComponent(tags)
      const response = await fetch('https://api.clashofclans.com/v1/players/' + atags, {
        headers: {
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImY5MzU1ZWRlLTVjYjEtZjc3OS0wMzUxLThlMmZiNDY0ZTU1MiIsImlhdCI6MTY1NDcwNDczMSwiZXhwIjoxNjU0NzA4MzMxLCJzdWIiOiJkZXZlbG9wZXIvYjgyOTAyNDgtZjA5Yi1jMjdlLTIyNGEtZWU3NTBmYjliNzEyIiwic2NvcGVzIjpbImNsYXNoIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9icm9uemUiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMjAuMjI1LjIyOC4xMTMvMzIiXSwidHlwZSI6ImNsaWVudCJ9LHsib3JpZ2lucyI6WyJkZXZlbG9wZXIuY2xhc2hvZmNsYW5zLmNvbSJdLCJ0eXBlIjoiY29ycyJ9XX0.kioz4eiD0Klua79dIfdhPL1Ou-Z49fKgPTvoXamOyKGF0Z_fvPz-ah2g5UFzyus-nCrQVD4K5GwX2rT9Wy86ig',
        },
      })
      const json = await response.json()
      resolve(json)
    })
  },
}
