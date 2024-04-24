async function getData(url) {
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error("Ошибка получения данных");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка:", error.message);
    console.log(error);
  }
}

function getRandomGame(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

module.exports = { getData, getRandomGame };
