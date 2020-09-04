import getSortedItems from "../utils/getSortedItems";

export default function useTopRatedBy(
  array,
  key,
  sortOrder = "asc",
  limit = array.length
) {
  const arrayLength = array.length;

  let newArray = [];
  let average = 0;
  let sum = 0;

  for (let i = 0; i < arrayLength; i++) sum += array[i][key];

  average = sum / arrayLength;

  for (let i = 0; i < arrayLength; i++)
    if (array[i][key] > average) newArray.push(array[i]);

  if (limit !== arrayLength && limit <= arrayLength) {
    newArray = newArray.slice(0, limit);
  }

  return getSortedItems(newArray, key, sortOrder).length > 5
    ? getSortedItems(newArray, key, sortOrder)
    : array;
}
