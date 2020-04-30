import { scale } from '../constants/index';

export default function isSafeNumber(value) {
  return typeof value === 'number' && Math.abs(value) <= scale.MAX_SAFE_INTEGER;
}
