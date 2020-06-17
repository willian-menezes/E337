#!/bin/bash

set -e

echo "<------YARN INSTALL------>"
yarn install

echo "<------YARN TEST------>"
yarn eslint . && yarn test:jest -- -u
