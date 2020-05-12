/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import * as RNPermission from 'react-native-permissions/lib/typescript';

const {
  PERMISSIONS,
  RESULTS,
} = require('react-native-permissions/lib/commonjs/constants.js');

export {PERMISSIONS, RESULTS};
// mock out any functions you want in this style...
export async function check(permission: RNPermission.Permission) {
  return jest.fn();
}

export async function request(permission: RNPermission.Permission) {
  return jest.fn();
}
