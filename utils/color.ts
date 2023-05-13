export function rgbaToHex(rgba: string, forceRemoveAlpha = true) {
  return "#" + rgba.split(',') // splits them at ","
    .filter((_, index) => !forceRemoveAlpha || index !== 3)
    .map(string => parseFloat(string)) // Converts them to numbers
    .map((number, index) => index === 3 ? Math.round(number * 255) : number) // Converts alpha to 255 number
    .map(number => number.toString(16)) // Converts numbers to hex
    .map(string => string.length === 1 ? "0" + string : string) // Adds 0 when length of one number is 1
    .join("") // Puts the array to togehter to a string
}

export function imageToRGBA(image: HTMLImageElement) {
  image.crossOrigin = 'Anonymous'
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = image.width;
  canvas.height = image.height;
  context?.drawImage(image, 0, 0, 1, 1);
  return context?.getImageData(0, 0, 1, 1).data.join(',')
}