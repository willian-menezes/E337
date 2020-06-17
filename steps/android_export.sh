#!/bin/bash

set -e

echo "<------Android Export------>"
#rm -rf "${1}/build/android/Wingman.apk"
cd android && ./gradlew assembleRelease && cd ..
#mv ./app/build/outputs/apk/app-release.apk "${1}/build/android/Wingman.apk"

