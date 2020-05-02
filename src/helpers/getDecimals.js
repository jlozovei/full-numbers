export default function getDecimals(number) {
  return (number + '').split('.')[1];
}
