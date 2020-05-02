export default function isFloat(number) {
  return Number(number) === number && number % 1 !== 0;
}
