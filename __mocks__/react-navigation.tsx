/* eslint-disable no-undef */
export default {
  createAppContainer: jest.fn().mockReturnValue(function NavigationContainer() {
    return null;
  }),
  createDrawerNavigator: jest.fn(),
  createMaterialTopTabNavigator: jest.fn(),
  createStackNavigator: jest.fn(),
  StackActions: {
    push: jest
      .fn()
      .mockImplementation((x) => ({...x, type: 'Navigation/PUSH'})),
    replace: jest
      .fn()
      .mockImplementation((x) => ({...x, type: 'Navigation/REPLACE'})),
    reset: jest.fn(),
  },
  NavigationActions: {
    navigate: jest.fn().mockImplementation((x) => x),
  },
};
