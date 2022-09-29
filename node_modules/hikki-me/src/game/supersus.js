const fetch = require('node-fetch')

module.exports = {
  async superSusChecker(id) {
    return new Promise(async (resolve, reject) => {
      const response = await fetch('https://pay.supersus.io/api/role/detail/' + id)
      const json = await response.json()
      if (json.code === 0) {
        resolve(json.data)
      } else reject(null)
    })
  },
}
