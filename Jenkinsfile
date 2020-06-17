node {
  try {

    checkout scm

    def result = sh (script: "git log -1", returnStatus: true)

    notifySlack('TCApp is running on jenkins!', result)

    stage('Install dependencies ') {
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

// Notify build
def detailsByStatus(String buildStatus = 'STARTED') {
  def detail = ''

  switch(buildStatus) {
    case 'STARTED': case 'SUCCESSFUL': case 'FAILED':
      detail = """<p>${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
    <p>Check console output at "<a href="${env.BUILD_URL}">${env.JOB_NAME} [${env.BUILD_NUMBER}]</a>"</p>"""
    break

    case 'AUTOMATION-FAILED':
      detail = '''${FILE,path="${env.ROOT}/wingman/screenshots/DetailReport.html"}'''
    break
  }

  return detail;
}

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

def notifyBuild(String buildStatus = 'STARTED') {
  buildStatus = buildStatus ?: 'SUCCESSFUL'

  def colorName = 'RED'
  def subject = "${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'"
  def summary = "${subject} (${env.BUILD_URL})"
  def details = detailsByStatus(buildStatus)

  if (buildStatus == 'STARTED') {
    color = 'YELLOW'
  } else if ('SUCCESSFUL') {
    color = 'GREEN'
  }

  hipchatSend (color: color, notify: true, message: summary)
  emailext (
    subject: subject,
    body: details,
    to: "${env.DEFAULT_RECIPIENTS}",
    attachlog: true,
    compresslog: true,
    mimeType: 'text/html',
    charset: 'UTF-8'
  )
}
