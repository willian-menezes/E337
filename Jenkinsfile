node {
    try {
        stage('Install dependencies ') {
            notifySlack("Build process started on the TCApp - Android 🚀", 'Jenkins: Build process started on the TCApp - Android 🚀');

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

            notifySlack('All processes were successfully executed on the Android. 🙌', 'Jenkins: All processes were successfully executed on the Android. 🙌')
        }
    } catch (e) {
        notifySlack("Android error on the CI/CD process! 😢", "Jenkins: Android error on the CI/CD process! 😢", "#ff0000")
        throw e
    }
}

def notifySlack(String text = 'opa!', String fallback = 'Jenkins tem novidades!', String color = '#30ffb4') {
    def attachments = [
        [
            text: "${text}",
            fallback: "${fallback}",
            color: "${color}"
        ]
    ]

    slackSend(channel: '#continuous_delivery_process', attachments: attachments)
}
