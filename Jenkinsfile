node {
    try {
        stage('Install dependencies ') {
            checkout scm

            def result = sh (script: "git log -1", returnStatus: true)

            notifySlack(result, 'Jenkins: Build proccess started on TCApp');

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
            //notifySlack('All processes were successfully executed.')
        }
    } catch (e) {
        //notifySlack(e)
        throw e
    }
}

def notifySlack(String text = 'opa!', String fallback = 'Jenkins tem novidades!',) {
    def attachments = [
        [
            text: "${text}",
            fallback: "${fallback}",
            color: '#ff0000'
        ]
    ]

    slackSend(channel: '#continuous_delivery_process', attachments: attachments)
}
