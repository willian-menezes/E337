import {
  NavigationActions,
  StackActions,
  NavigationPopActionPayload,
  NavigationNavigateActionPayload,
  NavigationProp,
  NavigationState,
} from 'react-navigation';

let _navigator;

const setNavigator = (navigatorRef) => (_navigator = navigatorRef);

const reset = (routeName: string, params: object = {}, index = 0) =>
  _navigator.dispatch(
    StackActions.reset({
      index,
      key: null,
      actions: [NavigationActions.navigate({routeName, params})],
    }),
  );

const pop = (options: NavigationPopActionPayload) =>
  _navigator.dispatch(StackActions.pop(options));

const popToTop = () => _navigator.dispatch(StackActions.popToTop());

const navigate = (options: NavigationNavigateActionPayload) =>
  _navigator.dispatch(NavigationActions.navigate(options));

const push = (options: NavigationNavigateActionPayload) =>
  _navigator.dispatch(StackActions.push(options));

const back = () => _navigator.dispatch(NavigationActions.back());

const getParam = <T extends NavigationProp<T>>(navigation) => {
  return (key, defaultValue = '') => navigation.getParam(key, defaultValue);
};

export const getRouteFromState = (state: NavigationState): unknown => {
  const findCurrentRoute = (navState: NavigationState): NavigationState => {
    if (navState.index !== undefined) {
      return findCurrentRoute(navState.routes[navState.index]);
    }
    return navState.routeName;
  };

  return findCurrentRoute(state);
};

export const getRouteName = <T extends NavigationProp<T>>(navigation) =>
  navigation ? navigation.state.routeName : _navigator.state.routeName;

export default {
  reset,
  push,
  pop,
  popToTop,
  navigate,
  back,
  setNavigator,
  getParam,
  getRouteName,
  getRouteFromState,
};
