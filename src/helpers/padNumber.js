export default function padNumber(number) {
  let pad;
  const numberAsString = number + '';

  if (numberAsString.length >= 2) {
    pad = numberAsString.substring(0, 2);
  } else {
    pad = `${numberAsString}0`;
  }

  return pad;
}
