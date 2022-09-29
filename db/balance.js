const fs = require('fs');

const addBalance = (userId, amount, _dir) => {
    let position = null
    Object.keys(_dir).forEach((x) => {
        if (_dir[x].id === userId) {
            position = x
        }
    })
    if (position !== null) {
        _dir[position].balance += amount
        fs.writeFileSync('./db/balance.json', JSON.stringify(_dir, null, 3))
    } else {
        var object_add = ({
            id: userId,
            balance: amount
        })
        _dir.push(object_add)
        fs.writeFileSync('./db/balance.json', JSON.stringify(_dir, null, 3))
    }
}

const lessBalance = (userId, amount, _dir) => {
    let position = null
    Object.keys(_dir).forEach((x) => {
        if (_dir[x].id === userId) {
            position = x
        }
    })
    if (position !== null) {
        _dir[position].balance -= amount
        fs.writeFileSync('./db/balance.json', JSON.stringify(_dir, null, 3))
    }
}

const checkBalance = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((x) => {
        if (_dir[x].id === userId) {
            position = x
        }
    })
    if (position !== null) {
        return _dir[position].balance
    } else {
        return 0
    }
}

module.exports = {
    addBalance,
    lessBalance,
    checkBalance
}