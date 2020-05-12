export default {
  mountainMeadow: '#11bb77',
  disabled: '#cccccc',
  bostonBlue: '#3377bb',
  pictonBlue: '#4499ee',
  cornFlowerBlue: '#6195ED',
  pattensBlue: '#DDEEFF',
  dew: '#eeffff',
  alizarinCrimson: '#DD2222',
  outerSpace: '#334444',
  woodsmoke: 'rgba(17, 21, 21, 0.3)',
  corduroy: '#556666',
  sirocco: '#778888',
  gallery: '#eeeeee',
  white: '#ffffff',
  towerGray: 'rgba(170,187,187,0.5)',
  lightAlizarinCrimson: 'rgba(221, 34, 34, 0.05)',
  mostlyB: '#AABBBB',
};

export interface ColorPropsBackground {
  /** Primary is: bostonBlue... */
  primary: string;
  secondary: string;
  tertiary: string;
  fourth: string;
  modal: string;
  lightBlue: string;
  lightRed: string;
  darkBlue: string;
  progressBar: string;
  corduroy: string;
  error: string;
  dotIndicator: string;
  mostlyB: string;
}

export type ButtonColorScheme = {
  borderColor?: string;
  backgroundColor: string;
  fontColor: string;
};

export interface ColorsPropsButtonFlat {
  primary: ButtonColorScheme;
  secondary: ButtonColorScheme;
  disabled: ButtonColorScheme;
}

export interface ColorsPropsButtonOutline {
  primary: ButtonColorScheme;
  disabled: ButtonColorScheme;
}

export interface ColorsPropsText {
  primary: string;
  secondary: string;
  tertiary: string;
  fourth: string;
  darkBlue: string;
  darkRed: string;
  corduroy: string;
  white: string;
  recharge: string;
  externalLink: string;
}

export interface ColorsPropsInformation {
  error: string;
  success: string;
}

export interface ColorPropsInput {
  border: string;
}

export interface ColorsProps {
  background: ColorPropsBackground;
  text: ColorsPropsText;
  information: ColorsPropsInformation;
  input: ColorPropsInput;
  border: string;
  button: {
    flat: ColorsPropsButtonFlat;
    outline: ColorsPropsButtonOutline;
  };
}

export type ColorsButtonFlatOptions = keyof ColorsPropsButtonFlat;

export type ColorsButtonOutlineOptions = keyof ColorsPropsButtonOutline;

export type ColorsBackgroundOptions = keyof ColorPropsBackground;

export type ColorsTextOptions = keyof ColorsPropsText;

export type ColorsInformationOptions = keyof ColorsPropsInformation;

export type ColorsInputOptions = keyof ColorPropsInput;
