const fetch = require('node-fetch')
const { default: axios } = require('axios')

module.exports = {
  async nickNameFreefire(id) {
    return new Promise(async (resolve, reject) => {
      axios
        .post(
          'https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store',
          new URLSearchParams(
            Object.entries({
              productId: '3',
              itemId: '353',
              catalogId: '376',
              paymentId: '2037',
              gameId: id,
              product_ref: 'REG',
              product_ref_denom: 'AE',
            })
          ),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Referer: 'https://www.duniagames.co.id/',
              Accept: 'application/json',
            },
          }
        )
        .then((response) => {
          resolve(response.data.data.gameDetail)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  async topupFreeFire(id, nominal) {
    return new Promise(async (resolve, reject) => {
      const json = require('./freefire.json')
      const data = nominal in json ? json[nominal] : null
      if (!data) {
        reject('nominal tidak tersedia')
      }
      data.gameId = id
      axios
        .post('https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store', new URLSearchParams(Object.entries(data)), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Referer: 'https://www.duniagames.co.id/',
            Accept: 'application/json',
          },
        })
        .then((response) => {
          resolve(response.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  async payDiamond(returnTopup, phoneNumber) {
    return new Promise(async (resolve, reject) => {
      if (!phoneNumber.startsWith('08')) return reject('input nomor dengan 08')
      axios
        .post(
          'https://api.duniagames.co.id/api/transaction/v1/top-up/transaction/store',
          new URLSearchParams(
            Object.entries({
              inquiryId: returnTopup.data.inquiryId,
              phoneNumber: phoneNumber,
              transactionId: returnTopup.data.transactionId,
            })
          ),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Referer: 'https://www.duniagames.co.id/',
              Accept: 'application/json',
            },
          }
        )
        .then((response) => {
          resolve(response.data.data.elisaConfig)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
}
