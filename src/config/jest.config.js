/* eslint-disable no-undef */
import 'react-native';
import 'jest-enzyme';
import Enzyme from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import moment from 'moment';

jest.useFakeTimers();

/**
 * Set up DOM in node.js environment for Enzyme to mount to
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const {JSDOM} = require('jsdom');

const {document, window} = new JSDOM(
  '<!doctype html><html><body></body></html>',
  {
    url: 'http://localhost/',
  },
);

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

jest.useFakeTimers();

global.document = document;
global.window = window;
Object.keys(window).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = window[property];
  }
});
global.navigator = {
  userAgent: 'node.js',
};

copyProps(window, global);

// function suppressDomErrors() {
//   const suppressedErrors = /(React does not recognize the.*prop on a DOM element|Unknown event handler property|is using uppercase HTML|Received `true` for a non-boolean attribute `accessible`|The tag.*is unrecognized in this browser|PascalCase)/;
//   // eslint-disable-next-line no-console
//   const realConsoleError = console.error;
//   // eslint-disable-next-line no-console
//   console.error = message => {
//     if (message.match(suppressedErrors)) {
//       return;
//     }
//     realConsoleError(message);
//   };
// }

// suppressDomErrors()

/**
 * Set up Enzyme to mount to DOM, simulate events,
 * and inspect the DOM in tests.
 */
Enzyme.configure({adapter: new Adapter()});

const originalConsoleError = console.error;
console.error = (message, ...args) =>
  !message.startsWith('Warning: ') && originalConsoleError(message, ...args);

jest.mock('react-navigation-stack', () => ({
  TransitionPresets: {
    ModalTransition: {},
  },
  useHeaderHeight: jest.fn(),
}));

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('react-native-gesture-handler', () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const View = require('react-native/Libraries/Components/View/View');
  return {
    Swipeable: View,
    DrawerLayout: View,
    State: {},
    ScrollView: View,
    Slider: View,
    Switch: View,
    TextInput: View,
    ToolbarAndroid: View,
    ViewPagerAndroid: View,
    DrawerLayoutAndroid: View,
    WebView: View,
    NativeViewGestureHandler: View,
    TapGestureHandler: View,
    FlingGestureHandler: View,
    ForceTouchGestureHandler: View,
    LongPressGestureHandler: View,
    PanGestureHandler: View,
    PinchGestureHandler: View,
    RotationGestureHandler: View,
    /* Buttons */
    RawButton: View,
    BaseButton: View,
    RectButton: View,
    BorderlessButton: View,
    /* Other */
    FlatList: View,
    gestureHandlerRootHOC: jest.fn(),
    Directions: {},
  };
});

moment.locale('pt-br');
