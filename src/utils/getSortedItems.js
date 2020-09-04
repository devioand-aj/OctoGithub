export default function getSortedItems(array, key, order = "asc") {
  if (order === "asc")
    return array.sort((a, b) => {
      if (a[key] < b[key]) return 1;
      else if (a[key] > b[key]) return -1;
      return 0;
    });

  return array.sort((a, b) => {
    if (a[key] > b[key]) return 1;
    else if (a[key] < b[key]) return -1;
    return 0;
  });
}
