node {
    try {
        stage('Install dependencies ') {
            notifySlack("Build process started on the TCApp 🚀", 'Jenkins: Build process started on the TCApp 🚀');

            sh 'yarn'
        }
        stage('Check linting 🧐') {
            sh 'yarn lint --fix'
        }
        stage('Check tests 😎') {
            sh 'yarn test'
        }
        stage('Build Android Release 🙌') {
            sh 'cd android && ./gradlew assembleRelease'

            notifySlack('All processes were successfully executed. 🙌', 'Jenkins: All processes were successfully executed. 🙌')
        }
    } catch (e) {
        notifySlack("Error on the CI/CD process! 😢", "Jenkins: Error on the CI/CD process! 😢")
        throw e
    }
}

def notifySlack(String text = 'opa!', String fallback = 'Jenkins tem novidades!') {
    def attachments = [
        [
            text: "${text}",
            fallback: "${fallback}",
            color: '#ff0000'
        ]
    ]

    slackSend(channel: '#continuous_delivery_process', attachments: attachments)
}
