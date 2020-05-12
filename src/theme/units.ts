export default {
  spacing: {
    none: 0,
    xxs: 4,
    extraSmall: 8,
    small: 16,
    medium: 24,
    large: 32,
    xlarge: 40,
    xxlarge: 48,
    xxxlarge: 56,
    xxxxlarge: 64,
    extraLarge: 80,
  },
  borderRadius: 8,
  button: {
    height: 48,
  },
  input: {
    height: 32,
  },
  logo: {
    width: 122,
    height: 24,
  },
};

export interface UnitPropsSpacing {
  none: number;
  xxs: number;
  extraSmall: number;
  small: number;
  medium: number;
  large: number;
  xlarge: number;
  xxlarge: number;
  xxxlarge: number;
  xxxxlarge: number;
  extraLarge: number;
}

export interface UnitPropsButton {
  height: number;
}

export interface UnitPropsInput {
  height: number;
}

export interface UnitPropsLogo {
  width: number;
  height: number;
}

export interface UnitsProps {
  spacing: UnitPropsSpacing;
  borderRadius: number;
  button: UnitPropsButton;
  input: UnitPropsInput;
  logo: UnitPropsLogo;
}

export type UnitsSpacingOptions = keyof UnitPropsSpacing;

export type UnitsButtonOptions = keyof UnitPropsButton;

export type UnitsInputOptions = keyof UnitPropsInput;
