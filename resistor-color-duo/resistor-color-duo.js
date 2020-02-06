const RESISTOR_COLOUR_CODE = [`black`, `brown`, `red`, `orange`, `yellow`, `green`, `blue`, `violet`, `grey`, `white`]

export const decodedValue = ([colour1, colour2]) => {
  const code1 = RESISTOR_COLOUR_CODE.indexOf(colour1)
  const code2 = RESISTOR_COLOUR_CODE.indexOf(colour2)

  return ((code1 * 10) + code2);
};


