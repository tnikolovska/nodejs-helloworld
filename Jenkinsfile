
node {
    checkout scm
   
    bat 'docker login -u teodora95 -p Securityobjectives1!'
    docker.withRegistry('https://hub.docker.com/repository/docker/teodora95/nodejs-helloworld-repo') {

        def customImage = docker.build("teodora95/nodejs-helloworld-repo","-f Dockerfile .")

        /* Push the container to the custom Registry */
        customImage.push("1.0.0")
        
        kubernetesDeploy(configs:"deployment.yaml",kubeconfigId:"kubernetes")
    }
}
