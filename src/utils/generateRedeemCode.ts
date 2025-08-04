export const generateRedeemCode = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

  const generateSegment = () =>
    Array.from({ length: 4 }, () =>
      characters.charAt(Math.floor(Math.random() * characters.length)),
    ).join('')

  return Array.from({ length: 4 }, generateSegment).join('-')
}
