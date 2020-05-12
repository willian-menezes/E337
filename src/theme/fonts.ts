export default {
  typography: {
    sizes: {
      xxl: 32,
      xl: 24,
      l: 20,
      xm: 18,
      m: 16,
      s: 14,
      xs: 12,
      xxs: 9,
    },
    family: {
      arial: 'Arial',
    },
  },
};

export interface FontsPropsFamily {
  arial: string;
}

export interface FontsPropsTypography {
  size: number;
  color: string;
  font: string;
}

export interface FontsPropsTypographyTypes {
  h1: FontsPropsTypography;
  h2: FontsPropsTypography;
  h3: FontsPropsTypography;
  h4: FontsPropsTypography;
  p: FontsPropsTypography;
  label: FontsPropsTypography;
  description: FontsPropsTypography;
  selectOptions: FontsPropsTypography;
  selectOptionsSelected: FontsPropsTypography;
  title: FontsPropsTypography;
  information: FontsPropsTypography;
  inputLabel: FontsPropsTypography;
  balanceSmall: FontsPropsTypography;
  balanceMedium: FontsPropsTypography;
  balanceMediumWhite: FontsPropsTypography;
  link: FontsPropsTypography;
  linkTerms: FontsPropsTypography;
  listLabel: FontsPropsTypography;
  listDescription: FontsPropsTypography;
}

export interface FontsPropsSizes {
  xxl: number;
  xl: number;
  l: number;
  m: number;
  s: number;
  xs: number;
  xxs: number;
}

export interface FontsProps extends FontsPropsTypographyTypes {
  sizes: FontsPropsSizes;
  family: FontsPropsFamily;
}

export type FontsSizesOptions = keyof FontsPropsSizes;

export type FontsFamilyOptions = keyof FontsPropsFamily;

export type FontsTypesOptions = keyof FontsPropsTypographyTypes;
