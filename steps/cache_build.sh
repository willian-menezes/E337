#!/bin/bash

set -e

echo "<------YARN INSTALL------>"
yarn

echo "<------YARN TEST------>"
yarn lint --fix && yarn test
