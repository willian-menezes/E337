pipeline {
    agent { docker { image 'node:10.17' } }
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
    }
}