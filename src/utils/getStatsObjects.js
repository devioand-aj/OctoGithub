/// Parameteric Descrition
// @key: array ---> the keys that are required from each object of given array;
// @returnedKeys: array  ---> the keys that will be returned in returned array

export default function getStatsObjects(array, keys, returnedKeys) {
  if (!array) return [];
  //   localStorage.setItem("topRatedRepos", JSON.stringify(array));
  //   const array = JSON.parse(localStorage.getItem("topRatedRepos"));
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    const obj = {};
    for (let j = 0; j < keys.length; j++) {
      obj[returnedKeys[j]] = array[i][keys[j]];
    }
    newArray = [...newArray, obj];
  }
  return newArray;
}
