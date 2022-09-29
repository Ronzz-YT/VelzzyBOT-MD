const fetch = require('node-fetch').default
/**
 * download video from instagram
 * @param {String} url url instagram
 * @returns {Promise<any>}
 */
exports.instagram = async (url) => {
    return new Promise(async(resolve, reject) => {
        const data = await fetch('https://downvideo.quora-wiki.com/system/action.php', 
    {
        headers: {
            referer: 'https://downvideo.quora-wiki.com/system'
        },
        method: 'POST',
        body: new URLSearchParams(Object.entries({
            url
        }))
    })
        if (data.status !== 200) {
            reject(data)
        }
        let response = await data.json()
        const posttype = Object.keys(response)[0]
        delete response[posttype]
        response.thumbnail = 'https'+response.thumbnail
        response.author = '@hardianto02_'
        resolve(response)
    })
}
