export default function getParsedString(string, length) {
  if (string.length <= length) return string;
  const strings = string.split("");

  const newStrings = [];
  for (let i = 0; i < length; i++) newStrings.push(strings[i]);
  newStrings.push("...");

  return newStrings.join("");
}
