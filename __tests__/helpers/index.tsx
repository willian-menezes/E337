import {mount, shallow, ShallowWrapper} from 'enzyme';

import {ThemeProvider, DefaultTheme} from 'styled-components/native';

import React from 'react';

import {creditasTheme} from '../../src/theme';

export const mountWithTheme = (
  tree: React.ReactElement,
  theme: DefaultTheme = creditasTheme,
): any => {
  const WrappingThemeProvider: React.FC<{
    children: React.ReactChild;
  }> = (props) => <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;

  return mount(tree, {wrappingComponent: WrappingThemeProvider});
};

export const shallowWithTheme = (
  tree: React.ReactElement,
  theme: DefaultTheme = creditasTheme,
): ShallowWrapper => {
  const WrappingThemeProvider: React.FC<{
    children: React.ReactChild;
  }> = (props) => <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;

  return shallow(tree, {wrappingComponent: WrappingThemeProvider});
};
