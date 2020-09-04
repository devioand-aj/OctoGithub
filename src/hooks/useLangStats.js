export default (data) => {
  if (data.length === 0) return;

  const keys = Object.keys(data[0]);

  let dataObj = {};

  // Creating keys'array of reveiving array of objects. [{a: 2, b: 2}, {a: 1, b: 1}] --> ["a", "b"];
  for (let i = 0; i < keys.length; i++) dataObj = { ...dataObj, [keys[i]]: [] };

  // Setting an object with array values. {a: [...], b: [...]}
  for (const item of data) {
    for (let i = 0; i < keys.length; i++) dataObj[keys[i]].push(item[keys[i]]);
  }

  return dataObj;
};
