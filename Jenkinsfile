pipeline {
    agent none
    stages {
        stage('Dependencies and tests') {
            agent {
                docker "node:10.17"
            }
            stages {
                stage('Install dependencies') {
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
            }
        }
        
        stage('Build Android Release 🙌') {
            agent {
                docker "androidsdk/android-26"
            }
            steps {
                sh "java -version"
                sh 'cd android && ./gradlew assembleRelease'
            }
        }
    }
}