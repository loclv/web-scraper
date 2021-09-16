// This is example of a utility
/**
 * Insert in to `str` at `pos` by `sub`.
 *
 * @param str - main string
 * @param sub - inserted substring
 * @param pos - position
 * @returns inserted string
 */
export const insertAt = (str: string, sub: string, pos: number): string =>
  `${str.slice(0, pos)}${sub}${str.slice(pos)}`;
