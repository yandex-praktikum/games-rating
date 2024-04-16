async function getData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    }
    catch(error) {
        console.log(error)
    }
}

const fs = require('fs');

function readJSONFile(filename, callback) {
    fs.readFile(filename, (err, data) => {
        if (err) {
            callback(err);
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            callback(null, jsonData);
        } catch (parseError) {
            callback(parseError);
        }
    });
}

function getRandomGame(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

const filename = 'dataset/rating.json';
readJSONFile(filename, (err, data) => {
    if (err) {
        console.error('Ошибка чтения файла:', err);
        return;
    }
    const randomGame = getRandomGame(data);
    console.log(randomGame);
});


module.exports = { getData, getRandomGame }