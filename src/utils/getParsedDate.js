export default function getParsedDate(date) {
  if (!date) return date;

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date(date);
  const year = d.getFullYear();
  const day = d.getDate();
  const month = monthNames[d.getMonth()];

  return `${month} ${day}, ${year}`;
}
