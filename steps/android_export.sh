#!/bin/bash

set -e



echo "<------Android Export------>"
#rm -rf "${1}/build/android/Wingman.apk"
alias proj="cd .."
alias proj="cd android && ./gradlew assembleRelease"
#mv ./app/build/outputs/apk/app-release.apk "${1}/build/android/Wingman.apk"

