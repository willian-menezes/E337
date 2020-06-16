pipeline {
    agent { docker { image 'node:10.17' } }
    stages {
        stage('Java ') {
            steps {
                sh 'java --version'
            }
        }
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
}