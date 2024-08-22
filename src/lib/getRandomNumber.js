export default function getRandomNumber(min, max, decimalPlaces) {
  // Generate a random number between min and max
  const random = Math.random() * (max - min) + min
  // Round it to the specified number of decimal places
  const factor = Math.pow(10, decimalPlaces)
  return Math.round(random * factor) / factor
}
