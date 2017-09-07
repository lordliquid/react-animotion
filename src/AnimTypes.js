export function tween(start, end) {
  if (start > end) {
    start = start - 1;
  }
  if (start < end) {
    start = start + 1;
  }
  return start;
}
