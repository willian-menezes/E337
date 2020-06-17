node {
  try {
      
    checkout scm

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
            sh 'yarn test'
        }
    }
    stage('Build Android Release 🙌') {
        steps {
            sh 'cd android && ./gradlew assembleRelease'
        }
    }
  } catch (e) {
    //notifyBuild('FAILED')
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
