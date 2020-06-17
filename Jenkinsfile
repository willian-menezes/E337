node {
    try {
        stage('Install dependencies ') {
            notifySlack()
            
            checkout scm

            def result = sh (script: "git log -1", returnStatus: true)

            //notifySlack('TCApp is running on jenkins!', result)

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
           // notifySlack('Uhuuuuulll 🚀:tc:', 'All processes were successfully executed.')
        }
    } catch (e) {
        //notifySlack('Ops, error!!!', e)
        throw e
    }
}

def notifySlack() {
    def attachments = [
        [
            text: 'I find your lack of faith disturbing!',
            fallback: 'Hey, Vader seems to be mad at you.',
            color: '#ff0000'
        ]
    ]

    slackSend(channel: '#continuous_delivery_process', attachments: attachments)
}
