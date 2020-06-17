def notifySlack(String fallback = '', String text = '', String color = '#ff0000') {
    def attachments = [
        [
            text: ${text},
            fallback: ${fallback},
            color: ${color}
        ]
    ]

    slackSend(channel: '#continuous_delivery_process', attachments: attachments)
}

node {
    try {
        stage('Install dependencies ') {
            checkout scm

            def result = sh (script: "git log -1", returnStatus: true)

            notifySlack('TCApp is running on jenkins!', result)

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
            notifySlack('Uhuuuuulll 🚀:tc:', 'All processes were successfully executed.')
        }
    } catch (e) {
        notifySlack('Ops, error!!!', e)
        throw e
    }
}
