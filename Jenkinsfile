pipeline{
  environment {
    registry = "teodora95/node-helloworld"
    registryCredential = 'dockerhub-cred-raja'
    dockerImage = ''
  }
  agent any
    stages {
        stage('Build'){
            steps{
                script{
                    sh 'npm install'
                }
            }
        }
        
    }
}
