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

export function invertColor(rgb: string) {
    // if (hex.indexOf('#') === 0) {
    //     hex = hex.slice(1);
    // }
    // // convert 3-digit hex to 6-digits.
    // if (hex.length === 3) {
    //     hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    // }
    // if (hex.length !== 6) {
    //     throw new Error('Invalid HEX color.');
    // }
    // const r = parseInt(hex.slice(0, 2), 16),
    //   g = parseInt(hex.slice(2, 4), 16),
    //   b = parseInt(hex.slice(4, 6), 16);

    const colors = rgb.split(',')
    
    if (colors.length > 3) {
      throw new Error('Invalid RGB color.');
    }
    const r = parseInt(colors[0], 16)
    const g = parseInt(colors[1], 16)
    const b = parseInt(colors[2], 16)
    
    // https://stackoverflow.com/a/3943023/112731
    return (r * 0.299 + g * 0.587 + b * 0.114) > 186
        ? '#000000'
        : '#FFFFFF';

}
