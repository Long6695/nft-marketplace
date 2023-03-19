export const breakStringWith3Dots = (text: string): string => {
  const get6CharsFirst = text.substring(0, 6)
  const get4CharsLast = text.substring(text.length - 4)
  return `${get6CharsFirst}...${get4CharsLast}`
}
