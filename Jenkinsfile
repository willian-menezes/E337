node {
    try {
        stages {
            stage('Install dependencies ') {
                steps {
                    sh 'yarn'
                }
            }
            stage('Check linting 🧐') {
                steps {
                    sh 'yarn lint --fix'
                }
            }
            stage('Check tests 😎') {
                steps {
                    sh 'yarn test --coverage'
                }
            }
            stage('Build Android Release 🙌') {
                steps {
                    sh 'cd android && ./gradlew assembleRelease'
                }
            }
        }
    } catch (e) {
        throw e
    }
}