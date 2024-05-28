export function splitmix32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x9e3779b9) | 0;
    let t = a ^ (a >>> 16);
    t = Math.imul(t, 0x21f0aaad);
    t = t ^ (t >>> 15);
    t = Math.imul(t, 0x735a2d97);
    return ((t = t ^ (t >>> 15)) >>> 0) / 4294967296;
  };
}

export function randomRange(
  rng: () => number,
  maxExclusive: number,
  minInclusive: number = 0
) {
  return rng() * (maxExclusive - minInclusive) + minInclusive;
}

export function randomRangeInt(
  rng: () => number,
  maxExclusive: number,
  minInclusive: number = 0
) {
  return Math.floor(randomRange(rng, maxExclusive, minInclusive));
}

export function randomString(length: number) {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[randomRangeInt(Math.random, chars.length)];
  }
  return result;
}

export function shuffle(array: Array<any>, rng: () => number) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
