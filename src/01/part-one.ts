
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const getSumOfCalibrationValues = (calibrationData: Array<string>) => {
  return calibrationData.reduce((acc, next) => {

    const characters = next.split('');
    const firstDigit = characters.find(item => DIGITS.includes(item));
    const lastDigit = characters.findLast(item => DIGITS.includes(item));

    const calibrationValue = Number.parseInt(`${firstDigit}${lastDigit}`);

    return acc + calibrationValue;
  }, 0)
}
