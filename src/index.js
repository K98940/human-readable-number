module.exports = function toReadable(number) {
  if (number === 0) {
    return "zero"
  }
  if (number > 999) {
    return "Oops"
  }

  const arrTemplates = [
    ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven',
      ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'],
    ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'],
    ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine'],
    ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine'],
  ]
  const suffix = ['', '', ' hundred']

  return ([...number.toString()].reverse().reduce((result, symbol, index, arr) => {
    if (index === 1 && (+symbol) === 1) {
      return arrTemplates[0][+(symbol + arr[index - 1])]
    }
    const suf = (+symbol === 0) ? '' : suffix[index]
    return arrTemplates[index][+symbol] + suf + result
  }, '')).trim()

}