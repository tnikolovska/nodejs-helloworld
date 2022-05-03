
node {
    checkout scm
   

    docker.withRegistry('https://hub.docker.com/repository/docker/teodora95/nodejs-helloworld', 'dockerhub-cred-raja') {

        def customImage = docker.build("nodejs-helloworld/dockersqlcontainer","-f Dockerfile .")

        /* Push the container to the custom Registry */
        customImage.push("1.0.0")
        
        kubernetesDeploy(configs:"deployment.yaml",kubeconfigId:"kubernetes")
    }
}
