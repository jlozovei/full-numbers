export default function isFinite(value) {
  return !(
    typeof value !== 'number' ||
    value !== value ||
    value === Infinity ||
    value === -Infinity
  );
}
