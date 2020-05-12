import 'styled-components/native';
import {DefaultTheme} from 'styled-components/native';

import colors, {ColorsProps} from './colors';

import fonts, {FontsProps} from './fonts';

import units, {UnitsProps} from './units';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsProps;
    units: UnitsProps;
    typography: FontsProps;
  }
}

export const creditasTheme: DefaultTheme = {
  colors: {
    background: {
      primary: colors.mountainMeadow,
      secondary: colors.bostonBlue,
      tertiary: colors.white,
      modal: colors.woodsmoke,
      fourth: colors.disabled,
      lightBlue: colors.dew,
      lightRed: colors.lightAlizarinCrimson,
      darkBlue: colors.pictonBlue,
      progressBar: colors.cornFlowerBlue,
      corduroy: colors.corduroy,
      error: colors.alizarinCrimson,
      dotIndicator: colors.pattensBlue,
      mostlyB: colors.mostlyB,
    },
    text: {
      primary: colors.outerSpace,
      secondary: colors.corduroy,
      tertiary: colors.sirocco,
      fourth: colors.disabled,
      darkBlue: colors.pictonBlue,
      darkRed: colors.alizarinCrimson,
      corduroy: colors.corduroy,
      white: colors.white,
      recharge: colors.mountainMeadow,
      externalLink: colors.bostonBlue,
    },
    information: {
      error: colors.alizarinCrimson,
      success: colors.pictonBlue,
    },
    input: {
      border: colors.towerGray,
    },
    button: {
      flat: {
        primary: {
          backgroundColor: colors.bostonBlue,
          fontColor: colors.white,
        },
        secondary: {
          backgroundColor: colors.white,
          fontColor: colors.bostonBlue,
        },
        disabled: {
          backgroundColor: colors.disabled,
          fontColor: colors.sirocco,
        },
      },
      outline: {
        primary: {
          backgroundColor: colors.white,
          borderColor: colors.bostonBlue,
          fontColor: colors.bostonBlue,
        },
        disabled: {
          backgroundColor: colors.disabled,
          borderColor: colors.white,
          fontColor: colors.white,
        },
      },
    },
    border: colors.gallery,
  },
  units: {
    spacing: {
      none: units.spacing.none,
      xxs: units.spacing.xxs,
      extraSmall: units.spacing.extraSmall,
      small: units.spacing.small,
      medium: units.spacing.medium,
      large: units.spacing.large,
      xlarge: units.spacing.xlarge,
      xxlarge: units.spacing.xxlarge,
      xxxlarge: units.spacing.xxxlarge,
      xxxxlarge: units.spacing.xxxxlarge,
      extraLarge: units.spacing.extraLarge,
    },
    borderRadius: units.borderRadius,
    button: {
      height: units.button.height,
    },
    input: {
      height: units.input.height,
    },
    logo: {
      width: units.logo.width,
      height: units.logo.height,
    },
  },
  typography: {
    h1: {
      size: fonts.typography.sizes.xxl,
      color: colors.outerSpace,
      font: fonts.typography.family.arial,
    },
    h2: {
      size: fonts.typography.sizes.xl,
      color: colors.outerSpace,
      font: fonts.typography.family.arial,
    },
    h3: {
      size: fonts.typography.sizes.xm,
      color: colors.outerSpace,
      font: fonts.typography.family.arial,
    },
    h4: {
      size: fonts.typography.sizes.m,
      color: colors.white,
      font: fonts.typography.family.arial,
    },
    p: {
      size: fonts.typography.sizes.m,
      color: colors.outerSpace,
      font: fonts.typography.family.arial,
    },
    title: {
      size: fonts.typography.sizes.xl,
      color: colors.outerSpace,
      font: fonts.typography.family.arial,
    },
    label: {
      size: fonts.typography.sizes.m,
      color: colors.corduroy,
      font: fonts.typography.family.arial,
    },
    listLabel: {
      size: fonts.typography.sizes.m,
      color: colors.outerSpace,
      font: fonts.typography.family.arial,
    },
    listDescription: {
      size: fonts.typography.sizes.s,
      color: colors.outerSpace,
      font: fonts.typography.family.arial,
    },
    inputLabel: {
      size: fonts.typography.sizes.m,
      color: colors.corduroy,
      font: fonts.typography.family.arial,
    },
    description: {
      size: fonts.typography.sizes.xxs * 2,
      color: colors.corduroy,
      font: fonts.typography.family.arial,
    },
    selectOptions: {
      size: fonts.typography.sizes.xm + 2,
      color: colors.sirocco,
      font: fonts.typography.family.arial,
    },
    selectOptionsSelected: {
      size: fonts.typography.sizes.xm + 2,
      color: colors.corduroy,
      font: fonts.typography.family.arial,
    },
    balanceSmall: {
      size: fonts.typography.sizes.xl,
      color: colors.white,
      font: fonts.typography.family.arial,
    },
    balanceMedium: {
      size: fonts.typography.sizes.xxl,
      color: colors.outerSpace,
      font: fonts.typography.family.arial,
    },
    balanceMediumWhite: {
      size: fonts.typography.sizes.xxl,
      color: colors.white,
      font: fonts.typography.family.arial,
    },
    information: {
      size: fonts.typography.sizes.s,
      color: colors.corduroy,
      font: fonts.typography.family.arial,
    },
    sizes: {
      xxl: fonts.typography.sizes.xxl,
      xl: fonts.typography.sizes.xl,
      l: fonts.typography.sizes.l,
      m: fonts.typography.sizes.m,
      s: fonts.typography.sizes.s,
      xs: fonts.typography.sizes.xs,
      xxs: fonts.typography.sizes.xxs,
    },
    link: {
      size: fonts.typography.sizes.m,
      color: colors.bostonBlue,
      font: fonts.typography.family.arial,
    },
    linkTerms: {
      size: fonts.typography.sizes.xxs * 2,
      color: colors.bostonBlue,
      font: fonts.typography.family.arial,
    },
    family: {
      arial: fonts.typography.family.arial,
    },
  },
};
